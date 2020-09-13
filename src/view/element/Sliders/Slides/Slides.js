import React from 'react';
import { Typography, Grid, Button } from '@material-ui/core'
import Slider from "react-slick";
import {
    useHistory
} from 'react-router-dom'
import AlbumCart from '../../AlbumCart'
import config from '../../../../constants/config'
const IMG_URL= config.IMG_URL

export default function Slides({ title, items, allLink }) {
    const history = useHistory()
    const sliderConfig = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
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
                    arrows: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    arrows: false
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false
                }
            },
        ]
    }

    const convertIntoFormat = (itm) => {
        const newdata = {
            title: itm.details,
            id: itm.album_id,
            img: `${IMG_URL}/${itm?.image}`,
        }
        return newdata
    }


    return (
        <div className="album-slider">
            <Grid container spacing={3} style={{
                marginBottom: 10
            }} >
                <Grid item xs={8}>
                    <Typography variant="h6" align="left">
                        {title}
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="h6" align="right">
                        <Button color="inherit" onClick={() => {
                            history.push(allLink)
                         }}>
                            View All
                        </Button>
                    </Typography>
                </Grid>
            </Grid>
            <div className="album-slider__slider">
                <Slider {...sliderConfig} >
                    {
                        items.map((item, i) => <Item key={i} item={convertIntoFormat(item)} />)
                    }
                </Slider>
            </div>
        </div>
    )
}

function Item({ item }) {
    return (
        <div className="album-slider__item" >
            <AlbumCart albumDetails={item} />
        </div>
    )
}