import express from "express"
import groqRouter from './groq/groq.router.js'
import retellRouter from './retell/retell.router.js'
import authRouter from './auth/auth.router.js'
import mealsRouter from "./meals/meals.router.js";

const router = express.Router()


router.use("/groq", groqRouter)
router.use("/retell", retellRouter)
router.use("/auth", authRouter)
router.use("/meals", mealsRouter)

export default router;
