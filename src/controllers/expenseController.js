import * as expenseService from "../service/expenseService.js";

export const getAllExpenses = async (req, res) => {
  try {
    const data = await expenseService.getData();
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

export const createExpense = async (req, res) => {
  try {
    await expenseService.createData(req.body);
    res.status(201).json({ message: "Transaksi Berhasil Dicatat!" });
  } catch (error) {
    next(error);
  }
};

export const deleteExpense = async (req, res) => {
  const { id } = req.params;
  try {
    const isDeleted = await expenseService.deleteData(id);
    if (!isDeleted) {
      return res.status(404).json({ message: "Data tidak ditemukan" });
    }
    res.status(200).json({ message: "data berhasil dihapus" });
  } catch (error) {
    next(error);
  }
};

export const updateDataExpense = async (req, res) => {
  const { id } = req.params;
  try {
    const isUpdated = await expenseService.updateAllData(id, req.body);
    if (!isUpdated) {
      return res
        .status(404)
        .json({ message: "Data tidak ditemukan atau tidak ada perubahan" });
    }
    res.status(200).json({ message: "Data Berhasil Di Update", data: result });
  } catch (error) {
    next(error);
  }
};

export const getExpenseSummary = async (req, res) => {
  try {
    const summary = await expenseService.getSummary();
    res.status(200).json({
      status: "success",
      data: summary,
    });
  } catch (error) {
    next(error);
  }
};
