import React from 'react';
import { Typography, Grid, Link } from '@material-ui/core'
import Slider from "react-slick";
import AlbumCart from '../../AlbumCart'


export default function Slides({ title }) {
    // const itemWidth = 300;
    // const itemToShow = Math.floor((window.innerWidth - 50) / itemWidth)
    const sliderConfig = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2  
    }

    const items = new Array(10).fill(
        {
            img: 'https://akamaividz2.zee5.com/image/upload/w_1337,h_536,c_scale,f_auto,q_auto/resources/0-0-214663/cover/1170x658withlogo_756173185.jpg',
            title: 'Camera',
            width: '30%',
        })

    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Typography variant="h6" align="left">
                        {title}
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h6" align="right">
                        <Link onClick={() => { }}>
                            View All
                        </Link>
                    </Typography>
                </Grid>
            </Grid>

            <Slider {...sliderConfig} >
                {
                    items.map((item, i) => <Item key={i} item={item} />)
                }
            </Slider>
        </>
    )
}

function Item({ item }) {
    return (
        <div style={{
            padding: '0 15px'
        }} >
            <AlbumCart albumDetails={item} />
        </div>
    )
}