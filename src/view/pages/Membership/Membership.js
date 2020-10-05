import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardActions, CardContent, Divider, CardMedia, Button, Typography } from '@material-ui/core';
import config from '../../../constants/config'
import Layout from '../../element/Layout'
import { getDaynamicPostData, getUserData } from '../../../services/services'
import "./Membership.scss"
const IMG_URL = config.IMG_URL


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        minWidth: 300,
        margin: 10,

    },
    media: {
        height: 140,
    },
});
export default function Membership() {
    const classes = useStyles();
    const [getMembership, setGetMembership] = useState([])
    const [singleMembership, setSingleMembership] = useState({})
    const [apiData, setApiData] = useState({})
    useEffect(() => {
        getDaynamicPostData('getMembership', {})
            .then(setGetMembership)
    }, []);
    const addMembership = () => {
        const { mem_id } = singleMembership
        const user_id = getUserData().user_id
        getDaynamicPostData('updateMembershipUsingCoin', { user_id: user_id, mem_id: mem_id })
            .then(setApiData)
       
    }
    const setDefault = () =>{
        setSingleMembership({})
        setApiData({})
    }
    return (
        <Layout >
            {
                singleMembership?.title ? <div className="membership-gird-confirmation-wrapper">
                    {
                        apiData && <div>
                            <Typography gutterBottom variant="body2" component="p" color="secondary" alignt="center">
                                {apiData.message}
                                </Typography>
                            <Divider />
                            
                        </div>
                    }
                   
                    <h3>Are you sure for get "{singleMembership?.title}" membership </h3>
                    <h3>Price : {singleMembership?.price} Rs.</h3>
                    <h3>Days : {singleMembership?.limitDays} </h3>
                    <Divider />
                    {
                            apiData?.status ? 
                            <div className="membership-gird-buttons">
                        
                             <Button type="button" variant="outlined" onClick={() => { setDefault() }} color="danger" color="secondary">
                                Cancel
                            </Button>
                        </div>
                            :
                            <div className="membership-gird-buttons">
                        
                            <Button type="button" variant="outlined" onClick={() => { addMembership() }} color="default">
                                Order
                            </Button>
                            <Button type="button" variant="outlined" onClick={() => { setDefault() }} color="danger" color="secondary">
                                Cancel 
                            </Button>
                        </div>
                        }
                   
                    <Divider />
                </div>
                    :
                    <div className="membership-gird-wrapper">
                    {    apiData && <div>
                            <Typography gutterBottom variant="body2" component="p" color="secondary" alignt="center">
                                {apiData.message}
                                </Typography>
                            <Divider />
                            
                        </div>
            }
                        {
                            getMembership?.records?.map((itm, index) =>
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
                                            <Typography gutterBottom variant="body2" component="p" alignt="align">
                                                {itm?.price} Rs.
                                </Typography>
                                            <Divider />
                                            <Typography gutterBottom variant="body2" component="p" alignt="align">
                                                {itm?.limitDays} Days
                                </Typography>
                                            <Divider />
                                            <Divider />
                                            <Typography variant="body2" color="textSecondary" alignt="align" component="p">
                                                {itm?.details}
                                            </Typography>

                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Divider />
                                        <Button size="small" onClick={() => { setSingleMembership(itm) }} color="secondary">
                                            Get Membership
                                 </Button>
                                        <Button size="small" color="primary">

                                        </Button>
                                    </CardActions>
                                </Card>
                            )
                        }

                    </div>

            }


        </Layout>

    );
}