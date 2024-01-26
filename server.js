const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const authRoutes = require("./routes/auth/auth");
const cvRoutes = require("./routes/cv");
/**
 * Load environment variables
 */
dotenv.config();

/**
 * Create the server
 */
const app = express();
const API_PORT = process.env.API_PORT;

app.listen(API_PORT, () => console.log(`SERVER RUNNING @ ${API_PORT}`));

/**
 * Connect to MongoDB
 */
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.error("ERROR CONNECTING TO MONGODB:", err);
    } else {
      console.log("CONNECTED TO MONGODB");
    }
  }
);

/**
 * Middleware
 *
 * disabling cors
 * using Json output
 */
app.use(express.json(), cors());

/**
 * Routes
 *
 * auth ( login, register )
 * cv ( create, read, update, delete )
 */
app.use("/api/auth", authRoutes);
app.use("/api/cv", cvRoutes);
