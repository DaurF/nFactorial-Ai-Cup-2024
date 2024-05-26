import express from 'express'
import {httpRegisterCall} from './retell.controller.js'

const router = express.Router();

router.post('/register-call', httpRegisterCall);

export default router;
