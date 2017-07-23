import { MyContactsPage } from './app.po';

describe('my-contacts App', () => {
  let page: MyContactsPage;

  beforeEach(() => {
    page = new MyContactsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
