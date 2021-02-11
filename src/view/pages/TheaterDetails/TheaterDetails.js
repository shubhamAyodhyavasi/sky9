import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom'
import { getDaynamicPostData, getUserData } from '../../../services/services'
import Layout from '../../element/Layout'
import ReactPlayer from 'react-player/lazy'
import Skeleton from '@material-ui/lab/Skeleton';
import "./TheaterDetails.scss"
import config from '../../../constants/config'
import { Button, Snackbar, Grid } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import { Alert } from '@material-ui/lab';
const IMG_URL = config.IMG_URL

function TheaterDetails() {
    const [albumData, setAlbumData] = useState(false)
    const [userHaveAccess, setUserHaveAccess] = useState({})
    const [videoData, setVideoData] = useState(null)
    const [skeletonView, setSkeletonView] = useState(true)
    const [open, setOpen] = useState({ action: false, msg: '', type: false });
    const { id } = useParams()
    const history = useHistory()
    useEffect(() => {
        window.scrollTo(0, 1);
        getData(id)
    }, [id]);

    const getData = async (id) => {
        if (!id) return
        const response = await getDaynamicPostData('getSingleTheaterVideo', { video_id: id, user_id: getUserData().user_id })
        setAlbumData(false)
        setVideoData(response?.records)
        setSkeletonView(false)
        const isLogin = getUserData().user_id;
        if (isLogin) {
            const responseAccess = await getDaynamicPostData('isUserCanViewTicketVideo', { video_id: id, user_id: getUserData().user_id })
            setUserHaveAccess(responseAccess)
        } else {
            setUserHaveAccess({ status: false, loginErrorMessage: true, message: 'Please Login for continue.' })
        }

    }
    const getThisTicket = async () => {
        const response = await getDaynamicPostData('add_ticket_after_payment_success', {
            video_id: id,
            user_id: getUserData().user_id,
            order_ammount_type: '1',
            transaction_id: '',
            ammount: videoData?.price,
        })
        setOpen({ action: true, msg: response?.message, type: response?.status ? 'success' : '' });
        if (response?.status) {
            const responseAccess = await getDaynamicPostData('isUserCanViewTicketVideo', { video_id: id, user_id: getUserData().user_id })
            setUserHaveAccess(responseAccess)
        }

    }
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen({ action: false, msg: '', type: 'success' });
    };
    return (
        <Layout >
            {skeletonView &&
                <>
                    <Skeleton variant="rect" width="100%" height="85vh" />
                    <Skeleton variant="text" width="25%" style={{ marginTop: 20 }} />
                    <Skeleton variant="text" width="25%" style={{ marginTop: 20 }} />
                    <Skeleton variant="text" width="100%" style={{ marginTop: 40 }} />
                </>
            }
            {
                videoData && !skeletonView &&
                <>

                    {
                        !userHaveAccess.status && albumData ?
                            <div className="video-player-error-wrapper">
                                <h3>{userHaveAccess?.message}</h3>
                                {
                                    userHaveAccess?.loginErrorMessage ?
                                        <Button type="butotn" onClick={() => {
                                            history.push(`/login`)
                                        }} variant="outlined" color="default">
                                            Login
                            </Button>
                                        :
                                        <Button type="butotn" onClick={getThisTicket} variant="outlined" color="default">
                                            Buy Now
                            </Button>
                                }

                            </div>
                            :
                            <div className="theater-player-wrapper">

                                <ReactPlayer
                                    controls={true}
                                    playing
                                    width="100%"
                                    playIcon={<img width="10%" alt="play" src={`${IMG_URL}/uploads/play.png`} />}
                                    url={albumData ? `${IMG_URL}/${videoData?.video_link}` : `${IMG_URL}/${videoData?.trailer_url}`}
                                    light={`${IMG_URL}/${videoData?.image}`}
                                    config={{
                                        file: {
                                            attributes: {
                                                crossOrigin: 'true',
                                                controlsList: 'nodownload'
                                            },

                                            nodownload: true,

                                        }
                                    }}
                                />


                            </div>
                    }
                    <div className="theater-details-wrapper">
                        <div className="theater-details-title">
                            <div>
                                <h2>{videoData.title}</h2>
                                <h3>{videoData.subDetails}</h3>
                            </div>
                            <div>


                            </div>

                        </div>
                        <div className="theater-details-info">
                            <div className="theater-details-info-single">
                                <h4>Released On</h4>
                                <p>{videoData?.releasedOn}</p>
                            </div>
                            <div className="theater-details-info-single">
                                <h4>Video Length</h4>
                                <p>{videoData?.totalTime}</p>
                            </div>
                            <div className="theater-details-info-single">
                                <h4>Language</h4>
                                <p>{videoData?.language}</p>
                            </div>

                        </div>
                        <div className="theater-details-subDetails">
                            <p>{albumData.details}</p>
                        </div>
                        <div className="theater-details-more-video">
                            <h2>Trailers &amp; More</h2>
                            <div className="theater-details-more-video-wrapper">
                                <Grid container spacing={3}>

                                    <Grid item lg={2} md={3} sm={4} xs={6} >
                                        <div className="video-details-more-video-cart">
                                            <span onClick={() => { setAlbumData(true) }}>
                                                <img alt="" style={{ maxWidth: "100%" }} src={`${IMG_URL}/${videoData?.image}`} />
                                                <h3>{videoData?.title} (Movie)</h3>
                                            </span>
                                        </div>

                                    </Grid>
                                    <Grid item lg={2} md={3} sm={4} xs={6} >
                                        <div className="video-details-more-video-cart">
                                            <span onClick={() => { setAlbumData(false) }}>
                                                <img alt="" style={{ maxWidth: "100%" }} src={`${IMG_URL}/${videoData?.image}`} />
                                                <h3>{videoData?.title} (Trailer)</h3>
                                            </span>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>

                        </div>
                    </div>
                </>
            }

            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={open.action}
                autoHideDuration={6000}
                onClose={handleClose}
            >
                {
                    <Alert onClose={handleClose} severity={open.type ? "success" : "error"}>
                        {open.msg}
                    </Alert>
                }

            </Snackbar>
        </Layout>
    );
}
export default TheaterDetails
