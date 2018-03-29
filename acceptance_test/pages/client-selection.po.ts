
import { browser, by, element, ExpectedConditions as EC } from 'protractor';

import { SampleTabAppPage } from './app.po';

export class ClientSelectionPage extends SampleTabAppPage {

  /*
   * Navigation
   */

  navigateToClientSelectionPage() {
    return browser.get('');
  }

  async navigateToLoginScreen() {
    await this.navigateToClientSelectionPage();
    await browser.waitForAngularEnabled(false);
    await this.clickOnElement(element(by.partialLinkText('User Tab Single Product')));
    await browser.wait(EC.and(EC.urlContains('auth'), EC.urlContains('#')));
    await browser.getCurrentUrl().then(url => {
      return browser.get(url);
    });
  }
}
