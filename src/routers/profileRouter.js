import express from 'express'

const router =  express.Router()

router.post('/', (req, res) => {
    const dados = req.body
    res.json({
        message:'Perfil criado com sucesso',
        profile: dados
    })
})

// Lista todos os profiles
router.get('/', (req, res) => {
    res.json({message:'usuários consultados com sucesso!'})
})

//Consulta um profile específico pelo ID
router.get('/:id', (req, res) => {
    const { id } = req.params.id
    res.json({message:'usuário consultado com sucesso!'})
})

router.put('/', (req, res) => {
    const dados = req.body
    res.json({
    message:'Perfil atualizado com sucesso',
    profile: dados})
})

router.delete('/:id', (req, res) => {
    const { id } = req.params.id
    res.json({message:`usuário com ID ${id} deletado com sucesso!`})
})


export default router