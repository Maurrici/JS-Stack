import AppointmentService from "../services/AppointmentService.js";

class AppointmentController{
    async CreateView(req, res){
        res.render("create.ejs");
    }

    async Create(req, res){
        let {name, email, description, cpf, date, time} = req.body;

        let hasError = AppointmentController.verifyFields(name, email, description, cpf, date, time);

        if(hasError){
            res.status(400);
            res.json({message: 'Preencha todos os campos!'});
            return;
        }

        let response = await AppointmentService.Create(name, email, description, cpf, date, time);

        if(response.status) res.redirect("/");
        else{
            res.status(500);
            res.json({message: response.message});
        }
    }

    async GetAppointments(req, res){
        let response = await AppointmentService.FindAppointmentsOpen();

        if(response.status) res.json(response.data);
        else{
            res.status(500);
            res.json({message: response.message});
        }
    }

    async Index(req, res){
        res.render("index.ejs");
    }

    async Event(req, res){
        let id = req.params.id;
        let response = await AppointmentService.FindByID(id);
        if(response.status) res.render("event.ejs", response.data);
        else{
            res.status(500);
            res.json(response);
        }
    }

    async CloseAppointment(req, res){
        let id = req.body.id;

        let response = await AppointmentService.CloseAppointment(id);

        if(response.status) res.redirect("/");
        else{
            res.status(500);
            res.json(response);
        }
    }

    async Search(req, res){
        let search = req.query['search'] != undefined ? req.query['search'] : '';
        let response = await AppointmentService.FindAll(search);
        console.log(response.data);
        if(response.status) res.render("search.ejs", {appointments: response.data, search});
        else{
            res.status(500);
            res.json({message: response.message});
        }
    }

    static verifyFields(...fields){
        let hasFieldEmpty = false;

        fields.forEach(field => {
            if(field == undefined || field.trim() == ''){
                hasFieldEmpty = true;
            }
        });

        return hasFieldEmpty;
    }
}

export default new AppointmentController();