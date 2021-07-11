import { browser, by, element, ExpectedConditions } from 'protractor';

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
  }

  // Field Actions
  async enterBookTitleToFilter(bookTitle: string) {
    await element(by.css('[data-test-filter-input]')).sendKeys(bookTitle);
  }

  async cleanBookTitleToFilter() {
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

  async getBook() {
    return await element(by.css('[data-test-book-title]')).getText();
  }

  async isBookPresent() {
    return await element(by.css('[data-test-book-delete-icon]')).isPresent();
  }
}
