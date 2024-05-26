import express from 'express'
import {httpGetMealPlansFromUserResponse} from './groq.controller.js'

const router = express.Router();

router.post('/', httpGetMealPlansFromUserResponse);

export default router;
