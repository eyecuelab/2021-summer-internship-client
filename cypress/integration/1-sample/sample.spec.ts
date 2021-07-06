/// <reference types="cypress" /> 

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

const uuid = () => Cypress._.random(0, 1e6)

describe('example tests suite', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('http://localhost:3000')
  })

  it('displays the navbar and its links', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
    cy.get('[data-testid="nav-bar-links"] a').should('have.length', 4)

    // We can go even further and check that the default todos each contain
    // the correct text. We use the `first` and `last` functions
    // to get just the first and last matched elements individually,
    // and then perform an assertion with `should`.
    cy.get('[data-testid="nav-bar-links"] a').first().should('have.text', 'Tethers')
    cy.get('[data-testid="nav-bar-links"] a').last().should('have.text', 'AV')
  })


  it('can register a user and log in', () => {
    // We'll store our new user in an object
    const newUser = {
      username: `${uuid()}`,
      email: `${uuid()}@test.com`,
      password: 'test',
    }

    cy.get('[data-testid="register-button"]').click();

    // Let's get the input elements and use the `type` command to
    // input our user register information.
    // https://on.cypress.io/selecting-elements
    cy.get('[data-testid="register-username-input"]').type(newUser.username);
    cy.get('[data-testid="register-email-input"]').type(newUser.email);
    cy.get('[data-testid="register-password-input"]').type(newUser.password);
    cy.get('[data-testid="register-submit-button"]').click();

    // Now that we've registered our user, let's check that it actually created by logging in.
    cy.get('[data-testid="register-login-button"]').click();
    cy.get('[data-testid="login-username-input"]').type(newUser.username);
    cy.get('[data-testid="login-password-input"]').type(newUser.password);
    cy.get('[data-testid="login-submit-button"]').click();

    cy.url().should('contain', '/tethers');
    cy.get('h1').contains('Your Tethers').should('exist');
  })
})
