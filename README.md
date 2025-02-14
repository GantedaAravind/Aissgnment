# User Authentication API (Express.js & MongoDB)

This is a simple **user authentication API** built with **Express.js**, **MongoDB**, and **JWT**. It allows users to register, log in, search users, retrieve user profiles, and log out securely.

## 🚀 Features

- **User Registration** (Validates email, password, and other details)
- **User Login** (Generates JWT token for authentication)
- **Search Users** by username or email
- **Retrieve Logged-in User Profile**
- **Logout** (Clears authentication token)
- **Secure Authentication** using **JWT** & **Cookies**
- **Server-side Validation** using `validator` npm package
- **Structured Codebase** for scalability

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js, MongoDB
- **Authentication:** JWT (JSON Web Token)
- **Validation:** `validator` npm package
- **Security:** HTTP-only cookies for authentication

---

## 📂 Project Structure

```
📦 project-folder
├── 📁 config          # Database configuration
│   ├── db.js         # MongoDB connection
│
├── 📁 controllers     # Controllers (API logic)
|   ├── 📁 USER
|   │   ├── singup.js  # signup
|   │   ├── login.js   # login
|   │   ├── logout.js  #logout
|   │   ├── getUser.js  #  Search, Profile
│
│
├── 📁 models          # Mongoose schemas
│   ├── User.js       # User model
│
├── 📁 routes          # API Routes
│   ├── userRoutes.js  # Register, Search, Profile
│
├── .env              # Environment variables
├── server.js         # Main entry point
├── package.json      # Dependencies
└── README.md         # Documentation
```

---

## 🔧 Installation & Setup

### 1️⃣ **Clone the Repository**

```sh
git clone https://github.com/GantedaAravind/Aissgnment.git
cd Aissgnment
```

### 2️⃣ **Install Dependencies**

```sh
npm install
```

### 3️⃣ **Set Up Environment Variables**

Create a `.env` file and add the following:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### 4️⃣ **Run the Server**

```sh
npm start
```

The API will be running on **http://localhost:5000**.

---

## 📌 API Endpoints

### 1️⃣ **User Registration**

- **Endpoint:** `POST /api/users/register`
- **Description:** Registers a new user with validation
- **Request Body (JSON):**

```json
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "Secure@123",
  "fullName": "John Doe",
  "gender": "Male",
  "dob": "1995-06-12",
  "country": "USA"
}
```

- **Response (201 Created):**

```json
{
  "message": "User registered successfully"
}
```

---

### 2️⃣ **User Login**

- **Endpoint:** `POST /api/auth/login`
- **Description:** Logs in a user and returns an auth token in cookies.
- **Request Body (JSON):**

```json
{
  "email": "john@example.com",
  "password": "Secure@123"
}
```

- **Response (200 OK):**

```json
{
  "message": "Login successful",
  "token": "your_jwt_token"
}
```

(Stored as `auth_token` in cookies)

---

### 3️⃣ **Search User**

- **Endpoint:** `GET /api/users/search?search=john_doe`
- **Description:** Search for a user by **username** or **email**.
- **Response (200 OK):**

```json
{
  "_id": "65d0a3b1c0a25d1f7890abcd",
  "username": "john_doe",
  "email": "john@example.com",
  "fullName": "John Doe",
  "gender": "Male",
  "dob": "1995-06-12",
  "country": "USA"
}
```

---

### 4️⃣ **Get Logged-in User Profile**

- **Endpoint:** `GET /api/users/profile`
- **Authentication:** **JWT Token required in cookies**
- **Response (200 OK):**

```json
{
  "_id": "65d0a3b1c0a25d1f7890abcd",
  "username": "john_doe",
  "email": "john@example.com",
  "fullName": "John Doe",
  "gender": "Male",
  "dob": "1995-06-12",
  "country": "USA"
}
```

---

### 5️⃣ **User Logout**

- **Endpoint:** `POST /api/auth/logout`
- **Description:** Clears the authentication cookie to log out the user.
- **Response (200 OK):**

```json
{
  "message": "Logout successful"
}
```

---

## 🛠️ Postman Testing Guide

1. **Register a user** → `POST /user/signup`
2. **Login** → `POST /user/login` (Copy the `auth_token` from cookies)
3. **Search user** → `GET /user/search?search=username_or_email`
4. **Logout** → `POST /user/logout`

---

## 🔒 Authentication & Security

- **JWT-based authentication** using HTTP-only **cookies**.
- **Server-side validation** for email and password using `validator` npm package.
- **Passwords are hashed** using `bcrypt` before storing them in the database.
- **Protected routes** using authentication middleware.

---

## 📌 Future Enhancements

- 🔹 Add refresh tokens for better authentication management.
- 🔹 Implement **role-based authentication** (Admin/User).
- 🔹 Add rate limiting to prevent excessive API calls.

---

## 📞 Contact

For any queries or contributions, feel free to connect:

- **GitHub:** [GantedaAravind](https://github.com/GantedaAravind/)
- **Email:** aravindganteda@gmail.com -**PHONE:** 7993425684

---

🚀 **Happy Coding!**

```

---

### **📌 Summary**
✅ **Detailed API documentation**
✅ **Postman testing guide**
✅ **Installation steps**
✅ **Proper project structure**
✅ **Security considerations**
```
