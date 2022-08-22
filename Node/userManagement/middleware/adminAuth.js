import jwt from "jsonwebtoken";
var JWTsecret = "MMSEBMMMSEBBMMMS";

export default function(req, res, next){
    const authToken = req.headers['authorization'];

    if(authToken != undefined){
        let token = authToken.split(' ')[1];
        
        try {
            let decode = jwt.verify(token, JWTsecret);
            if(decode.role == 0){
                next();
            }else{
                res.status(403);
                res.json({message: "Você não tem permissão para a operação"});
            }
            
        } catch (error) {
            res.status(403);
            res.json({message: "Token inválido!"});
        }
    }else{
        res.status(403);
        res.json({message: "Token inválido!"});
    }
}