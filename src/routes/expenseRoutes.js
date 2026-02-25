import express from "express";
import {
  createExpense,
  deleteExpense,
  getAllExpenses,
  getExpenseSummary,
  updateDataExpense,
} from "../controllers/expenseController.js";

const router = express.Router();

router.get("/summary", getExpenseSummary);

router.get("/", getAllExpenses);
router.post("/", createExpense);
router.delete("/", deleteExpense);
router.put("/:id", updateDataExpense);

export default router;
