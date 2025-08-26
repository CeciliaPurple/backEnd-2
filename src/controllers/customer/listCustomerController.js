export const listCustomerController = (req, res) => {
    res.json({
        message: 'Clientes listados com sucesso',
        customers: []
    })
}
