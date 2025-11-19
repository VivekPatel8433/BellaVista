import express from "express";
import cors from "cors";
import ConnectDB from "./config/db.js";
import dotenv from "dotenv" // dotenv is a small Node.js package that loads environment variables from a .env file into process.env.
import reserveTable from "./routes/reservetable.js"

dotenv.config();

const app = express(); 
app.use(express.json())
app.use(cors())
const PORT = process.env.PORT || 3001;

app.use(express.json());

ConnectDB();

app.use("/api/reservation", reserveTable); 


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});