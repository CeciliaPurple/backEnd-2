import express from 'express'

const app = express()
const port = 3000

app.use(express.json()) //converte a string do JSon em objeto


app.post('/profile', (req, res) => {
    const dados = req.body
    res.json({
        message:'Perfil criado com sucesso',
        profile: dados
    })
})

app.get('/profile', (req, res) => {
    res.json({message:'Perfil de usuário'})
})

app.put('/profile', (req, res) => {
    const dados = req.body
    res.json({
    message:'Perfil atualizado com sucesso',
    profile: dados})
})

app.delete('/profile', (req, res) => {
    res.json({message:'Perfil deletado com sucesso'})
})

app.listen(port, () => {
    console.log(`API Rodando em http://localhost:${port}`)
})