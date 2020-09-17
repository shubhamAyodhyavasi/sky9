import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardActions, CardContent,Divider, CardMedia, Button, Typography } from '@material-ui/core';
import config from '../../../constants/config'
import Layout from '../../element/Layout'
import { getDaynamicPostData } from '../../../services/services'
import "./Membership.scss"
const IMG_URL = config.IMG_URL


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        minWidth:300,
        margin:10,
        
    },
    media: {
        height: 140,
    },
});
export default function Membership() {
    const classes = useStyles();
    const [getMembership, setGetMembership] = useState([])
    useEffect(() => {
        getDaynamicPostData('getMembership', {})
            .then(setGetMembership)
    }, []);
    return (
        <Layout >
            <div className="membership-gird-wrapper">
            {
                getMembership?.records?.map((itm,index) =>
                    <Card className={classes.root} key={index}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={`${IMG_URL}/${itm?.image}`}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" alignt="align" component="h2">
                                    {itm?.title}
                                </Typography>
                                <Divider />
                                <Typography gutterBottom variant="h5" component="h4" alignt="align">
                                    {itm?.price} Rs.
                                </Typography>
                                <Divider />
                                <Typography variant="body2" color="textSecondary" alignt="align" component="p">
                                    {itm?.details}
                                </Typography>
                                
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                        <Divider />
                            <Button size="small" color="secondary">
                                Get Membership
            </Button>
                            <Button size="small" color="primary">

                            </Button>
                        </CardActions>
                    </Card>
                )
            }

            </div>
           
        </Layout>

    );
}