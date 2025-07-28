require("dotenv").config({ path: "../.env" });
const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../index");
const userNotFoundText = '"No record of this user exists /ᐠ - ˕ -マ Ⳋ"';
const successText = '"Success"';
const existingEmail = "user@email.com";
const existingPassword = "password";
const wrongPassword = '"The password is incorrect /ᐠ - ˕ -マ Ⳋ"';
const internalError = '{"message":"Internal Error /ᐠ - ˕ -マ Ⳋ"}';

beforeEach(async () => {
  await mongoose.connect(process.env.MONGO_URL);
});

afterEach(async () => {
  await mongoose.connection.close();
});

describe("USER API TESTS", () => {
  it("An existing user should be able to login.", async () => {
    const response = await request(app).post("/api/login").send({
      email: existingEmail,
      password: existingPassword,
    });

    expect(response.statusCode).toBe(200);
    expect(response.text).toBe(successText);
    expect(response.text).not.toBe(userNotFoundText);
    expect(response.text).not.toBe(wrongPassword);
  });

  it("An existing user with the wrong password should not be able to login.", async () => {
    const response = await request(app).post("/api/login").send({
      email: existingEmail,
      password: "x12",
    });

    expect(response.statusCode).toBe(200);
    expect(response.text).toBe(wrongPassword);
    expect(response.text).not.toBe(successText);
  });
  it("An existing user should not be able to register.", async () => {
    const response = await request(app).post("/api/signup").send({
      email: existingEmail,
      password: existingPassword,
    });

    expect(response.statusCode).toBe(500);
    expect(response.text).toBe(internalError);
    expect(response.text).not.toBe(successText);
  });

  it("A user that does not exist should not be able to login.", async () => {
    const response = await request(app).post("/api/login").send({
      email: "",
      password: "",
    });

    expect(response.statusCode).toBe(200);
    expect(response.text).toBe(userNotFoundText);
    expect(response.text).not.toBe(successText);
  });

  it("A new user should be able to be onboarded and then deleted.", async () => {
    const randomEmail = Math.round(Math.random() * 100000) + "@email.com";
    const randomPassword = Math.random().toString(36).slice(-8);

    const response = await request(app).post("/api/signup").send({
      email: randomEmail,
      password: randomPassword,
    });

    const deleteResponse = await request(app)
      .delete(`/api/:${randomEmail}`)
      .send({});

    expect(response.statusCode).toBe(201);
    expect(deleteResponse.statusCode).toBe(200);
  });
});
