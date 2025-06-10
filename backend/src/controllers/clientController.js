import Client from "../models/Client.js";

export async function getAllClients(req, res) {
  try {
    const clients = await Client.find();
  } catch (error) {
    console.error("Error in getAllClients controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function createAClient(req, res) {
  try {
    const { fname, lname, pwd, email } = req.body;
    const aclient = new Client({ fname, lname, pwd, email });

    const savedClient = await aclient.save();
    res.status(201).json(savedClient);
  } catch (error) {}
}
