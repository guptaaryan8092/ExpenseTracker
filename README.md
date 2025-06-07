# 💰 Expense Tracker / Budget Planner

A full-stack web application that allows users to track and manage their daily, monthly, and yearly expenses. The app features an intuitive UI, powerful visualizations, and secure data storage.

---

## 🚀 Live Demo

🔗 [Click here to visit the live app](https://expensetracker-client-olkh.onrender.com/)

---

## 🖼️ Screenshots

| Dashboard View | Chart Visualization |
|----------------|---------------------|
| ![Dashboard](./public/projects/ExpenseTracker/expense1.png) | ![Chart](./public/projects/ExpenseTracker/expense2.png) |

---

## 🛠️ Technologies Used

### ✅ Frontend

- **React.js** – Building interactive UI
- **Tailwind CSS** – Styling and responsive design
- **Axios** – Handling API requests
- **Recharts & Chart.js** – Expense visualization

### ✅ Backend

- **Node.js** – JavaScript runtime
- **Express.js** – Backend framework
- **MongoDB** – NoSQL database
- **Mongoose** – ODM for MongoDB

### ✅ Others

- **RESTful APIs** – Communication between frontend and backend
- **JWT (JSON Web Tokens)** – Secure authentication
- **Render** – Hosting backend server
- **Vercel / Netlify** – Hosting frontend

---

## ✨ Features

- ✅ User Authentication (Login / Register)
- ✅ Add, edit, and delete expenses
- ✅ Visualize expenses via charts (daily, monthly, yearly)
- ✅ View summary statistics
- ✅ Responsive UI for desktop & mobile
- ✅ Data stored securely in MongoDB

---
## 📂 Folder Structure
- ExpenseTracker/
- ├── client/         # React Frontend
- │   └── src/
- │       ├── components/
- │       ├── pages/
- │       └── App.js
- ├── server/         # Express Backend
- │   ├── controllers/
- │   ├── models/
- │   ├── routes/
- │   └── server.js
- └── README.md

---

##👨‍💻 Author
Aryan Gupta
📧 LinkedIn
💻 GitHub

---
## 🧪 How to Run Locally

```bash
# Clone the repository
git clone https://github.com/yourusername/ExpenseTracker.git
cd ExpenseTracker

# Install dependencies for client and server
cd client
npm install

cd ../server
npm install

# Run backend server
npm run dev

# In a new terminal, run frontend
cd ../client
npm start
