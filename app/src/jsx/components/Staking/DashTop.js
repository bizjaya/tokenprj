import Widget1 from "../kripton/Home/WidgetChart1";
import Widget2 from "../kripton/Home/WidgetChart2";
import Widget3 from "../kripton/Home/WidgetChart3";
import Widget4 from "../kripton/Home/WidgetChart4";

import { TOKEN } from "../../constants";
const DashTop = (props) => {
  // console.log(props);
  const { wallet, token, uncTKN } = props;

  return (
    <>
      <div className="col-xl-3 col-sm-6">
        <div className="card overflow-hidden">
          <div className="card-header align-items-start border-0 pb-0">
            <div className="mr-auto">
              <p className="mb-2 fs-17 text-warning">
                <i className="ti-wallet scale5 mr-2" aria-hidden="true" />
                <b>Your Balance</b>
              </p>
              <h2 className="text-black mb-0 font-w600">{wallet.Bal} BNB</h2>
            </div>
          </div>
          <div className="card-body p-0">
            {/* <canvas id="widgetChart" className="max-h80 mt-auto" /> */}
            <Widget1 />
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-sm-6">
        <div className="card overflow-hidden">
          <div className="card-header align-items-start border-0 pb-0">
            <div className="mr-auto">
              <p className="mb-2 fs-17 text-success">
                <i className="ti-server scale5 mr-2" aria-hidden="true" />
                <b>Your Balance</b>
              </p>
              <h2 className="text-black mb-0 font-w600">
                {token.TknBal} {TOKEN.CODE}
              </h2>
            </div>
            {/* <svg
              width={42}
              height={42}
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 0.00012207C9.4021 0.00012207 9.15527e-05 9.40213 9.15527e-05 21C9.15527e-05 32.5979 9.4021 41.9999 21 41.9999C32.5979 41.9999 41.9999 32.5979 41.9999 21C41.9871 9.40762 32.5924 0.0129395 21 0.00012207ZM26.9999 30.0001H22.5001V34.4999C22.5001 35.3285 21.8286 36 21 36C20.1714 36 19.4999 35.3285 19.4999 34.4999V30.0001H15.0001C14.1715 30.0006 13.4995 29.3295 13.4991 28.5009C13.4991 28.1599 13.6149 27.8289 13.8282 27.5625L23.8784 15.0001H15.0001C14.1715 15.0001 13.5 14.3286 13.5 13.5C13.5 12.6715 14.1715 11.9999 15.0001 11.9999H19.4999V7.50012C19.4999 6.67157 20.1714 6.00003 21 6.00003C21.8286 6.00003 22.5001 6.67203 22.5001 7.50012V11.9999H26.9999C27.8294 12.0013 28.5005 12.6747 28.4995 13.5037C28.4991 13.8429 28.3833 14.1725 28.1718 14.4375L18.1216 26.9999H26.9999C27.8285 26.9999 28.5 27.6719 28.5 28.5C28.5 29.3286 27.8285 30.0001 26.9999 30.0001Z"
                fill="#1ad27e"
              />
            </svg> */}
          </div>
          <div className="card-body p-0">
            {/* <canvas id="widgetChart3" className="max-h80 mt-auto" /> */}
            <Widget2 />
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-sm-6">
        <div className="card overflow-hidden">
          <div className="card-header align-items-start border-0 pb-0">
            <div className="mr-auto">
              <p className="mb-2 fs-17 text-info">
                <i className="ti-settings scale5 mr-2" aria-hidden="true" />
                <b>Staking</b>
              </p>
              <h2 className="text-black mb-0 font-w600">
                {token.StkAmt.toFixed(TOKEN.DECSHOW)} {TOKEN.CODE}
              </h2>
            </div>
            {/* <svg
              width={42}
              height={42}
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 0.00012207C9.4021 0.00012207 9.15527e-05 9.40213 9.15527e-05 21C9.15527e-05 32.5979 9.4021 41.9999 21 41.9999C32.5979 41.9999 41.9999 32.5979 41.9999 21C41.9871 9.40762 32.5924 0.0129395 21 0.00012207ZM12.3281 19.4999H18.328C19.1566 19.4999 19.8281 20.1715 19.8281 21C19.8281 21.8286 19.1566 22.5001 18.328 22.5001H12.3281C11.4996 22.5001 10.828 21.8286 10.828 21C10.828 20.1715 11.5 19.4999 12.3281 19.4999ZM31.0841 17.3658L29.28 26.392C28.8552 28.4872 27.0155 29.9951 24.8777 30.0001H12.3281C11.4996 30.0001 10.828 29.3286 10.828 28.5C10.828 27.6715 11.5 26.9999 12.3281 26.9999H24.8777C25.5868 26.9981 26.197 26.4982 26.338 25.8033L28.1425 16.7772C28.3027 15.9715 27.7799 15.1887 26.9747 15.0285C26.8791 15.0097 26.782 15.0001 26.685 15.0001H15.3283C14.4998 15.0001 13.8282 14.3286 13.8282 13.5C13.8282 12.6715 14.4998 11.9999 15.3283 11.9999H26.685C29.1633 12.0009 31.1715 14.01 31.1711 16.4883C31.1711 16.7827 31.1418 17.0765 31.0841 17.3658Z"
                fill="#3693FF"
              />
            </svg> */}
          </div>
          <div className="card-body p-0">
            {/* <canvas id="widgetChart2" className="max-h80 mt-auto" /> */}
            <Widget3 />
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-sm-6">
        <div className="card overflow-hidden">
          <div className="card-header align-items-start border-0 pb-0">
            <div className="mr-auto">
              <p className="mb-2 fs-17 text-secondary">
                <i className="ti-bar-chart scale5 mr-2" aria-hidden="true" />
                <b>Rewards</b>
              </p>
              <h2 className="text-black mb-0 font-w600">
                {uncTKN.toFixed(TOKEN.DECSHOW)} {TOKEN.CODE}
              </h2>
            </div>
          </div>
          <div className="card-body p-0">
            {/* <canvas id="widgetChart4" className="max-h80 mt-auto" /> */}
            <Widget4 />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashTop;
