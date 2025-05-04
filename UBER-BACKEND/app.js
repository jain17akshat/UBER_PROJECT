const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const connectToDb = require('./db/db');
const userRoutes = require('./routes/user.routes');
const cookieParser=require("cookie-parser")
const captainRoutes=require("./routes/captain.routes")

dotenv.config();

// Connect to the database after the environment variables are loaded
connectToDb();





app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
 app.use(cookieParser())






app.get('/', (req, res) => {
  res.send("Hello world");
});

app.use('/users', userRoutes);
app.use('/captains',captainRoutes)
module.exports = app;
