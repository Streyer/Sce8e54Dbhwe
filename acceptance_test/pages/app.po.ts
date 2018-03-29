import { browser, by, element, ElementArrayFinder, ElementFinder, ExpectedConditions, protractor } from 'protractor';

const DEFAULT_TIMEOUT = 180 * 1000;

export class SampleTabAppPage {
  /*
   * Finding elements
   */

  findElementByClass(elementClass: string) {
    return element(by.className(elementClass));
  }

  findElementById(elementId: string) {
    return element(by.id(elementId));
  }

  findElementByText(className: string, elementText: string) {
    return element(by.cssContainingText('.' + className, elementText));
  }

  getList(className: string): ElementArrayFinder {
    return element.all(by.css('.' + className));
  }

  /*
   * Interacting
   */

  async clickOnElement(elem: ElementFinder) {
    await this.waitForElementToBeClickable(elem);
    return elem.click();
  }

  async clickOnDisabledElement(elem: ElementFinder) {
    await browser.executeScript('return arguments[0].removeAttribute("disabled")', elem);
    return this.clickOnElement(elem);
  }

  async clickOnToastElement(elem: ElementFinder) {
    browser.waitForAngularEnabled(false);
    await this.waitForElementToBeClickable(elem);
    await elem.click();
    return browser.waitForAngularEnabled(true);
  }

  async clearTextField(elem: ElementFinder) {
    await this.waitForElementToBeClickable(elem);
    return elem.clear();
  }

  async fillInField(elem: ElementFinder, inputText: string) {
    await this.waitForElementToBeClickable(elem);
    return elem.sendKeys(inputText);
  }

  async sendKeyboardDelete(elem: ElementFinder) {
    await this.waitForElementToBeClickable(elem);
    return elem.sendKeys(protractor.Key.DELETE);
  }

  async sendKeyboardTab(elem: ElementFinder) {
    await this.waitForElementToBeClickable(elem);
    return elem.sendKeys(protractor.Key.TAB);
  }

  async selectOption(elem: ElementFinder, option: string) {
    const selectElement = elem.element(by.cssContainingText('option', option));
    browser.wait(ExpectedConditions.textToBePresentInElement(selectElement, option), DEFAULT_TIMEOUT);
    return selectElement.click();
  }

  async selectOptionByClass(className: string, optionToSelect: string) {
    const selectElement = element(by.cssContainingText(className, optionToSelect));
    browser.wait(ExpectedConditions.textToBePresentInElement(selectElement, optionToSelect), DEFAULT_TIMEOUT);
    return selectElement.click();
  }

  /*
   * Assertions
   */

  async assertElementIsPresent(elem: ElementFinder) {
    return this.waitForElementToBeVisible(elem);
  }

  async assertElementIsNotPresent(elem: ElementFinder) {
    return browser.wait(
      ExpectedConditions.invisibilityOf(elem),
      DEFAULT_TIMEOUT,
      `element ${elem.locator()} is not invisible`
    );
  }

  async assertToastIsPresent(elem: ElementFinder) {
    browser.waitForAngularEnabled(false);
    await this.waitForElementToBeVisible(elem);
    return browser.waitForAngularEnabled(true);
  }

  public generateRandomString(): string {
    return Math.random().toString(36).substring(2, 15);
  }

  private waitForElementToBeClickable(elem: ElementFinder) {
    return browser.wait(
      ExpectedConditions.elementToBeClickable(elem),
      6000,
      `element ${elem.locator()} is not clickable`
    );
  }

  private waitForElementToBeVisible(elem: ElementFinder) {
    return browser.wait(
      ExpectedConditions.visibilityOf(elem),
      DEFAULT_TIMEOUT,
      `element ${elem.locator()} is not visible`
    );
  }
}
