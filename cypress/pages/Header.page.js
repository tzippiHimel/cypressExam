class HeaderPage {
  visitHome() {
    cy.visit('https://www.gov.il');
  }

  searchButton() {
    return cy.get('button[aria-controls="popup"]');
  }

  openSearch() {
    this.searchButton().click();
  }

  searchDialog() {
    return cy.get('[role="dialog"], [aria-modal="true"]');
  }
}

export default new HeaderPage();
