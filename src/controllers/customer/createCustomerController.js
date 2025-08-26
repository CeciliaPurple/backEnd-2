export const createCustomerController = (req, res) => {
    const customer = req.body
    res.json({
        message: 'Cliente criado com sucesso',
        customer: customer
    })
}
