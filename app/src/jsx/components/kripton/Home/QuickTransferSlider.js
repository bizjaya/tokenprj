import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import contacts1 from "../../../../images/contacts/1.jpg";
import contacts2 from "../../../../images/contacts/2.jpg";
import contacts3 from "../../../../images/contacts/3.jpg";
import contacts4 from "../../../../images/contacts/4.jpg";
import contacts5 from "../../../../images/contacts/5.jpg";

const QuickTransferSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1601,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div className="items">
        <div className="text-center">
          <img className="mb-3 rounded" src={contacts1} alt="" />
          <h5 className="text-black mb-0">Samuel</h5>
          <span className="fs-12">@sam224</span>
        </div>
      </div>
      <div className="items">
        <div className="text-center">
          <img className="mb-3 rounded" src={contacts2} alt="" />
          <h5 className="text-black mb-0">Cindy</h5>
          <span className="fs-12">@cindyss</span>
        </div>
      </div>
      <div className="items">
        <div className="text-center">
          <img className="mb-3 rounded" src={contacts3} alt="" />
          <h5 className="text-black mb-0">David</h5>
          <span className="fs-12">@davidxc</span>
        </div>
      </div>
      <div className="items">
        <div className="text-center">
          <img className="mb-3 rounded" src={contacts4} alt="" />
          <h5 className="text-black mb-0">Martha</h5>
          <span className="fs-12">@marthaa</span>
        </div>
      </div>
      <div className="items">
        <div className="text-center">
          <img className="mb-3 rounded" src={contacts5} alt="" />
          <h5 className="text-black mb-0">Olivia</h5>
          <span className="fs-12">@oliv62</span>
        </div>
      </div>

      <div className="items">
        <div className="text-center">
          <img className="mb-3 rounded" src={contacts1} alt="" />
          <h5 className="text-black mb-0">Samuel</h5>
          <span className="fs-12">@sam224</span>
        </div>
      </div>
      <div className="items">
        <div className="text-center">
          <img className="mb-3 rounded" src={contacts2} alt="" />
          <h5 className="text-black mb-0">Cindy</h5>
          <span className="fs-12">@cindyss</span>
        </div>
      </div>
      <div className="items">
        <div className="text-center">
          <img className="mb-3 rounded" src={contacts3} alt="" />
          <h5 className="text-black mb-0">David</h5>
          <span className="fs-12">@davidxc</span>
        </div>
      </div>
      <div className="items">
        <div className="text-center">
          <img className="mb-3 rounded" src={contacts4} alt="" />
          <h5 className="text-black mb-0">Martha</h5>
          <span className="fs-12">@marthaa</span>
        </div>
      </div>
      <div className="items">
        <div className="text-center">
          <img className="mb-3 rounded" src={contacts5} alt="" />
          <h5 className="text-black mb-0">Olivia</h5>
          <span className="fs-12">@oliv62</span>
        </div>
      </div>
    </Slider>
  );
};

export default QuickTransferSlider;
