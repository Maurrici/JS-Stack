import express from "express";
import HomeController from "../controllers/HomeController.js";
import UserController from "../controllers/UserController.js";
import adminAuth from "../middleware/adminAuth.js";

var router = express.Router();

router.get('/', HomeController.index);
router.get('/validate', adminAuth, HomeController.validate);

// Users routes
router.post('/user', UserController.create);
router.get('/user', adminAuth, UserController.index);
router.get('/user/:id', adminAuth, UserController.getUser);
router.put('/user', adminAuth, UserController.edit);
router.delete('/user/:id', adminAuth, UserController.delete);


router.post('/recoverpassword', UserController.recoverPassword);
router.post('/changepassword', UserController.changePassword);

router.post('/login', UserController.login);


export default router;