import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
const instance = axios.create({
    baseURL:"https://bloodbankingmini.herokuapp.com"
});

export default instance;