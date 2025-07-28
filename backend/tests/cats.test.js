require("dotenv").config({ path: "../.env" });
const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../index");
const externalServerText = '{"message":"Internal Error /ᐠ - ˕ -マ Ⳋ"}';

beforeEach(async () => {
  await mongoose.connect(process.env.MONGO_URL);
});

afterEach(async () => {
  await mongoose.connection.close();
});

describe("CATS API TESTS", () => {
  it("A user should get all cats, even if none have been added.", async () => {
    const allCats = '{"cats":[]}';
    const wrongCats = "cats cats cats";
    const response = await request(app).get("/api/cat");

    expect(response.statusCode).toBe(200);
    expect(response.text).toBe(allCats);
    expect(response.text).not.toBe(wrongCats);
    expect(response.text).not.toBe(externalServerText);
  });

  it("A user should be able to add and then delete a cat.", async () => {
    const catToAdd = "Toni";
    const postResponse = await request(app)
      .post("/api/cat/")
      .send({ cat: catToAdd });
    expect(postResponse.statusCode).toBe(201);

    const response = await request(app).get("/api/cat");
    expect(response.statusCode).toBe(200);

    const deleteResponse = await request(app).delete(
      `/api/cat/${postResponse.body.cat._id}`
    );
    expect(deleteResponse.statusCode).toBe(200);
    expect(deleteResponse.text).not.toBe(externalServerText);
  });

  it("A user should be able to add, edit and then delete a cat.", async () => {
    const postResponse = await request(app)
      .post("/api/cat/")
      .send({ cat: "Ghostie Roastie Toastie" });
    expect(postResponse.statusCode).toBe(201);

    const response = await request(app).get("/api/cat");
    expect(response.statusCode).toBe(200);

    const editRequest = await request(app)
      .put(`/api/cat/${postResponse.body.cat._id}`)
      .send({ cat: " Orange Tabby Meow" });

    expect(editRequest.statusCode).toBe(200);
    expect(editRequest.text).not.toBe(externalServerText);

    const deleteResponse = await request(app).delete(
      `/api/cat/${postResponse.body.cat._id}`
    );
    expect(deleteResponse.statusCode).toBe(200);
    expect(deleteResponse.text).not.toBe(externalServerText);
  });

  it("A user should not be able to edit a cat that does not exist.", async () => {
    const editRequest = await request(app)
      .put(`/api/cat/123`)
      .send({ cat: " Orange Tabby Meow" });
    expect(editRequest.statusCode).toBe(500);
    expect(editRequest.text).toBe(externalServerText);
  });

  it("A user should not be able to delete a cat that does not exist.", async () => {
    const deleteRequest = await request(app).delete(`/api/cat/123567`);
    expect(deleteRequest.statusCode).toBe(500);
    expect(deleteRequest.text).toBe(externalServerText);
  });
});
