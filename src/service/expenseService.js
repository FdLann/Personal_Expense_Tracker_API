import db from "../config/db.js";

export const getData = async () => {
  const [rows] = await db.query("SELECT * FROM expense ORDER BY date DESC");
  return rows;
};

export const createData = async (data) => {
  const { title, amount, category, date } = data;
  await db.query(
    "INSERT INTO expense(title,amount,category,date) VALUES (?,?,?,?)",
    [title, amount, category, date],
  );
};

export const deleteData = async (id) => {
  const [result] = await db.query(`DELETE FROM expense WHERE id = ?`, [id]);
  return result.affectedRows > 0;
};

export const updateAllData = async (id, data) => {
  const { title, amount, category, date } = data;

  if (!title || !amount || !category || !date) {
    throw new Error("All fields are required");
  }

  const [result] = await db.query(
    `UPDATE expense set title = ?, amount = ?, category = ?, date = ? WHERE id = ?`,
    [title, amount, category, date, id],
  );

  if (result.affectedRows === 0) {
    throw new Error("Data Not Found");
  }

  result.affectedRows > 0;
};

export const getSummary = async () => {
  const [rows] = await db.query(`
    SELECT
      ROUND(SUM(amount),2) as total_spent,
      ROUND(AVG(amount),2 )as average_spent,
      COUNT(*) as total_transactions
    FROM expense
    `);

  const [categoryRows] = await db.query(`
  SELECT category, ROUND(SUM(amount),2) as total
  FROM expense
  GROUP BY category
  `);

  return {
    overall: rows[0],
    by_category: categoryRows,
  };
};
