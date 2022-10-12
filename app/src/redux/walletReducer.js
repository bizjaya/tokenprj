import { TOKEN } from "../../src/jsx/constants";

const initialState = {
  Id: 1,
  Acct: "",
  ChnId: TOKEN.CHNID,
  NetId: TOKEN.NETID,
  Web3: null,
  Bal: 0,
  Level: 0,
  Valid: true,
  IsReg: false,
  UsrId: "",
  RefUnc: 0,
  PoolUnc: 0,
  IsChg: false,
};
const walletReducer = (state = initialState, action) => {
  //   console.log(action);
  switch (action.type) {
    case "chgWallet":
      return {
        ...state,
        ...action.payload,
      };
    case "delWallet":
      return {
        ...initialState,
      };
    case "usrDetails":
      return {
        ...state,
        ...action.payload,
      };
    default: {
      return state;
    }
  }
};

export default walletReducer;
