import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { ButtonBase,Icon, makeStyles, Typography, Grid,Link } from '@material-ui/core'
import AlbumCart from '../AlbumCart'

export default function Slides({ title }) {
    var items = [

        [
            {
                url: 'https://akamaividz2.zee5.com/image/upload/w_1337,h_536,c_scale,f_auto,q_auto/resources/0-0-214663/cover/1170x658withlogo_756173185.jpg',
                title: 'Breakfast',
                width: '40%',
            },
            {
                url: 'https://akamaividz2.zee5.com/image/upload/w_1337,h_536,c_scale,f_auto,q_auto/resources/0-0-214663/cover/1170x658withlogo_756173185.jpg',
                title: 'Burgers',
                width: '30%',
            },
            {
                url: 'https://akamaividz2.zee5.com/image/upload/w_1337,h_536,c_scale,f_auto,q_auto/resources/0-0-214663/cover/1170x658withlogo_756173185.jpg',
                title: 'Camera',
                width: '30%',
            },

        ],
        [
            {
                url: 'https://akamaividz2.zee5.com/image/upload/w_1337,h_536,c_scale,f_auto,q_auto/resources/0-0-214663/cover/1170x658withlogo_756173185.jpg',
                title: 'Breakfast',
                width: '40%',
            },
            {
                url: 'https://akamaividz2.zee5.com/image/upload/w_1337,h_536,c_scale,f_auto,q_auto/resources/0-0-214663/cover/1170x658withlogo_756173185.jpg',
                title: 'Burgers',
                width: '30%',
            },
            {
                url: 'https://akamaividz2.zee5.com/image/upload/w_1337,h_536,c_scale,f_auto,q_auto/resources/0-0-214663/cover/1170x658withlogo_756173185.jpg',
                title: 'Camera',
                width: '30%',
            },
        ]
    ]

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
                        <Link  onClick={()=>{}}>
                            View All
            </Link>

                    </Typography>
                </Grid>
            </Grid>


            <Carousel
                indicators={true}
                animation="slide"
                timeout={500}
                navButtonsAlwaysVisible={true}
            >
                {
                    items.map((item, i) => <Item key={i} item={item} />)
                }
            </Carousel>
        </>
    )
}

function Item({ item }) {
    const albumDetails={
        title:"title",
        id:"12",
        details:"lorem ipsum ",
        totalView:"10",
        img:"https://akamaividz2.zee5.com/image/upload/w_1337,h_536,c_scale,f_auto,q_auto/resources/0-0-214663/cover/1170x658withlogo_756173185.jpg"
      }
    return (
        <div>
            <AlbumCart albumDetails={albumDetails} />
            <AlbumCart albumDetails={albumDetails} />
            <AlbumCart albumDetails={albumDetails} />
        </div>   
    )
}