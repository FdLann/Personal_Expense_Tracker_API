import express from "express";
import dotenv from "dotenv";
import expenseRoutes from "./routes/expenseRoutes.js";
import errorLog from "./middleware/errorLog.js";
import errorHandler from "./middleware/errorHandler.js";
dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/expenses", expenseRoutes);

// middleware
app.use(errorLog);
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Server Berjalan di Port ${process.env.PORT}`);
});
