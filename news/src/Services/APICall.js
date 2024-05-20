import { Axios } from "./Axios";
import * as API from "./URLS";

export const LoginAPI = (data) => Axios.post(API.Login, data)
export const GetFeed = () => Axios.get(API.GetFeed)