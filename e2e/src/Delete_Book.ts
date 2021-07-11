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
    expect(await page.isBookListed()).toBe(false);
  });

});
