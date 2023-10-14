import {Axios} from "./Axios";
import * as API from "./URLS";

export const LoginAPI = ()=> Axios.get(API.Login)