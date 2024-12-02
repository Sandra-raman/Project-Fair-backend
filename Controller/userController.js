const users = require("../Models/userSchema");

exports.registerAPI = async (req, res) => {
  console.log("Inside the register API");
  const { username, email, password } = req.body;
  const existingUser = await users.findOne({ email });
  if (existingUser) {
    res.status(400).json({ message: "Already Existing User" });
  } else {
    const newUser = new users({
      username: username,
      email: email,
      password: password,
      github: "",
      linkedIn: "",
      profilePic: "",
    });
    await newUser.save();
    res.status(200).json("Register Successful");
  }
};

//login
exports.loginAPI = async (req, res) => {
  console.log("Inside the login API");
  const { email, password } = req.body;
  try {
    const existingUser = await users.findOne({ email, password });
    if (existingUser) {
      res.status(200).json({ currentUser: existingUser });
    } else {
      res.status(400).json("Incorrect Email or Password");
    }
  } catch (err) {
    res.status(400).json(err);
  }
};

//addproject
exports.AddProject = async (req, res) => {
  console.log("Add project"); 
  res.send("add project") 
};