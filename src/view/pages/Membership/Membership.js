import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardActions, CardContent, Divider, CardMedia, Button, Typography } from '@material-ui/core';
import config from '../../../constants/config'
import Layout from '../../element/Layout'
import { useHistory } from 'react-router-dom';
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
    const history = useHistory()
    useEffect(() => {
        const user_id = getUserData()?.user_id
        if (user_id) {
            getDaynamicPostData('getMembership', { user_id: user_id })
                .then(setGetMembership)
        } else {
            getDaynamicPostData('getMembership', {})
                .then(setGetMembership)
        }

        if(apiData && apiData?.message === "You have not sufficient coin for get this order"){
            history.push("/wallet")
        }

    }, [apiData]);
    const addMembership = () => {
        const { mem_id } = singleMembership
        const user_id = getUserData().user_id
        getDaynamicPostData('updateMembershipUsingCoin', { user_id: user_id, mem_id: mem_id })
            .then(setApiData)
            
        
    }
    const setDefault = () => {
        setSingleMembership({})
        setApiData({})
    }
    const currentMembershipInfo = getMembership?.current_membership_info
  
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
                        {apiData && <div>
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
                                        {
                                            currentMembershipInfo?.length > 0 && currentMembershipInfo[0].memberShipId === itm.mem_id ?
                                                <Button size="small" color="secondary">
                                                    Active ( Expire On {currentMembershipInfo[0].endDate} )
                                                  </Button>
                                                :
                                                <Button size="small" onClick={() => { setSingleMembership(itm) }} color="secondary">
                                                   { !currentMembershipInfo?.length > 0 && 'Get Membership'} 
                                                 </Button>
                                        }

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