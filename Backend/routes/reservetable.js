import express from "express";
import reserve from "../controllers/reserve.js"; 

const router = express.Router();

router.post("/reservetable", reserve);

export default router;