import express from 'express'
import profileRouter from './routers/profileRouter.js'
import productRouter from './routers/productRouter.js'
import supplierRouter from './routers/supplierRouter.js'
import carRouter from './routers/carRouter.js'

const app = express()
const port = 3000

app.use(express.json()) //converte a string do JSON em objeto

app.use('/profile', profileRouter)
app.use('/product', productRouter)
app.use('/supplier', supplierRouter)
app.use('/car', carRouter)

app.listen(port, () => {
    console.log(`API Rodando em http://localhost:${port}`)
})