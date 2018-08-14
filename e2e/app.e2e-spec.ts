import { GestionDesChequesPage } from './app.po';

describe('gestion-des-cheques App', function() {
  let page: GestionDesChequesPage;

  beforeEach(() => {
    page = new GestionDesChequesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
