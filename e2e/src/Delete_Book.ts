import { browser, logging } from 'protractor';
import { AppPage } from './app.po';

describe('Delete_Book', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should navigate to home page', async () => {
    await page.navigateTo();
  });

  it('should delete book', async () => {
    await page.enterBookTitleToFilter('desert');
    await page.clickDeleteButton();
    expect(await page.isBookPresent()).toBe(false);
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
