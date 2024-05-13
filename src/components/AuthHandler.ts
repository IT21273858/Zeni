import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";


const validateToken = ()=>{
  const to = useNavigate();
  const TOKEN = localStorage.getItem("TOKEN");

  if(TOKEN)
    {
      const currentTime =Date.now()/1000;
      const {exp} =jwtDecode(TOKEN!);
      if((exp!)<currentTime)
      {
        localStorage.removeItem("TOKEN");
        localStorage.removeItem("ROLE");
        localStorage.removeItem("ID");
        localStorage.removeItem("NAME");
        to('/login')
        return false;
      }
      else
        return true;

    }
    else
    return false
 

}

const getTokenData = () => {

    if(validateToken()){
      
      const TOKEN = localStorage.getItem("TOKEN");
      const ROLE = localStorage.getItem("ROLE");
      const ID = localStorage.getItem("ID");
      const NAME = localStorage.getItem("NAME");

      return {
        TOKEN: TOKEN,
        ROLE: ROLE,
        ID: ID,
        NAME: NAME,
      };
    }
    else{
      return {
        TOKEN: null,
        ROLE:  null,
        ID: null,
        NAME:  null,
      };

    }

    
    
  
  };

export default getTokenData;