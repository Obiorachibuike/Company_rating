
---

### ✅ `README.md`

```markdown
# Force Equals Hiring Challenge – Full Stack Backend API

This project is part of the Force Equals Full Stack Hiring Challenge. It provides a secure RESTful API for:

- User signup and login (with JWT)
- Fetching a list of companies with match scores
- Updating the "Target" status of a company

## 🚀 Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT (JSON Web Token)
- bcryptjs (for password hashing)

---

## 📁 Project Structure

```
force-equals-api/
├── config/            # DB connection
├── controllers/       # Business logic for auth and accounts
├── middleware/        # JWT auth middleware
├── models/            # User and Account schemas
├── routes/            # API routes
├── .env               # Environment variables
├── server.js          # Entry point
└── README.md
```

---

## 🔧 Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/your-username/force-equals-api.git
cd force-equals-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4. Start the server

```bash
npm run dev   # For development using nodemon
# OR
npm start     # For production
```

---

## 🛠️ API Endpoints

### Auth Routes

#### 🔐 `POST /signup`
Create a new user.

```json
{
  "username": "user1",
  "password": "pass123"
}
```

#### 🔑 `POST /login`
Login with credentials and get JWT.

```json
{
  "username": "user1",
  "password": "pass123"
}
```

**Response:**
```json
{
  "message": "Login successful",
  "token": "your.jwt.token"
}
```

---

### Account Routes (Protected)

> ⚠️ Requires Bearer token in headers:  
> `Authorization: Bearer your.jwt.token`

#### 📄 `GET /accounts`
Fetch all companies with their match scores and status.

**Response:**
```json
[
  {
    "_id": "123abc",
    "companyName": "TechCorp",
    "matchScore": 87,
    "status": "Target"
  }
]
```

#### 📝 `POST /accounts/:id/status`
Update the target status of a company.

```json
{
  "status": "Target"
}
```

---

## 🔐 Auth Example

```
Authorization: Bearer <your-token>
```

You can use tools like **Postman** or **curl** to test the endpoints.

---

## 📌 Notes

- Passwords are securely hashed using bcrypt.
- JWT tokens are valid for 24 hours.
- Account records are shared across all users (no user-specific ownership).

---

## 📬 Feedback & Contributions

Feel free to fork this repo or submit improvements via pull request!

---

## 📄 License

MIT © 2025
```

---

