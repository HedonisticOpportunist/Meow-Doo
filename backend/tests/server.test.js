require("dotenv").config({ path: "../.env" });
const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../index");
const expectedText = "ฅ^•ﻌ•^ฅ";
const unexpectedText = "ฅ^•ﻌ•^ฅฅ^•ﻌ•^ฅ";

beforeEach(async () => {
  await mongoose.connect(process.env.MONGO_URL);
});

afterEach(async () => {
  await mongoose.connection.close();
});

describe("SERVER API TESTS", () => {
  it("The server entry point returns the right message and status code.", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe(expectedText);
    expect(response.text).not.toBe(unexpectedText);
  });
  it("An incorrect server entry point returns an error.", async () => {
    const response = await request(app).get("/venus");
    expect(response.statusCode).toBe(404);
    expect(response.text).not.toBe(expectedText);
  });
});
