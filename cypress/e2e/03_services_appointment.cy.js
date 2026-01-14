import ServicesPage from '../pages/Services.page';

describe('Authority 262 - appointment buttons', () => {
  beforeEach(() => {
    ServicesPage.visit();
  });

  it("Should appointment buttons include 'appointment'", () => {
    ServicesPage.services().should('have.length.greaterThan', 0);

    ServicesPage.services().each(($service) => {
      ServicesPage.openAppointment($service);
      ServicesPage.assertAppointmentUrl();
      ServicesPage.navigateBackToServices();
    });
  });
});
