import { Axios } from "./Axios";
import * as API from "./URLS";

export const LoginAPI = (data) => Axios.post(API.Login, data)
export const GetFeed = (currentPages) => Axios.get(`${API.GetFeed}?page=${currentPages}`)
export const CreeateFeed = (data)=> Axios.post(API.CreeateFeed,data)