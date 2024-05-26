import {pool} from "../../services/mysql.js";

async function findUser(id) {
  const [user] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
  return user[0]
}

export {findUser}
