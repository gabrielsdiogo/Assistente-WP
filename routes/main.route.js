import express from 'express'
import {choice} from '../controllers/selectAction.controller.js'
const router = express.Router()

router.post("/", choice)

export { router }