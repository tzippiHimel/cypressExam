class InterceptPage {
  constructor() {
    this.branchesUrl = 'https://www.gov.il/he/government-service-branches';
  }

  interceptFirstResponses(count = 3) {
    let requestCount = 0;

    cy.intercept('GET', '**', (req) => {
      req.on('response', (res) => {
        if (requestCount < count) {
          expect(res.statusCode).to.eq(200);
          requestCount += 1;
        }
      });
    });

    return () => requestCount;
  }

  visitBranches() {
    cy.visit(this.branchesUrl);
  }
}

export default new InterceptPage();
