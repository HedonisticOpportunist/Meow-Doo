import { addCat, editExistingCat, deleteCat } from "../support/catHelpers";
const url = "http://localhost:5173";

describe("CATS SPEC", () => {
  it("A user can create and delete a cat item.", () => {
    addCat(url, "Snow");
    deleteCat("Snow");
  });

  it("A user can create, edit and then delete a cat item.", () => {
    addCat(url, "Ghost");
    editExistingCat("Simba", "GhostSimba");
    cy.get('button[name="deleteButton"]').click();
    deleteCat("GhostSimba");
  });
});
