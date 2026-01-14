import HeaderPage from '../pages/Header.page';

describe('Header Search – Gov.il', () => {

  beforeEach(() => {
    HeaderPage.visitHome();
  });

  it('Search button is visible', () => {
    HeaderPage.searchButton().should('be.visible');
  });

  it('Clicking search button opens popup', () => {
    HeaderPage.openSearch();
    HeaderPage.searchDialog().should('exist');
  });

  it('Search button is clickable', () => {
    HeaderPage.searchButton().click();
    cy.url().should('contain', 'gov.il');
  });

});
