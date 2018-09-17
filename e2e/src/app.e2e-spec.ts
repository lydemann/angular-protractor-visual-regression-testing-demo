import * as blueharvest from 'blue-harvest';
import * as path from 'path';
import { browser } from 'protractor';
import { ExpectHelper } from './helpers/expect-helpers';
import { TodosPage } from './todos.po';


const goldenPath = path.join(__dirname, '..', `goldens/todos.png`);

describe('workspace-project App', () => {
  let page: TodosPage;

  beforeEach(() => {
    page = new TodosPage();
  });

  it('should display 2 todo items', async () => {
    await page.navigateTo();
    const res = await page.getTodos().count();
    await ExpectHelper.expectOrRetry(() => res === 2);
    const data = await browser.takeScreenshot();
    const result = await blueharvest.compareScreenshot(data, goldenPath);
    await expect(result).toBeTruthy();
  });
});
