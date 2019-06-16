/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { AngularTestPage } from './app.po';
import { ExpectedConditions, browser, element, by } from 'protractor';
import {} from 'jasmine';


describe('Starting tests for bldog-app', function() {
  let page: AngularTestPage;

  beforeEach(() => {
    page = new AngularTestPage();
  });

  it('website title should be bldog-app', () => {
    page.navigateTo('/');
    return browser.getTitle().then((result)=>{
      expect(result).toBe('bldog-app');
    })
  });

  it('network-name should be tutorial-network@0.0.5',() => {
    element(by.css('.network-name')).getWebElement()
    .then((webElement) => {
      return webElement.getText();
    })
    .then((txt) => {
      expect(txt).toBe('tutorial-network@0.0.5.bna');
    });
  });

  it('navbar-brand should be bldog-app',() => {
    element(by.css('.navbar-brand')).getWebElement()
    .then((webElement) => {
      return webElement.getText();
    })
    .then((txt) => {
      expect(txt).toBe('bldog-app');
    });
  });

  
    it('Pet component should be loadable',() => {
      page.navigateTo('/Pet');
      browser.findElement(by.id('assetName'))
      .then((assetName) => {
        return assetName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Pet');
      });
    });

    it('Pet table should have 18 columns',() => {
      page.navigateTo('/Pet');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(18); // Addition of 1 for 'Action' column
      });
    });
  
    it('Guardian component should be loadable',() => {
      page.navigateTo('/Guardian');
      browser.findElement(by.id('assetName'))
      .then((assetName) => {
        return assetName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Guardian');
      });
    });

    it('Guardian table should have 7 columns',() => {
      page.navigateTo('/Guardian');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(7); // Addition of 1 for 'Action' column
      });
    });
  
    it('DonationForm component should be loadable',() => {
      page.navigateTo('/DonationForm');
      browser.findElement(by.id('assetName'))
      .then((assetName) => {
        return assetName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('DonationForm');
      });
    });

    it('DonationForm table should have 9 columns',() => {
      page.navigateTo('/DonationForm');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(9); // Addition of 1 for 'Action' column
      });
    });
  

  
    it('Shelter component should be loadable',() => {
      page.navigateTo('/Shelter');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Shelter');
      });
    });

    it('Shelter table should have 3 columns',() => {
      page.navigateTo('/Shelter');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(3); // Addition of 1 for 'Action' column
      });
    });
  

  
    it('Trade component should be loadable',() => {
      page.navigateTo('/Trade');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Trade');
      });
    });
  
    it('ChangeGuardian component should be loadable',() => {
      page.navigateTo('/ChangeGuardian');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('ChangeGuardian');
      });
    });
  
    it('petCountByShelter component should be loadable',() => {
      page.navigateTo('/petCountByShelter');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('petCountByShelter');
      });
    });
  
    it('CreateDonation component should be loadable',() => {
      page.navigateTo('/CreateDonation');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('CreateDonation');
      });
    });
  
    it('DonationSum component should be loadable',() => {
      page.navigateTo('/DonationSum');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('DonationSum');
      });
    });
  
    it('NumberTesting component should be loadable',() => {
      page.navigateTo('/NumberTesting');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('NumberTesting');
      });
    });
  

});