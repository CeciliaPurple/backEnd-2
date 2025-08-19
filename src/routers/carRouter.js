import express from 'express'

const router =  express.Router()

router.put('/:id', (req, res) => {
    const id = req.params.id
    const car = req.body
    res.json({
        message:`${car.marca} ${car.modelo} com ID ${id} alterado!`,
        marca: car.marca,
        modelo: car.modelo
    })
})

export default router