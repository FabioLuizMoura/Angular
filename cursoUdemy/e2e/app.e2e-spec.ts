import { CursoUdemyPage } from './app.po';

describe('curso-udemy App', () => {
  let page: CursoUdemyPage;

  beforeEach(() => {
    page = new CursoUdemyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
