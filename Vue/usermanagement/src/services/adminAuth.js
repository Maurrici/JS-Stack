import axios from "axios";

export default async (to, from, next) => {
    let token = localStorage.getItem('token');
    
    if(token != undefined){
      try {
        let req = {
          headers: {
            Authorization: "Bearer " + token
          }
        }

        await axios.get('http://localhost:3000/validate', req);
        next();
      } catch (error) {
        next("/login");
      }
    }else{
      next("/login");
    }
  }