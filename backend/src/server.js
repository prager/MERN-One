import express from "express";
import notesRoutes from "./routes/appRoutes.js";
import { connectDB } from "./config/db.js"
import dotenv from "dotenv"

dotenv.config();
const PORT = process.env.PORT || 5001

const app = express();

// connectDB(); //not done yet

//middleware
app.use(express.json());