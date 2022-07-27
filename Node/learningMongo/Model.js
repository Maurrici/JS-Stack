import mongoose from "mongoose";

const ModelSchema = new mongoose.Schema({
    name: String,
    value: Number,
    date: {type: Date, default: Date.now},
    resume:{
        content: String,
        author: String
    }
});

export default mongoose.model("Model", ModelSchema);