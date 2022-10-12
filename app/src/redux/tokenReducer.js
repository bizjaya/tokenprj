const initialState = {
  Id: 1,
  Acct: '',
  TknBal: 0,
  StkAmt: 0,
  StkTime: 0,
  StkUnc: 0,
  RwdAmt: 0,
  Contract: null,
  SaleContract: null,
  TokenAddr: null,
  TokenAbi: null,
  SaleAddr: null,
  SaleAbi: null,
  PcsContract: null,
};
const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'updAcct':
      return {
        ...state,
        Acct: action.payload,
      };
    case 'updDetails':
      return {
        ...state,
        ...action.payload,
      };
    case 'updContract':
      return {
        ...state,
        Contract: action.payload,
      };
    case 'updSaleCon':
      return {
        ...state,
        SaleContract: action.payload,
      };
    case 'updPcsCon':
      return {
        ...state,
        PcsContract: action.payload,
      };

    case 'updToken':
      return {
        ...state,
        TokenAddr: action.payload.TokenAddr,
        TokenAbi: action.payload.TokenAbi,
      };
    case 'updSale':
      return {
        ...state,
        SaleAddr: action.payload.SaleAddr,
        SaleAbi: action.payload.SaleAbi,
      };
    case 'delToken':
      return {
        ...initialState,
      };
    default: {
      return state;
    }
  }
};

export default tokenReducer;
