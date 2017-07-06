import { AngularUserAdminLabPage } from './app.po';

describe('angular-user-admin-lab App', () => {
  let page: AngularUserAdminLabPage;

  beforeEach(() => {
    page = new AngularUserAdminLabPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
