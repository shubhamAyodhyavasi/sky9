import React from 'react'
import { Paper, Button } from '@material-ui/core'
import Carousel from 'react-material-ui-carousel'

function BannerSlider({items, ...rest}) {
  return (
    <div>
      <Carousel {...rest}>
        {
          items.map((item, i) => <BannerSlide key={i} item={item} />)
        }
      </Carousel>
    </div>
  )
}

const BannerSlide = (props) => {
  return (
    <Paper style={{
      height: 400,
      padding: 50,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      backgroundColor: 'lightseagreen',
      backgroundImage: `url${props.item.image}`,
      textAlign: 'center'
    }} >
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>
    </Paper>
  )
}
export default BannerSlider
