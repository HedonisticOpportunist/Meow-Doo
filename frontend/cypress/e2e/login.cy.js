import { registerAndLoginUser, loginUser } from "../support/loginHelpers";

const url = "http://localhost:5173";
const registerUrl = "http://localhost:5173/register";

describe("LOGIN SPEC", () => {
  it("A user should not be able to click the login button without any input.", () => {
    loginUser(url, false, false);
  });

  it("A user should not be able to click the login button without providing a password.", () => {
    loginUser(url, true, false);
  });

  it("A user should not be able to click the login button without providing an email.", () => {
    loginUser(url, false, true);
  });
  it("An unregistered user should be redirected to the register page.", () => {
    loginUser(url, true, true);
  });

  it("A registered user should be redirected to the bonus page.", () => {
    registerAndLoginUser(registerUrl, url);
  });
});
