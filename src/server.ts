import express from 'express'
import cors from 'cors'
import dashboardRoutes from './handlers/dashboardRoutes'
import productRoutes from './handlers/productRoutes'
import userRoutes from './handlers/userRoutes'

const app: express.Application = express()
const address: string = "0.0.0.0:3000"

app.use(express.json())
app.use(cors()) 

dashboardRoutes(app)
productRoutes(app)
userRoutes(app)


app.listen(3000, function () {
    console.log(`starting app on: ${address}`)
})

export default app