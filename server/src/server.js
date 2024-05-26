import dotenv from 'dotenv'

dotenv.config();

import http from "http";

import app from "./app.js"
import {mysqlConnect} from './services/mysql.js'

const server = http.createServer(app);
const PORT = process.env.PORT || 8000;

function startServer() {
  mysqlConnect()
  server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}...`);
  });
}

startServer();
