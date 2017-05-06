import axios from "axios";
import jquery from "jquery";

export const FETCH_SHOUT = "FETCH_SHOUT";


const ROOT_URL = "http://shoutrapi.herokuapp.com"

export function fetchShout(id) {
  const request = axios.get(`${ROOT_URL}/shouts/${id}`);
  // const request = jquery.ajax({
  //   url:`${ROOT_URL}/shouts/${id}`,
  //   type: "JSONP"
  // })
  return {
    type: FETCH_SHOUT,
    payload: request
  }
}