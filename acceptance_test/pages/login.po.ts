import { browser, ElementFinder, ExpectedConditions as EC  } from 'protractor';
import { SampleTabAppPage } from './app.po';

export class LoginPage extends SampleTabAppPage {
  /**
   * Get
   */

  getMailFieldElement(): ElementFinder {
    return this.findElementById('email');
  }

  getPasswordFieldElement(): ElementFinder {
    return this.findElementById('password');
  }

  getLoginButtonElement(): ElementFinder {
    return this.findElementById('submit');
  }

  /**
   * Enter data
   */

  async performLogin(mailAddress: string, password: string) {
    await this.fillInField(this.getMailFieldElement(), mailAddress);
    await this.fillInField(this.getPasswordFieldElement(), password);
    await this.clickOnElement(this.getLoginButtonElement());
    await browser.waitForAngularEnabled(true);
    await browser.wait(EC.not(EC.urlContains('.eu.cloud.msi.audi-access.com')));
  }
}
