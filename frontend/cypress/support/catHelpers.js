export function addCat(url, catName) {
  cy.visit(url);
  cy.get("h2").contains("Cats 🐾").should("exist");
  cy.get('input[name="addCat"]').type(catName);
  cy.get("button").contains("Add Cat 🐾").click();
  cy.get("div").contains(catName).should("exist");
}

export function deleteCat(catName) {
  cy.get('button[name="deleteButton"]').click();
  cy.get("div").contains(catName).should("not.exist");
}

export function editExistingCat(catName) {
  cy.get('button[name="editButton"]').click();
  cy.get('input[name="editField"]').type(catName);
  cy.get('button[name="saveButton"]').click();
}
