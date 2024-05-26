import {pool} from "../../services/mysql.js";

export async function httpGetMealsForUser(req, res) {
  const username = req.params.username;
  const [user_ids] = await pool.query('SELECT id FROM users WHERE username = ?', [username])

  const [meals] = await pool.query(`
    SELECT Day.day AS meal_date, Meal.meal, Meal.name, Meal.instructions FROM Meal
    JOIN Day ON Meal.day_id = Day.id
    WHERE Day.user_id = ?;
  `, [user_ids[0].id])

  res.status(200).json(meals)
}

export async function httpAddMealForUser(req, res) {
  const {username, meals} = req.body;
  const [user_ids] = await pool.query("SELECT id FROM users WHERE username = ?", [username])
  const user_id = user_ids[0].id

  for (const meal of meals) {
    const date = meal.date.split('T')[0]
    const [res1] = await pool.query("INSERT INTO day (user_id, day) VALUES (?, ?)", [user_id, date])
    console.log(res1)
    for (const m of meal.meals) {
      const res = await pool.query("INSERT INTO meal (day_id, meal, name, instructions) VALUES(?, ?, ?, ?)", [res1.insertId, m.meal, m.name, m.instructions])

    }
  }
  res.status(201).json({})
}

