const receiveRoutes = require("./routes/receiveRoutes");
const sidebarRoutes = require("./routes/sidebarRoute");
const aboutRoutes = require("./routes/aboutRoutes");
const admissionRoutes = require("./routes/admissionRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const bannerRoutes = require("./routes/bannerRoutes");
const commonRoutes = require("./routes/commonRoutes");
const campusRoutes = require("./routes/campusRoutes");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
require("dotenv").config();

//db
mongoose.connect(
  process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("db is conected");
    const PORT = 8000;
    app.listen(PORT, () => {
      console.log("server is active");
    });
  }
);
// mw
app.use(express.json());
express.urlencoded({ extended: true });
// routes
app.use(receiveRoutes);
app.use(sidebarRoutes);
app.use(aboutRoutes);
app.use(admissionRoutes);
app.use(reviewRoutes);
app.use(bannerRoutes);
app.use(commonRoutes);
app.use(campusRoutes);
