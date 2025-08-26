import express from 'express'
import { editCarController } from '../controllers/car/editCarController.js'

const router = express.Router()

router.put('/:id', editCarController)

export default router