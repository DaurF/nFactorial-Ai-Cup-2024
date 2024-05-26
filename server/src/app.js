import express from 'express'
import api from './routes/api.js'

const app = express()

app.all('/', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.use(express.json())

app.use('/api/v1/', api)


export default app;
