import React from 'react';
import { Typography, Grid, Link } from '@material-ui/core'
import Slider from "react-slick";
import {
    useHistory
} from 'react-router-dom'
import AlbumCart from '../../AlbumCart'


export default function Slides({ title, items, allLink }) {
    // const itemWidth = 300;
    // const itemToShow = Math.floor((window.innerWidth - 50) / itemWidth)
    const history = useHistory()
    const sliderConfig = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    }


    return (
        <div className="album-slider">
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Typography variant="h6" align="left">
                        {title}
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h6" align="right">
                        <Link color="inherit" onClick={() => {
                            history.push(allLink)
                         }}>
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
        </div>
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