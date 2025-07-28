const RegisteredUser = require("../models/RegisteredUser");

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  RegisteredUser.findOne({ email: email }).then((registeredUser) => {
    if (registeredUser) {
      if (registeredUser.password === password) {
        res.json("Success");
      } else {
        res.json("The password is incorrect /ᐠ - ˕ -マ Ⳋ");
      }
    } else {
      res.json("No record of this user exists /ᐠ - ˕ -マ Ⳋ");
    }
  });
};

const registerUser = async (req, res) => {
  try {
    const createNewUser = new RegisteredUser(req.body);
    await createNewUser.save();
    res.status(201).json({
      message: "User Created Successfully ≽^•⩊•^≼",
      user: createNewUser,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Error /ᐠ - ˕ -マ Ⳋ" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { email } = req.params;
    let alteredMail = email.replace(":", "");
    const userToDelete = await RegisteredUser.findOneAndDelete({
      email: alteredMail,
    });
    if (!userToDelete) {
      return res.status(400).json({ message: "No User Found /ᐠ - ˕ -マ Ⳋ" });
    }

    res.status(200).json({ "User to Delete:": userToDelete });
  } catch (error) {
    res.status(500).json({ message: "Internal Error /ᐠ - ˕ -マ Ⳋ" });
  }
};

module.exports = {
  loginUser,
  registerUser,
  deleteUser,
};
