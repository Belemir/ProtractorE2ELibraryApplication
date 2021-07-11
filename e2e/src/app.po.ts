import { browser, by, element, ExpectedConditions, Key } from 'protractor';

export class AppPage {
  async navigateTo(): Promise<unknown> {
    return await browser.get(browser.baseUrl);
  }

  // Clicks
  async clickBook() {
    await browser.wait(
      ExpectedConditions.presenceOf(element(by.css('[data-test-book-title]'))),
      30000
    );
    await element(by.css('[data-test-book-title]')).click();
  }

  async clickSaveButton() {
    await element(by.css('[data-test-book-details-save-button]')).click();
  }

  async clickAuthorInput() {
    await element(by.css('[data-test-book-details-author-input]')).click();
  }

  async clickCancelButton() {
    await element(by.css('[data-test-book-details-cancel-button]')).click();
  }

  async clickDeleteButton() {
    await browser.wait(
      ExpectedConditions.presenceOf(
        element(by.css('[data-test-book-delete-icon]'))
      ),
      30000
    );
    element(by.css('[data-test-book-delete-icon]')).click();
    await browser.wait(
      ExpectedConditions.stalenessOf(
        element(by.css('[data-test-book-delete-icon]'))
      ),
      30000
    );
  }

  async clickBookTitle() {
    const bookTitleField = element(
      by.css('[data-test-book-details-title-input]')
    );
    await bookTitleField.click();
  }

  // Field Actions
  async enterBookTitleToFilter(bookTitle: string) {
    await element(by.css('[data-test-filter-input]')).sendKeys(bookTitle);
  }

  async clearBookTitleToFilter() {
    await element(by.css('[data-test-filter-input]')).clear();
  }

  async enterBookTitle(bookTitle: string) {
    const bookTitleField = element(
      by.css('[data-test-book-details-title-input]')
    );
    await browser.wait(
      ExpectedConditions.elementToBeClickable(bookTitleField),
      10000
    );
    await bookTitleField.clear();
    await bookTitleField.sendKeys(bookTitle);
  }

  async clearBookTitle() {
    const bookTitleField = element(
      by.css('[data-test-book-details-title-input]')
    );
    await bookTitleField.sendKeys(Key.BACK_SPACE);
  }

  async clearBookAuthor() {
    const bookAuthorField = element(
      by.css('[data-test-book-details-author-input]')
    );
    await bookAuthorField.sendKeys(Key.BACK_SPACE);
  }

  async clearBookPublisher() {
    const bookPublisherField = element(
      by.css('[data-test-book-details-publisher-input]')
    );
    await bookPublisherField.sendKeys(Key.BACK_SPACE);
  }

  async clearYearOfPublishing() {
    const bookYearOfPublishingField = element(
      by.css('[data-test-book-details-year-input]')
    );
    await bookYearOfPublishingField.sendKeys(Key.BACK_SPACE);
  }

  async enterBookAuthor(bookAuthor: string) {
    const bookAuthorField = element(
      by.css('[data-test-book-details-author-input]')
    );
    await browser.wait(
      ExpectedConditions.elementToBeClickable(bookAuthorField),
      10000
    );
    await bookAuthorField.clear();
    await bookAuthorField.sendKeys(bookAuthor);
  }

  async enterBookPublisher(bookPublisher: string) {
    const bookPublisherFiled = element(
      by.css('[data-test-book-details-publisher-input]')
    );
    await browser.wait(
      ExpectedConditions.elementToBeClickable(bookPublisherFiled),
      10000
    );
    await bookPublisherFiled.clear();
    await bookPublisherFiled.sendKeys(bookPublisher);
  }

  async enterYearOfPublishing(yearOfPublishing: number) {
    const yearOfPublishingField = element(
      by.css('[data-test-book-details-year-input]')
    );
    await browser.wait(
      ExpectedConditions.elementToBeClickable(yearOfPublishingField),
      10000
    );
    await yearOfPublishingField.clear();
    await yearOfPublishingField.sendKeys(yearOfPublishing);
  }

  // Getters
  async getBookTitle() {
    await browser.wait(
      ExpectedConditions.presenceOf(
        element(by.css('[data-test-book-details-title-input]'))
      )
    );
    return await element(
      by.css('[data-test-book-details-title-input]')
    ).getAttribute('value');
  }

  async getBookAuthor() {
    return await element(
      by.css('[data-test-book-details-author-input]')
    ).getAttribute('value');
  }

  async getBookPublisher() {
    return await element(
      by.css('[data-test-book-details-publisher-input]')
    ).getAttribute('value');
  }

  async getBookPublishYear() {
    return await element(
      by.css('[data-test-book-details-year-input]')
    ).getAttribute('value');
  }

  async getBookTitleWarning() {
    const bookTitleWarningLabel = element(
      by.css('[data-test-book-details-title-error]')
    );
    await browser.wait(
      ExpectedConditions.elementToBeClickable(bookTitleWarningLabel),
      10000
    );
    return await bookTitleWarningLabel.getText();
  }

  async getBookPublisherWarning() {
    const bookPublisherWarningLabel = element(
      by.css('[data-test-book-details-publisher-error]')
    );
    await browser.wait(
      ExpectedConditions.elementToBeClickable(bookPublisherWarningLabel),
      10000
    );
    return await bookPublisherWarningLabel.getText();
  }

  async getYearOfPublishingWarning() {
    const bookYearOfPublishingWarnigLabel = element(
      by.css('[data-test-book-details-year-error]')
    );
    await browser.wait(
      ExpectedConditions.elementToBeClickable(bookYearOfPublishingWarnigLabel),
      10000
    );
    return await bookYearOfPublishingWarnigLabel.getText();
  }

  async getBook() {
    return await element(by.css('[data-test-book-title]')).getText();
  }

  async isBookListed() {
    return await element(by.css('[data-test-book-title]')).isPresent();
  }
}
