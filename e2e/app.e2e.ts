import { AngualarStartupPage } from './app.po';

describe('angualar-startup App', function() {
  let page: AngualarStartupPage;

  beforeEach(() => {
    page = new AngualarStartupPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angualar-startup works!');
  });
});
