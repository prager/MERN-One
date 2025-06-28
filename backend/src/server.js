import express from "express";
import userRoutes from "./routes/userRoutes.js";
import userTypeRoutes from "./routes/userTypeRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import cors from "cors";
import protect from "./middleware/authMiddleware.js";

dotenv.config();
const PORT = process.env.PORT || 5002;

const app = express();

app.get("/api/profile", protect, (req, res) => {
  res.json({ user: req.user });
});

connectDB(); //middleware
app.use(cors());
app.use(express.json());

app.use("/api/home", userRoutes);
app.use("/api/home", userTypeRoutes);
app.use("/api/home", authRoutes);

app.listen(PORT, () => {
  console.log("Server started on PORT: ", PORT);
});
