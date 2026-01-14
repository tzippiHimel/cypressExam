# Gov.il Cypress Automation Testing

A comprehensive Cypress E2E testing suite for Gov.il website functionality with Page Object Model (POM) pattern implementation.

## 📋 Project Structure

```
cypress/
├── e2e/                          # End-to-End test specifications
│   ├── 01_header_search.cy.js    # Header search functionality tests
│   ├── 02_intercepts_200.cy.js   # API interception and status validation
│   ├── 03_services_appointment.cy.js  # Service appointment booking tests
│   └── 04_mainBanner_mock.cy.js  # Main banner data swapping tests
├── pages/                        # Page Object Model classes
│   ├── Header.page.js            # Header page interactions
│   ├── Services.page.js          # Services page interactions
│   ├── MainBanner.page.js        # Main banner page interactions
│   └── Intercept.page.js         # API interception helpers
├── fixtures/                     # Test data files
│   └── example.json
├── support/                      # Cypress configuration & custom commands
│   ├── commands.js               # Custom Cypress commands
│   └── e2e.js                    # E2E configuration & global setup
└── cypress.config.js             # Cypress configuration file
```

## 🎯 Test Suites

### 1. Header Search Tests (`01_header_search.cy.js`)
Tests for search functionality in the Gov.il header:
- ✅ Search button visibility
- ✅ Search popup opening
- ✅ Search button click functionality

**Page Object:** `HeaderPage`

### 2. API Intercept Tests (`02_intercepts_200.cy.js`)
Validates API response interception and status codes:
- ✅ Intercept multiple GET requests
- ✅ Verify HTTP 200 status codes

**Page Object:** `InterceptPage`

### 3. Services Appointment Tests (`03_services_appointment.cy.js`)
Tests appointment booking flow for Authority 262:
- ✅ Service list loading
- ✅ Appointment button interaction
- ✅ Navigation to appointment/login pages
- ✅ Back navigation to services

**Page Object:** `ServicesPage`

### 4. Main Banner Tests (`04_mainBanner_mock.cy.js`)
Tests banner data swapping between ministries:
- ✅ Fetch banner from one ministry
- ✅ Inject into another ministry's page
- ✅ Verify banner data swapped correctly

**Page Object:** `MainBannerPage`

## 🏗️ Page Object Model (POM)

This project follows the **Page Object Model** pattern for maintainability and reusability:

- **HeaderPage**: Encapsulates search button selectors and interactions
- **ServicesPage**: Manages service list operations and appointment navigation
- **MainBannerPage**: Handles banner fetching, interception, and assertions
- **InterceptPage**: Provides API interception utilities

## ⚙️ Prerequisites

- Node.js (v14+)
- npm or yarn

## 📦 Installation

```bash
npm install
```

This installs:
- Cypress ^15.8.2

## 🚀 Running Tests

### Open Cypress Test Runner (Interactive Mode)
```bash
npm run cypress:open
# or
npx cypress open
```

### Run All Tests (Headless Mode)
```bash
npx cypress run
```

### Run Specific Test File
```bash
npx cypress run --spec "cypress/e2e/01_header_search.cy.js"
```

### Run Tests in Headed Mode (Show Browser)
```bash
npx cypress run --headed
```

## 🔍 Test Details

### Header Search (01_header_search.cy.js)
- **URL:** https://www.gov.il
- **Tests:** 3
- **Focus:** Search popup visibility and interaction

### API Intercepts (02_intercepts_200.cy.js)
- **URL:** https://www.gov.il/he/government-service-branches
- **Tests:** 1
- **Focus:** Network interception and status validation

### Services Appointment (03_services_appointment.cy.js)
- **URL:** https://govisit.gov.il/he/authorities/authority/262
- **Tests:** 1
- **Focus:** Appointment booking and navigation flow

### Main Banner (04_mainBanner_mock.cy.js)
- **APIs:** 
  - Fetch: https://www.gov.il/govil-landing-page-api/.../ministry_of_public_security
  - Mock: https://www.gov.il/govil-landing-page-api/.../prime_ministers_office
- **Tests:** 1
- **Focus:** Banner data injection and verification

## 🛠️ Configuration

### cypress.config.js
Contains Cypress-specific settings and can be modified for:
- Browser settings
- Viewport configuration
- Timeouts
- Base URL setup

## 📝 Notes

- Tests use **Hebrew descriptions** for clarity in Israeli context
- Page Objects encapsulate all selectors and interactions
- Tests follow **Given-When-Then** structure for readability
- API interception used for testing data mutations without server-side changes
- Custom Cypress configuration enables uncaught exception handling

## 🤝 Contributing

When adding new tests:
1. Create corresponding Page Object in `cypress/pages/`
2. Create test spec in `cypress/e2e/`
3. Use Page Object methods instead of direct selectors
4. Follow naming convention: `##_description.cy.js`

## 📚 Resources

- [Gov.il Website](https://www.gov.il)
- [GitHub Repository](https://github.com/tzippiHimel/cypressExam)

## 📄 License

ISC
