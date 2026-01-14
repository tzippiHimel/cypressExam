class ServicesPage {
  constructor() {
    this.baseUrl = 'https://govisit.gov.il/he/authorities/authority/262';
    this.serviceSelector = 'div.service';
    this.loginUrl = 'https://govisit.gov.il/he/app/auth/login';
  }

  visit() {
    cy.visit(this.baseUrl);
  }

  services() {
    return cy.get(this.serviceSelector, { timeout: 30000 });
  }

  openAppointment(serviceEl) {
    cy.wrap(serviceEl).within(() => {
      cy.contains('button', 'לזימון תור')
        .should('be.visible')
        .click({ force: true });
    });
  }

  assertAppointmentUrl() {
    cy.url({ timeout: 15000 }).then((url) => {
      if (url === this.loginUrl) {
        cy.log('Redirected to login page (expected for unauthenticated user)');
      } else {
        expect(url).to.include('appointment');
      }
    });
  }

  navigateBackToServices() {
    cy.go('back');
    cy.url().should('eq', this.baseUrl);
  }
}

export default new ServicesPage();
