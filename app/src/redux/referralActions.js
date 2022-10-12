import apiService from "../services/ApiService";
import { URL } from "../services/API";

export function updComm(data) {
  return (dispatch) => {
    dispatch({
      type: "updComm",
      payload: data,
    });
  };
}

export function updRefs(data) {
  return (dispatch) => {
    dispatch({
      type: "updRefs",
      payload: data,
    });
  };
}
export function updHistRwds(data) {
  return (dispatch) => {
    dispatch({
      type: "updHistRwds",
      payload: data,
    });
  };
}
export function updHistStks(data) {
  return (dispatch) => {
    dispatch({
      type: "updHistStks",
      payload: data,
    });
  };
}

export function getComm(data) {
  return (dispatch) =>
    apiService
      .get(URL.USER.COMM, data, dispatch)
      .then((res) => {
        console.log(res);
        if (res == "no_acct") {
          // callback(true);
        } else {
          dispatch(
            updComm({
              ...res,
            })
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
}

export function getRefs(data) {
  return (dispatch) =>
    apiService
      .get(URL.USER.REFS, data, dispatch)
      .then((res) => {
        if (res == "no_acct") {
          // callback(true);
        } else {
          dispatch(updRefs(res));
        }
      })
      .catch((err) => {
        console.log(err);
      });
}

export function getHistRwds(data) {
  return (dispatch) =>
    apiService
      .get(URL.USER.HISTRWDS, data, dispatch)
      .then((res) => {
        if (res == "no_acct") {
          // callback(true);
        } else {
          dispatch(updHistRwds(res));
        }
      })
      .catch((err) => {
        console.log(err);
      });
}

export function getHistStks(data) {
  return (dispatch) =>
    apiService
      .get(URL.USER.HISTSTKS, data, dispatch)
      .then((res) => {
        if (res == "no_acct") {
          // callback(true);
        } else {
          dispatch(updHistStks(res));
        }
      })
      .catch((err) => {
        console.log(err);
      });
}

export function claimRef(data) {
  return (dispatch) =>
    apiService
      .create(URL.ACCT.CLREF, data, dispatch)
      .then((res) => {
        return 1;
      })
      .catch((error) => {
        return error.response.data.Message;
      });
}

export function claimPool(data) {
  return (dispatch) =>
    apiService
      .create(URL.ACCT.CLPOOL, data, dispatch)
      .then((res) => {
        return 1;
      })
      .catch((error) => {
        return error.response.data.Message;
      });
}

// export function claimRef(data) {
//   return new Promise((resolve, reject) => {
//     apiService
//       .create(URL.ACCT.CLREF, data)
//       .then((res) => {
//         resolve(res);
//       })
//       .catch((error) => {
//         reject(error.response.data.Message);
//       });
//   });
// }
