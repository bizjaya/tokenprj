import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import pattern1 from "../../../../images/pattern/pattern1.png";
import pattern2 from "../../../../images/pattern/pattern2.png";
import pattern3 from "../../../../images/pattern/pattern3.png";
import pattern4 from "../../../../images/pattern/pattern4.png";
import cardLogo from "../../../../images/card-logo.png";
import cardLogo2 from "../../../../images/card-logo2.png";

const MyWalletsSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
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
  return (
    <div className="sywalletsslider-coustom">
      <Slider {...settings}>
        <div className="items">
          <div
            className="wallet-card bg-secondary"
            style={{ backgroundImage: `url(${pattern1})` }}
          >
            <div className="head">
              <p className="fs-14 text-white mb-0 op6 font-w100">
                Total Staked
              </p>
              <span>$45.500,12</span>
            </div>
            <div className="wallet-footer">
              <span className="fs-14">444 221 224 ***</span>
              <img src={cardLogo} alt="" />
            </div>
          </div>
        </div>
        <div className="items">
          <div
            className="wallet-card bg-success"
            style={{ backgroundImage: `url(${pattern2})` }}
          >
            <div className="head">
              <p className="fs-14 text-white mb-0 op6 font-w100">
                Total Members
              </p>
              <span>$250,5</span>
            </div>
            <div className="wallet-footer">
              <span className="fs-14">444 221 224 ***</span>
              <img src={cardLogo2} alt="" />
            </div>
          </div>
        </div>
        <div className="items">
          <div
            className="wallet-card bg-primary"
            style={{ backgroundImage: `url(${pattern3})` }}
          >
            <div className="head">
              <p className="fs-14 text-white mb-0 op6 font-w100">
                Total Qualified
              </p>
              <span>$45.500,12</span>
            </div>
            <div className="wallet-footer">
              <span className="fs-14">444 221 224 ***</span>
              <img src={cardLogo} alt="" />
            </div>
          </div>
        </div>
        <div className="items">
          <div
            className="wallet-card bg-info"
            style={{ backgroundImage: `url(${pattern4})` }}
          >
            <div className="head">
              <p className="fs-14 text-white mb-0 op6 font-w100">Total Paid</p>
              <span>$250,5</span>
            </div>
            <div className="wallet-footer">
              <span className="fs-14">444 221 224 ***</span>
              <img src={cardLogo2} alt="" />
            </div>
          </div>
        </div>
        <div className="items">
          <div
            className="wallet-card bg-secondary"
            style={{ backgroundImage: `url(${pattern1})` }}
          >
            <div className="head">
              <p className="fs-14 text-white mb-0 op6 font-w100">
                Total Unclaimed
              </p>
              <span>$45.500,12</span>
            </div>
            <div className="wallet-footer">
              <span className="fs-14">444 221 224 ***</span>
              <img src={cardLogo} alt="" />
            </div>
          </div>
        </div>
        <div className="items">
          <div
            className="wallet-card bg-success"
            style={{ backgroundImage: `url(${pattern2})` }}
          >
            <div className="head">
              <p className="fs-14 text-white mb-0 op6 font-w100">
                Total Flushed
              </p>
              <span>$250,5</span>
            </div>
            <div className="wallet-footer">
              <span className="fs-14">444 221 224 ***</span>
              <img src={cardLogo2} alt="" />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default MyWalletsSlider;
