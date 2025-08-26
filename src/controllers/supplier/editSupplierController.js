export const editSupplierController = (req, res) => {
    const dados = req.body
    res.json({
        message:'Fornecedor atualizado com sucesso',
        profile: dados
    })
}
