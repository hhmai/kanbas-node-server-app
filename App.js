import express from "express";
import "dotenv/config";
import Hello from "./Hello.js";
import Lab5 from "./Lab5.js";
import Lab6 from "./Lab6.js";
import mongoose from "mongoose";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import UserRoutes from "./Kanbas/Users/routes.js";
import session from "express-session";
import cors from "cors";

try {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("Connected to MongoDB");
  const app = express();
  app.use(cors());
  const sessionOptions = {
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  };
  if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
      sameSite: "none",
      secure: true,
      domain: process.env.HTTP_SERVER_DOMAIN,
    };
  }  
  app.use(
    session(sessionOptions)
  );
  
  app.use(express.json());
  ModuleRoutes(app);
  CourseRoutes(app);
  UserRoutes(app);
  Lab5(app);
  Lab6(app);
  Hello(app);
  app.listen(process.env.PORT || 4000);
} catch (error) {
  handleError(error);
}
