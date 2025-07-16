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

//Register API
Router.post("/register",register);

//Login API
Router.post("/login",login);

//display all the users in mongodb
Router.get("/showusers",showusers)

//updating the user as admin API
// Router.patch("/:id",authenticate,authorize("admin"),updateUser)
Router.patch("/:id", updateUser);

// //deleting the user as admin API
// Router.delete("/:id",authenticate,authorize("admin"),deleteUser)
Router.delete("/:id", deleteUser);

//showing only one user details as admin API
Router.get("/:id/profile",authenticate,profileUser)

//add the users
// Router.post("/",authenticate,authorize("admin"), addUser);
Router.post("/", addUser);

export default Router;