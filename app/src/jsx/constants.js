export const TOKEN = {
  SITE: 'FinQuest.io',
  CODE: 'QUEST',
  NAME: 'FinQuest Token',
  RWDTXT: '0.3% per day',
  CHNID: process.env.REACT_APP_CHNID,
  NETID: process.env.REACT_APP_NETID,
  WEBLINK: process.env.REACT_APP_WEBLINK,
  ETHDEC: 18,
  DECIMAL: 18,
  DECSHOW: 2,
  BNBxTKN: 1000000,
  USDxTKN: 2000,
  TKNxBNB: 0.000001,
  TKNxUSD: 0.0005,
  RWDDIEM: 0.3, //reward per diem in pct
  RWDFRAC: 28800000, // 1/((perdiem * 0.01) /864000)
  //RWDFRAC: 1200000, //x24 prev value to get condensed 24hrs staking in an hr
  COOKIE: 'tknref',
  MINSTAKE: 10000,
};

// AppId: "EsUwEunefeYOtteRmjCBQSrAQq4JdHkYLYrbbd0x",
// ServerURL: "https://pb41yyg0kxg2.usemoralis.com:2053/server",
// ApiKey: "QKm1o2i3YDMcTULTrQxrgwv0mc2unWrVBdAJAcib4OhQ100IRVv9bXMCyfWp0VWn",

export const MORALIS = {
  AppId: 'fhut0KJi5PrBwhnFXQaYl5E5ftOg63TVOSGxCvk1',
  ServerURL: 'https://rhijcbpfulnc.usemoralis.com:2053/server',
  ApiKey: 'AWsdJpJq3IXTEHLMQuOzbBvafAV5q7M2nUPa2TI8',
  WBNB: process.env.REACT_APP_WBNB,
  BUSD: process.env.REACT_APP_BUSD,
  PANCAKE_ROUTER: process.env.REACT_APP_PCKROUTER,
  PANCAKE_FACTORY: process.env.REACT_APP_PCKFACTORY,
};
export let SALES = [
  {
    num: 1,
    name: 'Private Sale 1',
    rate: 0.0005,
    cap: 2000000000.0,
    active: false,
    sold: 0.0,
  },
  {
    num: 2,
    name: 'Private Sale 2',
    rate: 0.001,
    cap: 200000000.0,
    active: false,
    sold: 0.0,
  },
  {
    num: 3,
    name: 'IDO Sale 1',
    rate: 0.0015,
    cap: 200000000.0,
    active: false,
    sold: 0.0,
  },
  {
    num: 4,
    name: 'IDO Sale 2',
    rate: 0.002,
    cap: 200000000.0,
    active: false,
    sold: 0.0,
  },
  {
    num: 5,
    name: 'IDO Sale 3',
    rate: 0.0025,
    cap: 200000000.0,
    active: false,
    sold: 0.0,
  },
];
