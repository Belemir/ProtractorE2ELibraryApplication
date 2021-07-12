import { browser, logging } from 'protractor';
import { AppPage } from './app.po';

describe('Filter_Books', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should navigate to home page', async () => {
    await page.navigateTo();
  });

  it('should filter books by book name', async () => {
    await page.enterBookTitleToFilter('desert solitaire');
    expect(await page.getBook()).toContain('desert solitaire');
  });

  it('should filter books by partial book name', async () => {
    await page.clearBookTitleToFilter();
    await page.enterBookTitleToFilter('deser');
    expect(await page.getBook()).toContain('desert solitaire');
  });

  it('should filter books by book name case insensitively', async () => {
    await page.clearBookTitleToFilter();
    await page.enterBookTitleToFilter('DeSert');
    // There is a bug here, filter does not work case insensitively, therefore this step will fail
    expect(await page.getBook()).toContain('desert solitaire');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
