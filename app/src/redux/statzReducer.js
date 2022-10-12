import { TOKEN } from "../../src/jsx/constants";

const initialState = {
  Stat: new Array(5).fill().map((u) => ({
    num: 0,
    name: "",
    rate: 0,
    cap: 0,
    active: false,
    sold: 0,
    lim: 0,
  })),
  SaleContract: null,
  StakerBal: 0,
  RewarderBal: 0,
  FeeAddrBal: 0,
  StkDisabled: false,
  ClmDisabled: false,
};
const statzReducer = (state = initialState, action) => {
  //   console.log(action);
  switch (action.type) {
    case "updSaleCon":
      return {
        ...state,
        SaleContract: action.payload,
      };
    case "updStatz":
      return {
        ...state,
        Stat: action.payload,
        //  paging: { ...action.payload.Paging },
      };
    case "updDetails":
      return {
        ...state,
        ...action.payload,
      };
    default: {
      return state;
    }
  }
};

export default statzReducer;
