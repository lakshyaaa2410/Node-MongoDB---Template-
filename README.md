# Node.js + MongoDB Starter Template

A boilerplate project setup for building scalable Node.js applications
with **Express.js** and **MongoDB**, following an MVC
(Model-View-Controller) folder structure.

------------------------------------------------------------------------

## 🚀 Features

-   Organized **MVC architecture**
-   **Express.js** for routing & APIs
-   **Mongoose** for MongoDB object modeling
-   Ready for **scaling** (adding new controllers, models, and routes)
-   `.env` configuration support

------------------------------------------------------------------------

## 📦 Getting Started

### 1️⃣ Clone the repository

``` bash
git clone https://github.com/lakshyaaa2410/Node-MongoDB---Template-
cd Node-MongoDB---Template-
```

### 2️⃣ Install dependencies

``` bash
npm install
```

### 3️⃣ Configure environment variables

Create a `.env` file in the root directory:

``` env
PORT=5000
MONGO_URI=mongodb://localhost:27017/your-db-name
```

### 4️⃣ Run the application

``` bash
npm start
```

For development with hot reload:

``` bash
npm run dev
```

------------------------------------------------------------------------

## 🛠️ Usage

-   **Add a Model** in `models/`
-   **Create a Controller** in `controllers/`
-   **Define Routes** in `routes/`
-   **Wire up routes** in `server.js`

Example workflow: 1. Create `userModel.js` 2. Create `userController.js`
3. Create `userRoutes.js` 4. Import route file in `server.js`

------------------------------------------------------------------------

## ✅ Available Scripts

-   `npm start` → Start server in production mode
-   `npm run dev` → Start server with nodemon (for development)

------------------------------------------------------------------------

## 🔗 Example API Endpoints

-   `GET /api/users` → Fetch all users\
-   `POST /api/users` → Create a user\
-   `GET /api/users/:id` → Fetch user by ID\
-   `PUT /api/users/:id` → Update user\
-   `DELETE /api/users/:id` → Delete user

------------------------------------------------------------------------

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first
to discuss your ideas.

------------------------------------------------------------------------

## 📜 License

This project is licensed under the **MIT License**.
