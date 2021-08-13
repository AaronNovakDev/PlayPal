// test.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test


describe('Check element login', () => {
    it('finds the content "Email"', () => {
     cy.visit('https://xploryapp.herokuapp.com/LoginForm')

     cy.contains('Email')
    })


    describe('new user signup', () => {
    it('creates a new user"', () => {
        cy.visit('https://xploryapp.herokuapp.com/LoginForm')

        cy.get("[data-cy=signup-username]".type("NewUser")
        cy.get("[data-cy=signup-email]".type("NewUser@test.com")
        cy.get("[data-cy=signup-password]".type("Abcd1234")
        cy.get("[data-cy=signup-passwordConfirmation]".type("Abcd1234")

        cy.get("[data-cy=signup-button]")

 })
})