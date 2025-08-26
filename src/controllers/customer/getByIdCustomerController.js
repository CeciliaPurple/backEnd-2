export const getByIdCustomerController = (req, res) => {
    const { id } = req.params
    res.json({
        message: 'Cliente consultado com sucesso',
        customer: { id }
    })
}
