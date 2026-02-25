import Joi from "joi";

export const validateExpense = (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string().min(3).max(50).required().messages({
      "string.min": "Judul minimal 3 karakter",
      "any.required": "Judul harus diisi",
    }),
    amount: Joi.number().positive().required().messages({
      "number.positive": "Jumlah harus angka positiv",
      "any.required": "Jumlah harus diisi",
    }),
    category: Joi.string()
      .valid("makanan", "transportasi", "hiburan", "lainnya")
      .required(),
    date: Joi.date().iso().required().messages({
      "date.format": "Format tanggal harus YYYY-MM-DD",
    }),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({
      status: "fail",
      message: error.details[0].message,
    });
  }
  next();
};
