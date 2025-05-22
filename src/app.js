import express from 'express'
import telefonoRoutes from './routes/mobile.routes.js'

const app = express()

app.use(express.json())
app.use('/api/',telefonoRoutes)

app.use((req,res,next)=> {
    res.status(404).json({
        message:'No existe el endpoint'
    })
})

export default app