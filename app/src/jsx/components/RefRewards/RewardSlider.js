import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import pat1 from "../../../images/pattern/pat1.png";
import pat2 from "../../../images/pattern/pat2.png";
import pat3 from "../../../images/pattern/pat3.png";
import pat4 from "../../../images/pattern/pat4.png";
import pat5 from "../../../images/pattern/pat5.png";
import pat6 from "../../../images/pattern/pat6.png";
import pat7 from "../../../images/pattern/pat7.png";
import pat8 from "../../../images/pattern/pat8.png";
import pat9 from "../../../images/pattern/pat9.png";
import pat10 from "../../../images/pattern/pat10.png";

import cardLogo from "../../../images/card-logo.png";
import cardLogo2 from "../../../images/card-logo2.png";

const style1 = {
  backgroundColor: `#de70ff`,
  opacity: 0.75,
  justifyContent: "center",
  "&::before": {
    content: `'kk'`,
    color: "red",
    backgroundImage: `url(${pat1})`,
    opacity: `0.75`,
    backgroundColor: `#de70ff`,
  },
};

const RewardSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const ref = useSelector((state) => state.referral.Comm);

  const [TotalStaked, setTotalStaked] = useState(0);
  const [TotalAccrued, setTotalAccrued] = useState(0);
  const [TotalMembers, setTotalMembers] = useState(0);
  const [TotalQualified, setTotalQualified] = useState(0);
  const [TotalPaid, setTotalPaid] = useState(0);
  const [TotalUnclaimed, setTotalUnclaimed] = useState(0);
  const [TotalFlushed, setTotalFlushed] = useState(0);

  useEffect(async () => {
    let totStk = ref.TS_1 + ref.TS_2 + ref.TS_3 + ref.TS_4 + ref.TS_5;
    let totAcc = ref.TA_1 + ref.TA_2 + ref.TA_3 + ref.TA_4 + ref.TA_5;
    let totMem = ref.TM_1 + ref.TM_2 + ref.TM_3 + ref.TM_4 + ref.TM_5;
    let totQua = ref.TQ_1 + ref.TQ_2 + ref.TQ_3 + ref.TQ_4 + ref.TQ_5;
    let totPai = ref.TP_1 + ref.TP_2 + ref.TP_3 + ref.TP_4 + ref.TP_5;
    let totUnc = ref.TU_1 + ref.TU_2 + ref.TU_3 + ref.TU_4 + ref.TU_5;
    let totFlu = totAcc - totQua;

    setTotalStaked(totStk);
    setTotalAccrued(totAcc);
    setTotalMembers(totMem);
    setTotalQualified(totQua);
    setTotalPaid(totPai);
    setTotalUnclaimed(totUnc);
    setTotalFlushed(totFlu);
  }, [ref.Addr]);
  return (
    <div className="sywalletsslider-coustom">
      <Slider {...settings}>
        <div className="items">
          <div
            className="wallet-card bg-primary"
            style={{
              background: `url(${pat1}) repeat`,
              //   backgroundColor: `#de70ff`,
            }}
          >
            <div className="head">
              <h3 className="text-white">
                Total
                <br />
                Staked
              </h3>
              <span>{TotalStaked}</span>
            </div>
            {/* <div className="wallet-footer">
              <span className="fs-14">444 221 224 ***</span>
              <img src={cardLogo} alt="" />
            </div> */}
          </div>
        </div>
        <div className="items">
          <div
            className="wallet-card bg-primary"
            style={{
              background: `url(${pat8}) repeat`,
              //   backgroundColor: `#de70ff`,
            }}
          >
            <div className="head">
              <h3 className="text-white">
                Total
                <br />
                Members
              </h3>
              <span>{TotalMembers}</span>
            </div>
          </div>
        </div>
        <div className="items">
          <div
            className="wallet-card bg-primary"
            style={{
              background: `url(${pat10}) repeat`,
              //   backgroundColor: `#de70ff`,
            }}
          >
            <div className="head">
              <h3 className="text-white">
                Qualified
                <br />
                Rewards
              </h3>
              <span>{TotalQualified}</span>
            </div>
          </div>
        </div>
        <div className="items">
          <div
            className="wallet-card bg-primary"
            style={{
              background: `url(${pat4}) repeat`,
              //   backgroundColor: `#de70ff`,
            }}
          >
            <div className="head">
              <h3 className="text-white">
                Claimed
                <br />
                Rewards
              </h3>
              <span>{TotalPaid}</span>
            </div>
          </div>
        </div>
        <div className="items">
          <div
            className="wallet-card bg-primary"
            style={{
              background: `url(${pat5}) repeat`,
              //   backgroundColor: `#de70ff`,
            }}
          >
            <div className="head">
              <h3 className="text-white">
                Unclaimed
                <br />
                Rewards
              </h3>
              <span>{TotalUnclaimed}</span>
            </div>
          </div>
        </div>
        <div className="items">
          <div
            className="wallet-card bg-primary"
            style={{
              background: `url(${pat7}) repeat`,
              //   backgroundColor: `#de70ff`,
            }}
          >
            <div className="head">
              <h3 className="text-white">
                Missed
                <br />
                Rewards
              </h3>
              <span>{TotalFlushed}</span>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default RewardSlider;
