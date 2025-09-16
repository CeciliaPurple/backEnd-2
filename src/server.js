import express from 'express'
import profileRouter from './routers/profileRouter.js'
import productRouter from './routers/productRouter.js'
import supplierRouter from './routers/supplierRouter.js'
import carRouter from './routers/carRouter.js'
import customerRouter from './routers/customerRouter.js'
import cors from 'cors'
import { logger } from './middleware/logger.js'

const app = express()
const port = 3000

app.use (logger)
app.use(cors()) //habilita o CORS para todas as rotas
app.use(express.json()) //converte a string do JSON em objeto

app.use('/profile', profileRouter)
app.use('/product', productRouter)
app.use('/supplier', supplierRouter)
app.use('/car', carRouter)
app.use('/customer', customerRouter)

app.listen(port, () => {
    console.log(`API Rodando em http://localhost:${port}`)
})