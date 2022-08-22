import Appointment from "../models/Appointment.js";
import AppointmentFactory from "../factories/AppointmentFactory.js";
import mailer from "nodemailer";

class AppointmentService{
    constructor(){
        this.transporter = mailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 25,
            auth:{
                user: "f9d99520688e31",
                pass: "7512de9508787d"
            }
        });
    }

    async Create(name, email, description, cpf, date, time){
        try {
            let newAppointment = new Appointment({
                name,
                email,
                description,
                cpf,
                date,
                time,
                isOpen: true,
                isNotified: false
            });
    
            await newAppointment.save();

            return {status: true};
        } catch (error) {
            console.log(error);
            return {status: false, message: error};
        }
    }

    async FindAll(search=''){
        try {
            let appointments;
            
            if(search != ''){
                appointments = await Appointment.find().or([{name: {$regex: '.*' + search + '.*'}}, {cpf: {$regex: '.*' + search + '.*'}}]);
            }else{
                appointments = await Appointment.find();
            }
            
            return {status: true, data: appointments};
        } catch (error) {
            console.log(error);
            return {status: false, message: error};
        }
    }

    async FindAppointmentsOpen(){
        try{
            let appointments = await Appointment.find({'isOpen': true});
            let data = appointments.map(appointment => AppointmentFactory.Build(appointment));

            return {status: true, data};
        }catch(error){
            console.log(error);
            return {status: false, message: error};
        }
    }

    async FindByID(id){
        try {
            let appointment = await Appointment.findOne({'_id': id});
            return {status: true, data: appointment};
        } catch (error) {
            console.log(error);
            return {status: false, message: error};
        }
    }

    async CloseAppointment(id){
        try {
            await Appointment.findByIdAndUpdate(id, {'isOpen': false});
            return {status: true};
        } catch (error) {
            console.log(error);
            return {status: false, message: error};
        }
    }

    async SendNotification(){
        let appointments = await Appointment.find({'isOpen': true, 'isNotified': false});
        appointments = appointments.map(appointment => AppointmentFactory.Build(appointment));
        
        const hourInMiliseconds = 1000 * 60 * 60;
        appointments.forEach(appointment => {
            let date = appointment.start.getTime();
            let diff = date - Date.now();

            if(diff <= hourInMiliseconds){
                this.transporter.sendMail({
                    from: "Sistema de Agendamentos <agendamento@maurrici.com>",
                    to: appointment.email,
                    subject: appointment.title,
                    text: `Falta 1 hora para a sua consulta! A sua consulta está marcada para ${appointment.start}.`
                }).then(async () => {
                    await Appointment.findByIdAndUpdate(appointment.id, {'isNotified': true});
                }).catch(err => {
                    console.log(err);
                })
            }
        });
    }
}

export default new AppointmentService();