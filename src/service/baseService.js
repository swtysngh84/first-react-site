import axios from 'axios';
export const baseUrl="http://localhost:3000";
const baseService=axios.create({
    baseURL:baseUrl
});
export default baseService;