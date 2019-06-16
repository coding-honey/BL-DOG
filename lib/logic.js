/**
 * Track the trade of a commodity from one trader to another
 * @param {org.example.mynetwork.Trade} trade - the trade to be processed
 * @transaction
 */
async function trade(trade) {   // eslint-disable-line no-unused-vars
  
  return getParticipantRegistry('org.example.mynetwork.Shelter')
   .then(function(traderRegistry) {
     return traderRegistry.exists(trade.newShelter.getIdentifier())
   })
    .then(function(exists) {
     if(!exists) {
       throw Error('Invalid participant id')
     } else {
      return getAssetRegistry('org.example.mynetwork.Pet')
       .then(function (assetRegistry) {
        const tradeNotification = getFactory().newEvent('org.example.mynetwork','TradeNotification');
        tradeNotification.pet = trade.pet;
        tradeNotification.shelter = trade.pet.nshelter;
        trade.pet.nshelter = trade.newShelter;
        emit(tradeNotification);
        return assetRegistry.update(trade.pet);
        return assetRegistry.update(trade.pet.count);
    });
     }
   })
}

/**
* Track the trade of a commodity from one trader to another
* @param {org.example.mynetwork.ChangeGuardian} cg - the trade to be processed
* @transaction
*/
async function cg(cg) {
return getAssetRegistry('org.example.mynetwork.Guardian')
.then(function(guardianRegistry) {
 return guardianRegistry.exists(cg.guardian.getIdentifier())
})
.then(function(exists) {
 if(!exists) {
   throw Error('Invalid Guadian id')
 } else {
  return getAssetRegistry('org.example.mynetwork.Pet')
   .then(function (assetRegistry) {
    const changeNotification = getFactory().newEvent('org.example.mynetwork','ChangeNotification');
    changeNotification.pet = cg.pet;
    changeNotification.guardian = cg.pet.guardian;
    cg.pet.guardian = cg.guardian;
    emit(changeNotification);
    return assetRegistry.update(cg.pet);
});
 }
})
} 

/**
* petCountByShelter
* @param {org.example.mynetwork.petCountByShelter} petCountByShelter
* @transaction
*/
async function petCountByShelter(petCountByShelter) {
var petCount=0;

return getAssetRegistry('org.example.mynetwork.Pet')
.then(function(petRegistry) {
  return petRegistry.getAll();
}).then(function(pets){
 pets.forEach(function(pet) {
   console.log(petCountByShelter);
   console.log(petCountByShelter.shelter);
   console.log(petCountByShelter.shelter.shelterId);
   if(petCountByShelter.shelter.shelterId==pet.nshelter.$identifier) {
     petCount++;
   }
   console.log(petCount); 
  });
  return petCount;
  
})
}

/////////////////////////////////////////////////////////////////
/**
* createDonation
* @param {org.example.mynetwork.CreateDonation} createDonation
* @transaction
*/
async function createDonation(txParams) {
var factory = getFactory();
var donationForm = null;
var shelter = null;
return getParticipantRegistry('org.example.mynetwork.Shelter')
  .then(function(shelterRegistry) {
  return shelterRegistry.exists(txParams.shelter.getIdentifier())
   .then(function(exists) {
    if(!exists) {
      throw Error('Invalid Shelter id')
    }
    else {
      shelter = txParams.shelter;
      return getAssetRegistry('org.example.mynetwork.DonationForm')
        .then(function(donationRegistry) {
        donationForm = factory.newResource('org.example.mynetwork', 'DonationForm', txParams.donationId);
        donationForm.date = txParams.date;
        donationForm.donatorType = txParams.donatorType;
        donationForm.donatorName = txParams.donatorName;
        donationForm.phoneNum = txParams.phoneNum;
        donationForm.email = txParams.email;
        donationForm.donateAmount = txParams.donateAmount;
        donationForm.shelter = txParams.shelter;
        return donationRegistry.add(donationForm)
      })
      .then(function() {
        shelter.donationForm.push(donationForm);
        shelterRegistry.update(shelter);
      })
    }
  })
})
}

/**
* donationSum
* @param {org.example.mynetwork.DonationSum} donationSum
* @transaction
*/
async function donationSum(txParam) {
var dSum = 0;

return getAssetRegistry('org.example.mynetwork.DonationForm')
  .then(function(donationFormRegistry) {
  return donationFormRegistry.getAll();
})
.then(function(donationForms) {
  donationForms.forEach(function(donationForm) {
    if (donationForm.shelter.$identifier == txParam.shelter.shelterId) {
     dSum += donationForm.donateAmount;
    }
  });
  console.log(dSum);
  return dSum;
})
}

