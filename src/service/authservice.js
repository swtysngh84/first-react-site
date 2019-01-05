import baseService from './baseService';
 export function login(credential){
    return baseService.post('/login',credential);
}

//export default login;