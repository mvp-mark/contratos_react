import axios from "axios";

const api = axios.create({
    baseURL: "http://vistorapp.detran.local:3333/"
});

export default api;