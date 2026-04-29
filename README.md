# 🛒 E-Commerce React App
A modern e-commerce frontend built using React and Context API. This application allows users to browse products, view details, manage a shopping cart, and complete a checkout process.

---

## 🚀 Features

* 🏠 Home page with product listing
* 🔍 Product details view
* 🛒 Add to cart functionality
* 🔢 Update item quantity
* ❌ Remove items from cart
* 💰 Dynamic total price calculation
* 🧾 Checkout page with order summary
* ✅ Place order with confirmation
* 🧹 Clear cart after order
* 🔐 Basic authentication system
* 🌐 Global state management using Context API

---

## 🧱 Tech Stack

* **React (Hooks)**
* **Context API** (State Management)
* **Vite** (Fast build tool)
* **JavaScript (ES6+)**
* **CSS**

---

## 📂 Project Structure

```bash
ecommerce/
│
├── src/
│   |
│   ├── components/          # Reusable UI components
│   │   ├── Navbar.jsx
│   │   └── ProductCard.jsx
│
│   ├── context/             # Global state management
│   │   ├── AuthContext.jsx
│   │   └── CartContext.jsx
│
│   ├── data/                # Static data
│   │   └── products.js
│
│   ├── pages/               # Application pages
│   │   ├── Auth.jsx
│   │   ├── Checkout.jsx
│   │   ├── Home.jsx
│   │   └── ProductDetails.jsx
│
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
|___
```

---

## ⚙️ Installation & Setup

1. **Clone the repository**

```bash
git clone https://github.com/your-username/ecommerce.git
```

2. **Navigate into the project**

```bash
cd ecommerce
```

3. **Install dependencies**

```bash
npm install
```

4. **Run the development server**

```bash
npm run dev
```

5. Open in browser:

```bash
http://localhost:5173
```

---

## 🛠️ Core Functionalities

### 🛒 Cart System

* Add products to cart
* Update quantity dynamically
* Remove items
* Calculate total price

### 💳 Checkout

* Displays all cart items
* Shows subtotal & total
* Place order with confirmation alert
* Clears cart after order

### 🔐 Authentication

* Basic login/signup functionality using Context API

---

## 📸 Screenshots (Optional)


## ⚠️ Future Improvements

* 🔗 Backend integration (Node.js)
* 💳 Payment gateway (Stripe/Razorpay)
* 🧑 User profiles & order history
* 🎨 UI enhancements

---

## 👨‍💻 Author

Developed by **Dishitha V**

---
* 📊 project highlights for resume
* 🌍 live demo section
* 🧠 better “About the project” (interview-ready)
