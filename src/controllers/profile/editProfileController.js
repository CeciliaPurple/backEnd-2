export const editProfileController = (req, res) => {
    const dados = req.body
    res.json({
    message:'Perfil atualizado com sucesso',
    profile: dados})
}