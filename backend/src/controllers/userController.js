import User from "../models/User.js";

export async function getAllUsers(req, res) {
  try {
    const users = await User.find();
    res.status(200).send("all good!");
    //res.status(200).json(users);
  } catch (error) {
    console.error("Error in getAllClients controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function createUser(req, res) {
  try {
    const { fname, lname, pwd, email, type } = req.body;
    const usr = new User({ fname, lname, pwd, email, type });

    const savedUsr = await usr.save();
    res.status(201).json(savedUsr);
  } catch (error) {}
}
