import express from "express";
import appRoutes from "./routes/appRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT || 5002;

const app = express();

connectDB(); //middleware
app.use(express.json());

app.use("/api/home", appRoutes);

app.listen(PORT, () => {
  console.log("Server started on PORT: ", PORT);
});
