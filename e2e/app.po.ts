export class AngualarStartupPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angualar-startup-app h1')).getText();
  }
}
