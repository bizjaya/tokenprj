import { combineReducers } from "redux";
import walletReducer from "./walletReducer";
import tokenReducer from "./tokenReducer";
import referralReducer from "./referralReducer";
import statzReducer from "./statzReducer";

const reducers = combineReducers({
  wallet: walletReducer,
  token: tokenReducer,
  referral: referralReducer,
  statz: statzReducer,
});

export default reducers;
