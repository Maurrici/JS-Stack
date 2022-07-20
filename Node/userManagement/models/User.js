import knex from "../database/connection.js";
import bcrypt from "bcrypt";

class User{
    async create(name, email, password, role){
        try {
            var hash = await bcrypt.hash(password, 10);
            await knex.insert({name, email, password: hash, role}).table('users');
        } catch (error) {
            console.log(error);
        }
    }

    async findEmail(email){
        try {
            let result = await knex.select("*").from("users").where({email: email});

            return result.length > 0 ? true : false;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async findAll(){
        try {
            return await knex.select(["id", "email", "name", "role"]).table("users");
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    async findById(id){
        try {
            let result = await knex.select(["id","email","name","role"]).table("users").where({id: id});

            return result.length > 0 ? result[0] : undefined;
        } catch (error) {
            console.log(error);
            return undefined;
        }
    }
}

export default new User();