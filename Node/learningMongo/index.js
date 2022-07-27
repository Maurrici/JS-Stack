import mongoose from "mongoose";
import Model from "./Model.js";

mongoose.connect("mongodb://localhost:27017/learningMongo");

// Criação
/*const exampleModel = new Model({
    name: "Node Js + Mongo = Happy", 
    value: 12,
    resume: {
        author: "Maurrici",
        content: "Um nasceu para o outro!"
    }
});
exampleModel.save();
*/

// Deleção
/* Model.findByIdAndDelete("62df112d3e19ff215d9d6331").then(() => console.log("Removido")).catch(error => console.log(error));
*/

// Edição
Model.findByIdAndUpdate("62df1047ae94ee98c432bd66", {name: "Evoluindo o estágio!", value: 12, 'resume.content': 'Teste'}).then(() => {
    console.log("Edição concluída!");
}).catch(error => {
    console.log(error);
});


// Leitura
Model.find().then(models => {
    console.log(models);
}).catch( error => {
    console.log(error);
});

