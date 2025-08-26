export const editCarController = (req, res) => {
    const id = req.params.id
    const car = req.body
    res.json({
        message:`${car.marca} ${car.modelo} com ID ${id} alterado!`,
        marca: car.marca,
        modelo: car.modelo
    })
}
