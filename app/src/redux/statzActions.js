import apiService from "../services/ApiService";
import { URL } from "../services/API";

export function updStatz(data) {
  return (dispatch) => {
    dispatch({
      type: "updStatz",
      payload: data,
    });
  };
}

export function updSaleCon(data) {
  return (dispatch) => {
    dispatch({
      type: "updSaleCon",
      payload: data,
    });
  };
}

export function updDetails(data) {
  return (dispatch) => {
    dispatch({
      type: "updDetails",
      payload: data,
    });
  };
}
