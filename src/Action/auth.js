import * as authService from '../service/authservice';
import {LOGIN_SUCCESSFUL,INVALID_USER, LOGOUT} from '../reducer/auth';
 export const logauth=(credentials)=>{
return (dispatch)=>{
    authService.login(credentials)
    .then((response)=>{
      //  console.log(res.data);
        if(response.status===200){
       localStorage.setItem("token",response.data.token)
           dispatch({
               type:LOGIN_SUCCESSFUL,
              data:{token:response.data.token,role:"admin"}
         });
        }
      
    }).catch((error)=>{
       
        if(error.response){
           
            dispatch({
               type:INVALID_USER,
               data:{error_msg:error.response.data}
           })
        }
    })
}
}


export const logout=()=>{
    return (dispatch)=>{
        dispatch({
            type:LOGOUT
      });
      localStorage.removeItem("token")
    }
    }
    
