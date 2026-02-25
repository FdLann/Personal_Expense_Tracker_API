import express from "express";
import {
  createExpense,
  deleteExpense,
  getAllExpenses,
  getExpenseSummary,
  updateDataExpense,
} from "../controllers/expenseController.js";
import { validateExpense } from "../middleware/validateExpense.js";

const router = express.Router();

router.get("/summary", getExpenseSummary);
router.get("/", getAllExpenses);

router.post("/", validateExpense, createExpense);
router.put("/:id", validateExpense, updateDataExpense);

router.delete("/:id", deleteExpense);

export default router;
