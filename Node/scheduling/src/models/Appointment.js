import mongoose from "mongoose";

let appointment = new mongoose.Schema({
    name: String,
    email: String,
    description: String,
    cpf: String,
    date: Date,
    time: String,
    isOpen: Boolean,
    isNotified: Boolean
});

export default mongoose.model('Appointment', appointment);