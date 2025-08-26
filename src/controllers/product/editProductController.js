export const editProductController = (req, res) => {
    const dados = req.body
    res.json({
    message:'Produto atualizado com sucesso',
    profile: dados})
}