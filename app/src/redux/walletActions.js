import apiService from "../services/ApiService";
import { URL } from "../services/API";

export function chgWallet(data) {
  return (dispatch) => {
    dispatch({
      type: "chgWallet",
      payload: data,
    });
  };
}
export function delWallet(data) {
  return (dispatch) => {
    dispatch({
      type: "delWallet",
      payload: data,
    });
  };
}

export function usrDetails(data) {
  return (dispatch) => {
    dispatch({
      type: "usrDetails",
      payload: data,
    });
  };
}

export function getUsrDetails(data, callback) {
  console.log(data);
  return (dispatch) =>
    apiService
      .get(URL.USER.GET, data, dispatch)
      .then((res) => {
        console.log(res);
        if (res == "no_acct") {
          callback(true);
        } else {
          dispatch(
            usrDetails({
              UsrId: res.UsrId,
              RefId: res.RefId,
              RefUnc: res.RefUnc,
              Level: res.Level,
              IsReg: true,
            })
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
}

export function regUser(data, callback) {
  return (dispatch) =>
    apiService
      .create(URL.USER.REG, data, dispatch)
      .then((res) => {
        console.log(res);
        callback(false);
        dispatch(
          usrDetails({
            UsrId: res.data.UsrId,
            RefId: res.data.RefId,
            IsReg: true,
          })
        );
      })
      .catch((error) => {
        alert(error.response.data.Message);
      });
}

export function getComm(data) {
  console.log(data);
  return (dispatch) =>
    apiService
      .get(URL.USER.COMM, data, dispatch)
      .then((res) => {
        console.log(res);
        if (res == "no_acct") {
          // callback(true);
        } else {
          dispatch(
            usrDetails({
              UsrId: res.UsrId,
              RefId: res.RefId,
              IsReg: true,
            })
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
}
