import * as expenseService from "../service/expenseService.js";

export const getAllExpenses = async (req, res) => {
  try {
    const data = await expenseService.getData();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

export const createExpense = async (req, res) => {
  try {
    await expenseService.createData(req.body);
    res.status(201).json({ message: "Transaksi Berhasil Dicatat!" });
  } catch (error) {
    res.status(500).json({ message: "Gagal menambah data", error });
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
    res
      .status(500)
      .json({ message: "Gagal Menghapus Data", error: error.message });
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
    const status = error.message === "All fields are required" ? 400 : 500;
    res.status(status).json({ message: error.message });
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
    res.status(500).json({
      message: "Gagal mengambil ringkasan data",
      error: error.message,
    });
  }
};
