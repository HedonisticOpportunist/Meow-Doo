import { registerUser } from "../support/loginHelpers";
const url = "http://localhost:5173/register";

describe("LOGIN SPEC", () => {
  it("A user should not be able to click the register button without any input.", () => {
    registerUser(url, false, false);
  });

  it("A user should not be able to click the register button without providing a password.", () => {
    registerUser(url, true, false);
  });

  it("A user should not be able to click the register button without providing an email.", () => {
    registerUser(url, false, true);
  });
});
