import { browser, logging } from 'protractor';
import { AppPage } from './app.po';

describe('Update_Book_Card', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should navigate to home page', async () => {
    await page.navigateTo();
  });

  it('should update book title', async () => {
    await page.enterBookTitleToFilter('desert solitaire');
    await page.clickBook();
    await page.enterBookTitle('Anna Karenina');
    await page.clickSaveButton();
    expect(await page.getBookTitle()).toEqual('Anna Karenina');
  });

  it('should update book author', async () => {
    await page.enterBookAuthor('Lev Tolstoy');
    await page.clickSaveButton();
    await browser.sleep(1000);
    expect(await page.getBookAuthor()).toContain('Lev Tolstoy');
  });

  it('should update book publisher', async () => {
    await page.enterBookPublisher('The Russian Messenger');
    await page.clickSaveButton();
    expect(await page.getBookPublisher()).toContain('The Russian Messenger');
  });

  it('should update book publish year', async () => {
    await page.enterYearOfPublishing(1877);
    await page.clickSaveButton();
    expect(await page.getBookPublishYear()).toContain('1877');
  });

  it('should cancel book update', async () => {
    await page.enterBookAuthor('Test');
    await page.clearBookAuthor();
    await page.clickCancelButton();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
