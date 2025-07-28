const express = require("express");
const {
  getAllCats,
  createCat,
  editCat,
  deleteCat,
} = require("../controllers/catController");

const router = express.Router();

// GET ALL CATS
router.get("/cat", getAllCats);

// CREATE CAT
router.post("/cat", createCat);

// EDIT CAT
router.put("/cat/:id", editCat);

// DELETE A CAT
router.delete("/cat/:id", deleteCat);

module.exports = router;
