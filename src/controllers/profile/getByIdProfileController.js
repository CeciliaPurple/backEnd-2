export const getByIdProfileController = (req, res) => {
    const { id } = req.params.id
    res.json({message:'usuário consultado com sucesso!'})
}