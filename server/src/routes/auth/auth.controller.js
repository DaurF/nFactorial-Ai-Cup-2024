import {pool} from '../../services/mysql.js'
import {findUser} from "../users/users.controller.js";

async function signup(req, res) {
  const {email, username, password} = req.body;

  const response = await pool.query('INSERT INTO users (email, username, password) VALUES (?, ?, ?)', [email, username, password])
  const user = await findUser(response[0].insertId)
  res.status(201).json({username: user.username})
}

async function login(req, res) {
  const {email, password} = req.body;
  const [users] = await pool.query('SELECT * FROM users WHERE email = ?', [email])

  if (!users.length || users[0].password !== password) {
    return res.status(401).json({})
  }

  return res.status(200).json({username: users[0].username})
}

export {
  signup,
  login
}
