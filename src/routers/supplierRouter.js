import express from 'express'

const router =  express.Router()

router.post('/', (req, res) => {
    const dados = req.body
    res.json({
        message:'Fornecedor criado com sucesso',
        supplier: dados
    })
})

// Lista todos os fornecedores
router.get('/', (req, res) => {
    res.json({message:'Fornecedores consultados com sucesso!'})
})

//Consulta um fornecedor específico pelo ID
router.get('/:id', (req, res) => {
    const { id } = req.params.id
    res.json({message:'Fornecedor consultado com sucesso!'})
})

router.put('/', (req, res) => {
    const dados = req.body
    res.json({
    message:'Fornecedor atualizado com sucesso',
    profile: dados})
})

router.delete('/:id', (req, res) => {
    const { id } = req.params.id
    res.json({message:`Fornecedor com ID ${id} deletado com sucesso!`})
})


export default router