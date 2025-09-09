import { remove } from '../../models/profileModel.js'

export const deleteProfileController = async (req, res) => {
  const id = req.params.id

  // id vem da url como string, precisa converter para number
  const result = await remove(+id)  // +id converte para number ou usar Number(id) ou usar parseInt(id)

  res.json({
    message: `Usuário com ID ${id} deletado com sucesso!`,
    profile: result
  })
}