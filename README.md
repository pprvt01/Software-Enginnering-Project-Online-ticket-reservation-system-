# 🚌 Online Ticket Reservation System

A full‑stack **MERN-based Online Ticket Reservation System** featuring
real‑time seat booking, admin bus management, payment gateway
integration (Razorpay), and downloadable ticket PDFs.

------------------------------------------------------------------------

## 📌 Features

### ⭐ User Features

-   Search buses between **Indian cities**
-   Real‑time **seat selection** (bus seat layout)
-   Online **payments using Razorpay**
-   Auto‑generated **PDF ticket download**
-   View booking history
-   Responsive UI

### ⭐ Admin Features

-   Login to **Admin Panel**
-   Add / Edit / Delete buses
-   Manage routes, timings, and fares
-   View all bookings

------------------------------------------------------------------------

## 🏗️ Tech Stack

### **Frontend**

-   React.js\
-   Vite\
-   Axios\
-   React Router\
-   TailwindCSS\
-   Context API / Redux (optional)

### **Backend**

-   Node.js\
-   Express.js\
-   MongoDB + Mongoose\
-   Razorpay Payment Gateway\
-   JWT Authentication\
-   PDFKit for Ticket PDFs

------------------------------------------------------------------------

## 📂 Folder Structure

    online-ticket-reservation/
    │
    ├── backend/  
    │   ├── controllers/
    │   ├── models/
    │   ├── routes/
    │   ├── utils/
    │   ├── server.js
    │   ├── package.json
    │   ├── .env.example
    │
    └── frontend/
        ├── src/
        ├── components/
        ├── pages/
        ├── context/
        ├── App.jsx
        ├── main.jsx
        ├── package.json

------------------------------------------------------------------------

## ⚙️ Installation & Setup

### **1. Clone the repository**

``` sh
git clone https://github.com/your-repo/online-ticket-reservation.git
cd online-ticket-reservation
```

------------------------------------------------------------------------

## 🚀 Backend Setup

### **2. Install backend dependencies**

``` sh
cd backend
npm install
```

### **3. Create .env file**

Copy the sample file:

``` sh
cp .env.example .env
```

Fill it with your credentials:

    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_secret_key

    RAZORPAY_KEY_ID=your_key
    RAZORPAY_KEY_SECRET=your_secret

### **4. Start backend server**

``` sh
npm run dev
```

Backend will start at\
👉 http://localhost:5000

------------------------------------------------------------------------

## 🎨 Frontend Setup

### **5. Install frontend dependencies**

``` sh
cd ../frontend
npm install
```

### **6. Start frontend**

``` sh
npm run dev
```

Frontend will run at:\
👉 http://localhost:5173

------------------------------------------------------------------------

## 🔌 API Endpoints Overview

### **Auth**

  Method   Endpoint             Description
  -------- -------------------- ---------------
  POST     /api/auth/register   Register user
  POST     /api/auth/login      Login user

### **Buses**

  Method   Endpoint            Description
  -------- ------------------- ---------------
  GET      /api/buses/search   Search buses
  POST     /api/buses/add      Admin add bus

### **Booking**

  Method   Endpoint               Description
  -------- ---------------------- ----------------
  POST     /api/bookings/create   Create booking
  GET      /api/bookings/user     User bookings

### **Payments**

  Method   Endpoint              Description
  -------- --------------------- ----------------
  POST     /api/payment/order    Razorpay order
  POST     /api/payment/verify   Verify payment

------------------------------------------------------------------------

## 🎟️ Ticket PDF Example

Each ticket PDF includes: - Passenger Name\
- Bus Name\
- Date & Time\
- Selected Seats\
- Transaction ID\
- QR Code

Generated using **PDFKit**.

------------------------------------------------------------------------

## 🛡️ Authentication Flow

-   JWT used for login session
-   Admin routes protected using middleware
-   Tokens stored in HttpOnly cookies or local storage

------------------------------------------------------------------------

## 🧪 Testing

Run backend tests (if added):

``` sh
npm test
```

------------------------------------------------------------------------

## 📦 Build For Production

Frontend:

``` sh
npm run build
```

Backend with PM2:

``` sh
pm2 start server.js
```

------------------------------------------------------------------------

## 🤝 Contribution

Feel free to fork the repo and submit pull requests.

------------------------------------------------------------------------

## 📄 License

Licensed under **MIT License**.

------------------------------------------------------------------------

## 👤 Author

**Rahul Agarwal**\
Full-stack Developer
