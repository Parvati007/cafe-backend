import express from "express"
import { authenticate,authorize } from "../middlewares/auth.js";
import { 
    register, 
    login, 
    showusers, 
    updateUser, 
    deleteUser, 
    profileUser,
    addUser,
} from "../controllers/userController.js";

const Router = express.Router();

//user routes
Router.post("/register", register);
Router.post("/login", login);
Router.get("/:id/profile", profileUser);
Router.patch("/:id", updateUser);

//admin routes

//Router.get("/showusers", authenticate, authorize("admin"), showusers);
Router.get("/showusers", showusers);

//Router.post("/", authenticate, authorize("admin"), addUser);
Router.post("/", addUser);

//Router.get("/:id/profile", authenticate, authorize("admin"), profileUser);
Router.get("/:id/profile", profileUser);

//Router.patch("/:id", authenticate, authorize("admin"), updateUser);
Router.patch("/:id", updateUser);

//Router.delete("/:id", authenticate, authorize("admin"), deleteUser);
Router.delete("/:id", deleteUser);

export default Router;

// npm init -y for package.json
// package.json mn type: module then only export and import will work
// npm i express mongoose dotenv cors
// npm i bcrypt jsonwebtoken
// npm i nodemon --save-dev
// index.js server.js initialize krna h import express and 8080 port dena h
// folders controllers, models, routes, middlewares
// model dena h - schema (data)
// then controllers - crud operations (export them)
// then routes (import controllers and define routes - express.Router())
// routes - users(admin(middlewares), user)
// then server.js - routing with prefixes , taken from routes folder
// then check in postman