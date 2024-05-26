import express from 'express'
import cors from 'cors'
import api from './routes/api.js'

const app = express()
app.use(cors({origin: '*'}))
app.use(express.json())

app.use('/api/v1/', api)


export default app;
