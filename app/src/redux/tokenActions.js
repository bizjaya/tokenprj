import apiService from '../services/ApiService';
import { URL } from '../services/API';

export function updAcct(data) {
  return (dispatch) => {
    dispatch({
      type: 'updAcct',
      payload: data,
    });
  };
}

export function updDetails(data) {
  return (dispatch) => {
    dispatch({
      type: 'updDetails',
      payload: data,
    });
  };
}

export function updContract(data) {
  return (dispatch) => {
    dispatch({
      type: 'updContract',
      payload: data,
    });
  };
}

export function updPcsCon(data) {
  return (dispatch) => {
    dispatch({
      type: 'updPcsCon',
      payload: data,
    });
  };
}

export function updSaleCon(data) {
  return (dispatch) => {
    dispatch({
      type: 'updSaleCon',
      payload: data,
    });
  };
}

export function updToken(data) {
  return (dispatch) => {
    dispatch({
      type: 'updToken',
      payload: data,
    });
  };
}

export function updSale(data) {
  return (dispatch) => {
    dispatch({
      type: 'updSale',
      payload: data,
    });
  };
}

export function delToken(data) {
  return (dispatch) => {
    dispatch({
      type: 'delToken',
      payload: null,
    });
  };
}

export function trigStake(data) {
  return (dispatch) =>
    apiService
      .create(URL.ACCT.STAKE, data, dispatch)
      .then((res) => {
        console.log(res);
        // dispatch(
        //   usrDetails({
        //     UsrId: res.data.usrId,
        //     RefId: res.data.refId,
        //     IsReg: true,
        //   })
        // );
      })
      .catch((error) => {
        alert(error.response.data.Message);
      });
}

export function trigUnstake(data) {
  return (dispatch) =>
    apiService
      .create(URL.ACCT.UNSTAKE, data, dispatch)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        alert(error.response.data.Message);
      });
}

export function trigClaim(data) {
  return (dispatch) =>
    apiService
      .create(URL.ACCT.CLAIM, data, dispatch)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        alert(error.response.data.Message);
      });
}
