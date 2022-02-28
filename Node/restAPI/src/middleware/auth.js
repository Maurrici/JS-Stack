import jwt from "jsonwebtoken";
import JWTsecret from "./JWTsecret.js";

function auth(req, res, next){
    const authToken = req.headers["authorization"];
    if(authToken != undefined){
        const token = authToken.split(" ")[1];

        jwt.verify(token, JWTsecret, (err, data) => {
            if(err){
                res.statusCode = 401;
                res.json({err: "Token inválido!"});
            }else{
                req.loggedUser = {
                    id: data.id,
                    email: data.email
                }

                next();
            }
        });
    }else{
        res.statusCode = 401;
        res.json({err: "Token não existente!"});
    }
}

export default auth;