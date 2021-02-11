import React from 'react'
import Slider from "react-slick";
import BannerCard from '../../BannerCard/BannerCard';
import { useHistory } from 'react-router-dom';
function BannerSlider({items}) {

  const sliderConfig = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  }
  const history = useHistory()
  const onClickHandler = (id) => {
    id &&  history.push(`/video/${id}`)
  }
  return (
    <div className="banner-slider">
      <Slider {...sliderConfig} >
        {
          items.map((item, key) => <BannerCard key={key} {...item} onCLick={()=>{onClickHandler(item?.album_id)}} />)
        }
      </Slider>
    </div>
  )
}

BannerSlider.defaultProps = {
  items: []
}

export default BannerSlider;

