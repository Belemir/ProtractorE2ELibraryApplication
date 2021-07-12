import { browser, logging } from 'protractor';
import { AppPage } from './app.po';

describe('Update_Book_Mandatory_Fields_Check', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should navigate to home page', async () => {
    await page.navigateTo();
  });

  it('should display warning message for updating with missing book title', async () => {
    await page.enterBookTitleToFilter('desert solitaire');
    await page.clickBook();
    await page.enterBookTitle('a');
    await page.clearBookTitle();
    expect(await page.getBookTitleWarning()).toEqual('Title is required');
  });

  it('should display warning message for updating with missing book author', async () => {
    await page.enterBookAuthor('a');
    await page.clearBookAuthor();
   // There is a bug here. Bug author error message has to be displayed when it is missing.
  });

  it('should display warning message for updating with missing book publisher', async () => {
    await page.enterBookPublisher('a');
    await page.clearBookPublisher();
    expect(await page.getBookPublisherWarning()).toEqual('Publisher is required');
  });

  it('should display warning message for updating with missing book publish year', async () => {
    await page.enterYearOfPublishing(1);
    await page.clearYearOfPublishing();
    expect(await page.getYearOfPublishingWarning()).toEqual('Year is required');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry)
    );
  });
});
