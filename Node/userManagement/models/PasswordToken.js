import knex from "../database/connection.js";
import User from "./User.js";
import { v4 as uuidv4 } from 'uuid';

class PasswordToken{
    async create(email){
        try {
            let user = await User.findByEmail(email);

            if(user != undefined){
                let token = uuidv4();

                await knex.insert({token, valid: 0, user_id: user.id}).table("tokens");
                return {status: true, token};
            }else{
                return {status: false, message: "Email não cadastrado no sistema!"};
            }
        } catch (error) {
            return {status: false, message: error};
        }
    }

    async validate(token){
        try {
            let result = await knex.select("*").from("tokens").where({token: token});

            if(result.length > 0){
                let tokenBD = result[0];

                if(tokenBD.valid == 0) return {status: true, token: tokenBD};
                else return {status: false, message: "Esse token não é mais válido!"};

            }else return {status: false, message: "Esse token não existe!"};
        } catch (error) {
            console.log(error);
            return {status: false, message: error};
        }
    }
}

export default new PasswordToken();