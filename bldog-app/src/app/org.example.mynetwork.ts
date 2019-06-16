import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.example.mynetwork{
   export enum Status {
      protect,
      unProtected,
   }
   export class Pet extends Asset {
      petSerial: string;
      organicDate: number; //////////
      kind: string;
      discoveryAddress: string;
      name: string;
      age: number;         /////////////
      gender: string;
      weight: string;
      healthStatus: string;
      disease: string;
      protectStatus: Status;
      animalSpecies: string;
      description: string;
      furColor: string;
      endProtection: string;
      guardian: Guardian;
      nshelter: Shelter;
   }
   export class Guardian extends Asset {
      guardianCode: string;
      name: string;
      division: string;
      protectDate: number;       
      phoneNum: number;          /////////////
      address: string;
   }
   export class Shelter extends Participant {
      shelterId: string;
      donationForm: DonationForm[];
   }
   export class Trade extends Transaction {
      pet: Pet;
      newShelter: Shelter;
   }
   export class ChangeGuardian extends Transaction {
      pet: Pet;
      guardian: Guardian;
   }
   export class TradeNotification extends Event {
      pet: Pet;
      shelter: Shelter;
   }
   export class ChangeNotification extends Event {
      pet: Pet;
      guardian: Guardian;
   }
   export class petCountByShelter extends Transaction {
      shelter: Shelter;
   }
   export enum DonatorType {
      CITIZEN,
      GOVERNMENT,
      ORGANIZATION,
   }
   export class DonationForm extends Asset {
      donationId: string;
      donatorType: DonatorType;
      donatorName: string;
      donateAmount: number;
      shelter: Shelter;
      date: string;
      phoneNum: string;
      email: string;
   }
   export class CreateDonation extends Transaction {
      donationId: string;
      donatorType: DonatorType;
      donatorName: string;
      donateAmount: number;
      shelter: Shelter;
      date: string;
      phoneNum: string;
      email: string;
   }
   export class DonationSum extends Transaction {
      shelter: Shelter;
   }
   export class NumberTesting extends Transaction {
      dCount: number;
   }
// }
