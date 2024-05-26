import express from 'express'
import cors from 'cors'
import api from './routes/api.js'

const app = express()
app.use(cors({origin: 'https://n-factorial-ai-cup-2024-front-6010uuq6n.vercel.app/'}))
app.use(express.json())

app.use('/api/v1/', api)


export default app;
