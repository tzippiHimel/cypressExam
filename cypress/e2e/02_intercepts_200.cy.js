import InterceptPage from '../pages/Intercept.page';

describe('Intercept 3 requests and validate status 200', () => {
  it('Visit page and verify 3 requests with status 200 using cy.intercept', () => {
    const getRequestCount = InterceptPage.interceptFirstResponses(3);

    InterceptPage.visitBranches();

    cy.then(() => {
      expect(getRequestCount()).to.eq(3);
    });
  });
});
