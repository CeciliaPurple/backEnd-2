import express from 'express'

const router =  express.Router()

router.post('/', (req, res) => {
    const dados = req.body
    res.json({
        message:'Produto criado com sucesso',
        product: dados
    })
})

// Lista todos os produtos
router.get('/', (req, res) => {
    res.json({message:'Produtos consultados com sucesso!'})
})

//Consulta um produto específico pelo ID
router.get('/:id', (req, res) => {
    const { id } = req.params.id
    res.json({message:'Produto consultado com sucesso!'})
})

router.put('/', (req, res) => {
    const dados = req.body
    res.json({
    message:'Produto atualizado com sucesso',
    profile: dados})
})

router.delete('/:id', (req, res) => {
    const { id } = req.params.id
    res.json({message:`Produto com ID ${id} deletado com sucesso!`})
})


export default router