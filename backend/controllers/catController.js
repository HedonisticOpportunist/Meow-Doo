const Cat = require("../models/Cat");

const getAllCats = async (_req, res) => {
  try {
    const allCats = await Cat.find({});
    res.status(200).json({ cats: allCats });
  } catch (error) {
    res.status(500).json({ message: "Internal Error /ᐠ - ˕ -マ Ⳋ" });
  }
};

const createCat = async (req, res) => {
  try {
    const createNewCat = new Cat(req.body);
    await createNewCat.save();
    res
      .status(201)
      .json({ message: "Cat Created Successfully ≽^•⩊•^≼", cat: createNewCat });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Error /ᐠ - ˕ -マ Ⳋ" });
  }
};

const editCat = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedCat = await Cat.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedCat) {
      return res.status(404).json({ message: "No Cat Found /ᐠ - ˕ -マ Ⳋ" });
    }
    res.status(200).json({ cat: updatedCat });
  } catch (error) {
    res.status(500).json({ message: "Internal Error /ᐠ - ˕ -マ Ⳋ" });
  }
};

const deleteCat = async (req, res) => {
  try {
    const { id } = req.params;
    const catToDelete = await Cat.findByIdAndDelete(id);
    if (!catToDelete) {
      return res.status(400).json({ message: "No Cat Found /ᐠ - ˕ -マ Ⳋ" });
    }
    res.status(200).json({ "Cat to Delete:": catToDelete });
  } catch (error) {
    res.status(500).json({ message: "Internal Error /ᐠ - ˕ -マ Ⳋ" });
  }
};

module.exports = {
  getAllCats,
  createCat,
  editCat,
  deleteCat,
};
