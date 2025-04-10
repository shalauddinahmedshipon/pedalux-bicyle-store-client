# Peraluxe Bicycle Store 2025

A full-stack bicycle e-commerce platform with secure authentication, role-based dashboards, responsive UI, and efficient product and order management. Built with **React**,**Redux**, **Node.js**, **Express**, **MongoDB**, and **JWT**, this platform supports real-time bicycle ordering, filtering, and role-based administration.

---

## 🌐 Live Deployment

**Frontend**: [https://pedaluxe-bicyle-strore-client-b4-a4.vercel.app/](https://pedaluxe-bicyle-strore-client-b4-a4.vercel.app/)  
**Backend**: [https://pedaluxe-bicyle-store-server-b4-a4.vercel.app/](https://pedaluxe-bicycle-store-server.vercel.app/) *(replace with your actual backend URL)*

---

## 🚀 Features

### 👥 User Roles

- **Admin**:
  - Manage users (deactivate/activate).
  - Full CRUD access for bicycles and orders.
  - Dashboard with sales analytics (optional).
- **Customer**:
  - Register/login and browse bicycles.
  - Place orders with real-time availability check.
  - View and manage own orders and profile.

---

### 🔐 Authentication & Authorization

- **Secure Registration & Login**
  - Passwords are securely hashed.
  - JWT token issued on login.
- **JWT-Based Authorization**
  - Token stored in `localStorage`.
  - Protected dashboard and checkout routes.
- **Logout**
  - Token cleared from `localStorage`.

---

### 🛍 Public Pages

- **Home Page**
  - Hero section/banner with offers.
  - Featured bicycles.
  - Extra section (e.g., testimonials,offers).
  - Responsive navigation and footer.

- **All Bicycles Page**
  - Real-time search (brand, name, category).
  - Filter by price, brand, model, availability.
  - "View Details" buttons on cards.

- **Bicycle Details Page**
  - Complete specifications.
  - "Buy Now" redirects to checkout.

- **About Page**
  - Shop history, mission, and value.

---

### 🔒 Private Routes

- **Checkout Page**
  - Quantity validation with stock check.
  - Order form includes summary and payment.
  - Integrated with Stripe or other gateway.
  - “Order Now” finalizes purchase.

- **User Dashboard**
  - View past orders.
  - Update profile and password securely.

- **Admin Dashboard**
  - Manage users, products, and orders.
  - CRUD with real-time feedback.

---

## 🎨 UI/UX Design

- **Responsive Design**
  - Works smoothly on all screen sizes.
- **Error Handling**
  - Friendly messages for login, registration, stock, etc.
- **Loading & Toasts**
  - Loaders for async operations.
  - Toast notifications for success/failure.

---

## 📊 Sales Dashboard

- Admin-side analytics with charts:
  - **Total Sales**
  - **Units Sold**
  - **Top-Selling Bicycles**

---

## 🧰 Technologies Used

- **Frontend**:TypeScript, React,Tailwind CSS, Shadcn, React Router DOM, React hook form.
- **Backend**: TypeScript, Node.js, Express.js
- **Authentication**: JWT, bcrypt ,Zod
- **Database**: MongoDB, Mongoose 
- **State Management**: Redux Toolkit, RTK Query
- **Payment**:  SurjoPay
- **Deployment**: Vercel (frontend,backend)

---

## 📦 Installation Guide

### Backend

```bash
# 1. Clone the repository
git clone https://github.com/shalauddinahmedshipon/pedelux-bicyle-store-server.git
cd pedelux-bicyle-store-server

# 2. Install dependencies
npm install
```

Create a `.env` file and add the following environment variables:

```env
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
```

```bash
# 3. Run the server
npm run dev     # Development
npm start       # Production
```

---

### Frontend

```bash
# 1. Clone the repository
git clone https://github.com/shalauddinahmedshipon/pedalux-bicyle-store-client.git
cd pedalux-bicyle-store-client

# 2. Install dependencies
npm install

# 3. Run the frontend
npm run dev
```

---

## 🛠 Admin Credentials

```txt
Email:admin1@gmail.com
Password: 12345678
```

---

Feel free to fork and enhance the platform with new features such as:
- Wishlist/Favorites
- Bicycle comparison tools
- Email confirmation on orders
