import { TOKEN } from "../../src/jsx/constants";

const initialState = {
  Comm: {
    Addr: "",
    UsrId: "",
    Level: "",
    Staking: "",
    StkAmt: "",
    RefUnc: 0,
    PoolRwd: 0,
    PoolUnc: 0,
    PoolPaid: 0,
    TS_1: 0,
    TM_1: 0,
    TA_1: 0,
    TQ_1: 0,
    TU_1: 0,
    TP_1: 0,

    TS_2: 0,
    TM_2: 0,
    TA_2: 0,
    TQ_2: 0,
    TU_2: 0,
    TP_2: 0,

    TS_3: 0,
    TM_3: 0,
    TA_3: 0,
    TQ_3: 0,
    TU_3: 0,
    TP_3: 0,

    TS_4: 0,
    TM_4: 0,
    TA_4: 0,
    TQ_4: 0,
    TU_4: 0,
    TP_4: 0,

    TS_5: 0,
    TM_5: 0,
    TA_5: 0,
    TQ_5: 0,
    TU_5: 0,
    TP_5: 0,

    TS_6: 0,
    TM_6: 0,
    TA_6: 0,
    TQ_6: 0,
    TU_6: 0,
    TP_6: 0,
  },
  Refs: [],
  HistRwds: [],
  HistStks: [],
  paging: {
    PageNo: 0,
    PageCount: 0,
    PageSize: 0,
    ResCount: 0,
    SortBy: "Id",
    SortDir: "desc",
    SearchTxt: "",
    SearchBy: "",
    Type: "",
  },
};
const referralReducer = (state = initialState, action) => {
  //   console.log(action);
  switch (action.type) {
    case "newComm":
      console.log(initialState);
      return {
        ...state,
        ...initialState,
      };
    case "updComm":
      return {
        ...state,
        Comm: { ...action.payload },
      };
    case "updRefs":
      console.log(action);
      return {
        ...state,
        Refs: action.payload.Data,
        paging: { ...action.payload.Paging },
      };
    case "updHistRwds":
      console.log(action);
      return {
        ...state,
        HistRwds: action.payload.Data,
        paging: { ...action.payload.Paging },
      };
    case "updHistStks":
      console.log(action);
      return {
        ...state,
        HistStks: action.payload.Data,
        paging: { ...action.payload.Paging },
      };
    default: {
      return state;
    }
  }
};

export default referralReducer;
