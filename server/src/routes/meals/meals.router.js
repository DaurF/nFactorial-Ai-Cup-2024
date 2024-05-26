import express from 'express'
import {httpAddMealForUser, httpGetMealsForUser} from './meals.controller.js'

const router = express.Router();

router.get('/:username', httpGetMealsForUser);
router.post('/', httpAddMealForUser)

export default router;
