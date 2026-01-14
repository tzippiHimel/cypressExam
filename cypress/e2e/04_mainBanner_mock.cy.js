import MainBannerPage from '../pages/MainBanner.page';

describe('Main Banner Test', () => {
  it('should replace main banner with data from another page and verify items', () => {
    MainBannerPage.fetchSecurityBanner().then((mainBannerData) => {
      MainBannerPage.mockPrimeMinisterBanner(mainBannerData);
      MainBannerPage.visitPrimeMinister();
      MainBannerPage.waitForBannerApi();
      MainBannerPage.stopBannerAutoplay();

      const firstItem = mainBannerData.bannerItems[0];

      // Validate first banner item
      cy.get(MainBannerPage.selectors.bannerItem)
        .eq(0)
        .within(() => {
          cy.get('a')
            .should('have.attr', 'href', firstItem.link.url)
            .and('have.attr', 'id', firstItem.link.id);

          cy.get(MainBannerPage.selectors.imgDesktop)
            .should('have.attr', 'src', firstItem.imgDesktop.src)
            .and('have.attr', 'alt', firstItem.imgDesktop.alt);

          cy.get(MainBannerPage.selectors.imgMobile)
            .should('have.attr', 'data-src', firstItem.imgMobile.src)
            .and('have.attr', 'alt', firstItem.imgMobile.alt);
        });
    });
  });
});
