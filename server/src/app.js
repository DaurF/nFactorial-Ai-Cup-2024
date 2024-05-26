import express from 'express'
import api from './routes/api.js'
import cors from 'cors'

const app = express()

const corsOptions = {
  origin: '*',
  credentials: true,            //access-control-allow-credentials:true
  optionSuccessStatus: 200,
}
app.use(cors(corsOptions))

app.use(express.json())

app.use('/api/v1/', api)


export default app;
