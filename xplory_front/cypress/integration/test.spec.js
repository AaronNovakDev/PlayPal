// test.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test


describe('Check element login', () => {
    it('finds the content "Email"', () => {
     cy.visit('https://xploryapp.herokuapp.com/signup')

     cy.contains('Email')
    })

 describe('new user signup', () => {
beforeEach(() => {
    cy.visit("https://xploryapp.herokuapp.com/signup")
})

    it('creates a new user"', () => {
        // cy.visit('https://xploryapp.herokuapp.com/signup')

        cy.get("[data-cy=signup-username]").type("NewUser" + Date.now())
        cy.get("[data-cy=signup-email]").type("Newuser@test.com" + Date.now())
        cy.get("[data-cy=signup-password]").type("Abcd1234")
        cy.get("[data-cy=signup-passwordConfirmation]").type("Abcd1234")

        cy.get("[data-cy=signup-button]").click()

        cy.url().should('eq', Cypress.config().baseUrl + "/")
    })


    describe('When NOT in Chrome', { browser: '!chrome' }, () => {
        it('Shows warning', () => {
            cy.get('.browser-warning').should(
                'contain',
                'For optimal viewing, use Chrome Browser please!'
            )
        })
        it('Links to browser compatibility doc', () => {
            cy.get('a.browser-compat')
              .should('have.attr', 'href')
              .and('include', 'browser-compatibility')
          })
        })


        it("requires a username", () => {

            cy.get("[data-cy=signup-email]").type("newuser@test.com" + Date.now())
            cy.get("[data-cy=signup-password]").type("Abcd1234")
            cy.get("[data-cy=signup-passwordConfirmation]").type("Abcd1234")

            cy.get("[data-cy=signup-button]").should("be.disabled")
        })
    })
})
