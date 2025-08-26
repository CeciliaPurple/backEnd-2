export const editCustomerController = (req, res) => {
    const customer = req.body
    res.json({
        message: 'Cliente atualizado com sucesso',
        customer: customer
    })
}
