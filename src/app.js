import express from "express";
import dotenv from "dotenv";
import expenseRoutes from "./routes/expenseRoutes.js";
dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/expenses", expenseRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server Berjalan di Port ${process.env.PORT}`);
});
