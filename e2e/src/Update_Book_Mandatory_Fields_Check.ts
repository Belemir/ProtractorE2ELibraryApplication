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

  it('should update book title', async () => {
    await page.clickBook();
    await page.enterBookTitle('Anna Karenina');
    await page.clickSaveButton();
  });

  it('should update book author', async () => {
    await page.clickBook();
    await page.enterBookTitle('Lev Tolstoy');
    await page.clickSaveButton();
  });

  it('should update book publisher', async () => {
    await page.enterBookPublisher('The Russian Messenger');
    await page.clickSaveButton();
  });

  it('should update book publish year', async () => {
    await page.enterYearOfPublishing(1877);
    await page.clickSaveButton();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
