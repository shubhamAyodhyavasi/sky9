import React from 'react'
import Slider from "react-slick";
import BannerCard from '../../BannerCard/BannerCard';

function BannerSlider({items}) {

  const sliderConfig = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  }
  return (
    <div className="banner-slider">
      <Slider {...sliderConfig} >
        {
          items.map((item, key) => <BannerCard key={key} {...item} />)
        }
      </Slider>
    </div>
  )
}

BannerSlider.defaultProps = {
  items: []
}

export default BannerSlider;

