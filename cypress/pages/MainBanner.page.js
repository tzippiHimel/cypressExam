class MainBannerPage {
  constructor() {
    this.pmLandingUrl = 'https://www.gov.il/he/departments/prime_ministers_office/govil-landing-page';
    this.securityLandingUrl = 'https://www.gov.il/he/departments/ministry_of_public_security/govil-landing-page';
    this.selectors = {
      playBtn: 'button[class*="src_play_button"]',
      bannerItem: '#officeBanner li',
      imgDesktop: 'div[class*="src_img_desktop"] img',
      imgMobile: 'div[class*="src_img_mobile"] img'
    };
  }

  fetchSecurityBanner() {
    return cy.request(
      'GET',
      'https://www.gov.il/govil-landing-page-api/he/api/offices/get/ministry_of_public_security'
    ).then((res) => {
      const banner = res?.body?.mainBanner;
      expect(banner, 'Security ministry banner should exist').to.exist;
      return banner;
    });
  }

  mockPrimeMinisterBanner(bannerData) {
    cy.intercept(
      'GET',
      'https://www.gov.il/govil-landing-page-api/he/api/offices/get/prime_ministers_office',
      (req) => {
        req.continue((res) => {
          res.body.mainBanner = bannerData;
        });
      }
    ).as('mainBanner');
  }

  visitPrimeMinister() {
    cy.visit(this.pmLandingUrl);
  }

  stopBannerAutoplay() {
    cy.get(this.selectors.playBtn).click();
  }

  assertBannerItemData(itemIndex, expectedData) {
    cy.get(this.selectors.bannerItem)
      .eq(itemIndex)
      .within(() => {
        cy.contains('h3', expectedData.title).should('be.visible');
        cy.get(this.selectors.imgDesktop)
          .should('have.attr', 'src', expectedData.linkImage);
      });
  }

  waitForBannerApi() {
    cy.wait('@mainBanner');
  }
}

export default new MainBannerPage();
