---
# 💰 Personal Expense Tracker API

API sederhana namun powerful untuk mengelola pengeluaran harian.
Dibangun menggunakan **Node.js**, **Express.js**, dan **MySQL** dengan arsitektur **Controller–Service** yang terstruktur dan scalable.
---

## 🚀 Features

- ✅ CRUD Pengeluaran (Create, Read, Update, Delete)
- 📊 Statistik & Summary (Total, Rata-rata, Jumlah Transaksi)
- 🗂️ Pengelompokan berdasarkan kategori
- 🧱 Clean Architecture (Controller & Service Layer)
- 🔒 Environment Configuration dengan dotenv

---

## 🛠 Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MySQL (mysql2)
- **Environment Config:** dotenv
- **Development Tool:** Nodemon

---

## 📦 Installation

### 1️⃣ Clone Repository

```bash
git clone https://github.com/FdLann/Personal_Expense_Tracker_API.git
cd Personal_Expense_Tracker_API
```

### 2️⃣ Install Dependencies

```bash
npm install
```

---

## 🗄️ Database Setup

Buat database di MySQL:

```sql
CREATE DATABASE expense_tracker;
USE expense_tracker;
```

Buat tabel:

```sql
CREATE TABLE expense (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  amount DECIMAL(10,2) NOT NULL,
  category ENUM('makanan','transportasi','hiburan','lainnya') DEFAULT 'lainnya',
  date DATE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## ⚙️ Environment Configuration

Buat file `.env` di root project:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=expense_tracker
PORT=3000
```

---

## ▶️ Run Application

Development mode:

```bash
npm run dev
```

Server akan berjalan di:

```
http://localhost:3000
```

---

## 🛣️ API Endpoints

- **GET** `/api/expenses` → Get all expenses
- **GET** `/api/expenses/summary` → Get expense summary
- **POST** `/api/expenses` → Create new expense
- **PUT** `/api/expenses/:id` → Update expense
- **PATCH** `/api/expenses/:id` → Partial update expense
- **DELETE** `/api/expenses/:id` → Delete expense

---

## 📊 Example Summary Response

```json
{
  "status": "success",
  "data": {
    "overall": {
      "total_spent": 24000,
      "average_spent": 12000,
      "total_transactions": 2
    },
    "by_category": [
      {
        "category": "makanan",
        "total": 24000
      }
    ]
  }
}
```

---

## 📂 Project Structure

```
src/
├── config/        # Database configuration
├── controllers/   # Request & response handling
├── service/       # Business logic & database query
├── routes/        # API route definitions
└── app.js         # Application entry point

.env               # Environment variables
package.json
```

---

## 📌 Architecture Overview

Project ini menggunakan pola:

Controller → Service → Database

- **Controller**: Handle request & response
- **Service**: Business logic & query
- **Database**: Data persistence

Struktur ini memudahkan scaling dan maintenance.

---

## 🔮 Future Improvements

- 🔐 Request validation (Joi / Zod)
- 🔑 Authentication (JWT)
- 📄 Pagination
- 📈 Monthly report
- 🧪 Unit Testing (Jest)
- 🐳 Docker support

---

## 👨‍💻 Author

Dibuat oleh **Muhamad Fadlan**

---

## ⭐ Support

Jika project ini membantu, jangan lupa ⭐ repository ini.

---
