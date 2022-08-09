class AppointmentFactory{
    Build(data){
        let day = data.date.getDate() + 1;
        let month = data.date.getMonth();
        let year = data.date.getFullYear();
        let hour = data.time.split(":")[0];
        let minutes = data.time.split(":")[1];
        let startDate = new Date(year, month, day, hour, minutes);

        var appointment = {
            id: data.id,
            title: data.name + " - " + data.description,
            start: startDate,
            end: startDate,
            email: data.email
        }

        return appointment;
    }
}

export default new AppointmentFactory();