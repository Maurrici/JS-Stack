import express from "express";
import AppointmentController from "../src/controllers/AppointmentController.js";

var router = express.Router();

// Schedule routes
router.get("/", AppointmentController.Index);
router.get("/create", AppointmentController.CreateView);
router.post("/create", AppointmentController.Create);
router.get("/getAppointments", AppointmentController.GetAppointments);
router.get("/event/:id", AppointmentController.Event);
router.post("/close/appointment", AppointmentController.CloseAppointment);
router.get("/search", AppointmentController.Search);


export default router;