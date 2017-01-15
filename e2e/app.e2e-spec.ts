import { NgUserAppPage } from './app.po';

describe('ng-user-app App', function() {
  let page: NgUserAppPage;

  beforeEach(() => {
    page = new NgUserAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
