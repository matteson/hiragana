import { HiraganaPage } from './app.po';

describe('hiragana App', () => {
  let page: HiraganaPage;

  beforeEach(() => {
    page = new HiraganaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
