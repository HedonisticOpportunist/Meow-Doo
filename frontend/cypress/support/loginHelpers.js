// CREDIT @: https://help.testim.io/docs/generate-random-data-with-js

const email = generateEmail();
const password = generatePassword();

function generatePassword() {
  return Math.random().toString(36).slice(-8);
}

function generateEmail() {
  return Math.round(Math.random() * 100000) + "@email.com";
}

function handleUserInput(email_available, password_available, email, password) {
  if (email_available) {
    cy.get('input[name="email"]').type(email);
  }
  if (password_available) {
    cy.get('input[name="password"]').type(password);
  }
}

function handleVerfication(email_available, password_available) {
  if (!email_available) {
    cy.get("#emailItem:invalid")
      .invoke("prop", "validationMessage")
      .should("equal", "Please fill in this field.");
  }
  if (!password_available) {
    cy.get("#passwordItem:invalid")
      .invoke("prop", "validationMessage")
      .should("equal", "Please fill in this field.");
  } else {
    cy.get("#emailItem:invalid")
      .invoke("prop", "validationMessage")
      .should("equal", "Please fill in this field.");
  }
}

function deleteUser() {
  cy.get('input[name="email"').type(email);
  cy.get('button[name="deleteButton"]').click();
}

export function registerUser(url, email_available, password_available) {
  cy.visit(url);
  cy.get("h2").contains("Register For More Features 🐾").should("exist");
  handleUserInput(email_available, password_available, email, password);
  cy.get('button[name="registerButton"]').click();
  handleVerfication(email_available, password_available);
}

export function loginUser(url, email_available, password_available) {
  cy.visit(url);
  cy.get("h2").contains("Login For More Features 🐾").should("exist");
  handleUserInput(email_available, password_available, email, password);
  cy.get('button[name="loginButton"]').click();
  handleVerfication(email_available, password_available);
}

export function registerAndLoginUser(registerUrl, loginUrl) {
  registerUser(registerUrl, true, true);
  loginUser(loginUrl, true, true);
  cy.get("h1").contains("Meow 🐾 🐈‍⬛");
  deleteUser();
}
