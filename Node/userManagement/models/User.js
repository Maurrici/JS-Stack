import knex from "../database/connection.js";
import bcrypt from "bcrypt";

class User{
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

    async findByEmail(email){
        try {
            let result = await knex.select("*").where({email: email}).table("users");

            return result.length > 0 ? result[0] : undefined;
        } catch (error) {
            console.log(error);
            return undefined;
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

    async create(name, email, password, role){
        try {
            var hash = await bcrypt.hash(password, 10);
            await knex.insert({name, email, password: hash, role}).table('users');
        } catch (error) {
            console.log(error);
        }
    }

    async update(id, email, name, role){
        try {
            let user = await this.findById(id);
            let editUser = {};

            if(user == undefined) return {status: false, message: "Usuário não existe!"};
            else{
                if(email != undefined){
                    if(email != user.email){
                        let result = await this.findEmail(email);
                        
                        if(result) return {status: false, message: "Email já cadastrado!"};
                        else{
    
                        }
                    }
                }
                
                if(name != undefined) editUser.name = name;

                if(role != undefined) editUser.role = role;

                await knex.update(editUser).where({id: id}).table("users");
                return {status: true};
            }
        } catch (error) {
            return {status: false, message: error}
        }
    }

    async delete(id){
        try {
            let user = await this.findById(id);

            if(user == undefined) return {status: false, message: "Usuário não existe!"};
            else{
                await knex.delete().where({id: id}).table("users");

                return {status: true};
            }
        } catch (error) {
            return {status: false, message: error};
        }
    }

    async changePassword(newPassword, token){
        try {
            let id = token.user_id;
            let hash = await bcrypt.hash(newPassword, 10);

            await knex.update({password: hash}).where({id: id}).table("users");
            await knex.update({valid: 1}).where({id: token.id}).table("tokens");
        } catch (error) {
            console.log(error);
        }
    }

    async comparePassword(user, password){
        return await bcrypt.compare(password, user.password);
    }
}

export default new User();