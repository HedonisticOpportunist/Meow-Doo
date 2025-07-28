require("dotenv").config({ path: "./.env" });
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const catRoutes = require("./routes/CatRoute");
const loginRoute = require("./routes/LoginRoute");

app.use(cors());
app.use(express.json());
app.get("/", (_req, res) => {
  res.send("ฅ^•ﻌ•^ฅ");
});
app.use("/api", catRoutes);
app.use("/api", loginRoute);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB Connected (•˕ •マ.ᐟ");
  })
  .catch((error) => {
    console.error("No Database Connection 𐔌՞. .՞ 𐦯" + error);
  });

app.listen(process.env.PORT, () => {
  console.log("Listening on port ᓚ₍ ^. .^₎", process.env.PORT);
});

module.exports = app;
