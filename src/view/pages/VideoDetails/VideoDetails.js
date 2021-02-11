import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom'
import { getDaynamicPostData, getUserData } from '../../../services/services'
import Layout from '../../element/Layout'
import ReactPlayer from 'react-player/lazy'
import Skeleton from '@material-ui/lab/Skeleton';
import { useHistory } from 'react-router-dom'
import "./VideoDetails.css"
import config from '../../../constants/config'
import { Button, Snackbar, Grid } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import { Alert } from '@material-ui/lab';
const IMG_URL = config.IMG_URL

function VideoDetails() {
    const mainVideoref = useRef(null)
    const history = useHistory();
    const [albumData, setAlbumData] = useState([])
    const [membershipView, setMembershipView] = useState({})
    const [videoData, setVideoData] = useState([])
    const [playing, setPlaying] = useState(false)
    const [showAds, setShowAds] = useState(false)
    const [skeletonView, setSkeletonView] = useState(true)
    const [open, setOpen] = useState({ action: false, msg: '', type: false });
    const { id } = useParams()
    useEffect(() => {
        window.scrollTo(0, 1);
        getData(id)
    }, [id]);

    const getData = async (id) => {
        if (!id) return
        const userData = getUserData().user_id
        let param = {
            album_id: id
        }
        if (userData) {
            param = {
                album_id: id,
                user_id: userData
            }

        }
        const response = await getDaynamicPostData('getVideoByalbumeId', param)
        adsHandler(response?.records && response?.records.length && response?.records[0])
        setAlbumData(response?.records && response?.records.length && response?.records)
        if (userData) {
            setMembershipView(response)
        }
        setSkeletonView(false)

    }
    const addVideoInFavList = async (albumData) => {
        const userData = getUserData()
        const formData = {
            user_id: userData.user_id,
            album_id: albumData.album_id
        }
        const response = await getDaynamicPostData('add_fav_video', formData)
        setOpen({ action: true, msg: response?.message, type: response?.status })

    }
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen({ action: false, msg: '', type: 'success' });
    };
    const showVideo = () => {

        if (videoData?.canLoginUserView == 1) {
            return getUserData();
        }
        return true
    }

    const adsHandler = (record) => {
        const advertise_time = record?.album_dt?.advertise_time
        if (advertise_time == 0) {
            // play advartise then video autoplay
            // check ads video availablity
            record.video_add.length > 0 && setShowAds(true)

        }
        setVideoData(record)

    }
    const addCoinAfterVideoEnd = async () => {
        if (getUserData()) {
            const video_id = videoData?.video_id
            const user_id = getUserData().user_id
            const response = await getDaynamicPostData('add_coin_after_video_view', { video_id, user_id })
            setOpen({ action: true, msg: response?.message, type: response?.status ? 'success' : '' });
        }

    }
    const playMainVideoOnFinishAds = () => {
        setShowAds(false)
        setPlaying(true)
    }
        const stopMainVideoAndPlayAds = (e) => {
            const advertise_time = videoData?.album_dt?.advertise_time
            if (advertise_time > 0 &&  parseInt(e.playedSeconds) == advertise_time ) {
                setPlaying(false)
                setShowAds(true)
            }
       }
    const isPrimeVideo = () => {


        const isActive = albumData[0].album_dt.membership_id ? true : false
        if (isActive) {
            console.log(albumData)
            if (membershipView?.isMembershipActive) {
                return true
            } else {
                return false
            }
            // code for checkmembership active
            //membershipInfo
            //isMembershipActive
            //albumData.isMembershipActive
        }
        return true
    }
    const mainVideoClasses = showAds ? 'video-player-wrapper display-hide' : 'video-player-wrapper display-show'
    const adsVideoClasses = showAds ? 'video-ads-wrapper display-show' : 'video-ads-wrapper display-hide'
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
                albumData.length > 0 &&
                <>

                    {
                        showVideo() ?
                            <div className={mainVideoClasses}>

                                {
                                    isPrimeVideo() ?
                                        <ReactPlayer

                                            ref={mainVideoref}
                                            controls={true}
                                            playing={playing}
                                            width="100%"
                                            onPlay={() => {
                                                setPlaying(true)
                                            }}
                                            playIcon={<img width="10%" alt="play" src={`${IMG_URL}/uploads/play.png`} />}
                                            onEnded={addCoinAfterVideoEnd}
                                            url={videoData?.video_link ? `${IMG_URL}/${videoData?.video_link}` : "https://thepaciellogroup.github.io/AT-browser-tests/video/ElephantsDream.mp4"}
                                            light={`${IMG_URL}/${videoData?.image}`}
                                            onProgress={(e) => { stopMainVideoAndPlayAds(e) }}
                                            config={{
                                                file: {
                                                    attributes: {
                                                        crossOrigin: 'true',
                                                        controlsList: 'nodownload'
                                                    },

                                                    nodownload: true,
                                                    tracks: [
                                                        { kind: 'subtitles', src: `${IMG_URL}/${videoData?.subTitleEnglish}`, srcLang: 'english', default: true },
                                                        { kind: 'subtitles', src: `${IMG_URL}/${videoData?.subTitleHindi}`, srcLang: 'hindi' }
                                                    ]
                                                }
                                            }}
                                        />
                                        :
                                        <div className="video-player-error-wrapper">
                                            <h3>Subscribe to continue enjoying uninterrupted video and personalised experience.</h3>
                                            {membershipView?.membershipInfo?.length > 0 && <h3>Your subscription expired at ({membershipView.membershipInfo[0].endDate }).</h3>}
                                            <Button type="butotn" onClick={() => { history.push(`/membership`) }} variant="outlined" color="default">
                                                Subscription
                                            </Button>
                                        </div>
                                }


                            </div>
                            :
                            <div className="video-player-error-wrapper">
                                <h3>Login to continue enjoying uninterrupted video and personalised experience.</h3>
                                <Button type="butotn" onClick={() => { history.push(`/login`) }} variant="outlined" color="default">
                                    Login
                        </Button>
                            </div>
                    }
                    {
                        showAds &&
                        <div className={adsVideoClasses}>
                            <ReactPlayer
                                controls={false}
                                playing={true}
                                width="100%"
                                onEnded={playMainVideoOnFinishAds}
                                url={videoData?.video_add[0] ? `${IMG_URL}/${videoData?.video_add[0]?.image}` : "https://thepaciellogroup.github.io/AT-browser-tests/video/ElephantsDream.mp4"}
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

                    <div className="video-details-wrapper">
                        <div className="video-details-title">
                            <div>
                                <h2>{albumData[0].title}</h2>
                                <h3>{albumData[0].sub_cat_dt?.title}</h3>
                                <Button onClick={() => { setPlaying(!playing) }} >play push</Button>
                            </div>
                            <div>
                                {
                                    getUserData() && <Button
                                        color="default"
                                        variant="outlined"
                                        startIcon={<SaveIcon />}
                                        onClick={() => { addVideoInFavList(albumData[0]) }}
                                    >
                                        Save
                               </Button>
                                }

                            </div>

                        </div>
                        <div className="video-details-info">
                            <div className="video-details-info-single">
                                <h4>Released On</h4>
                                <p>{videoData?.album_dt?.release_date}</p>
                            </div>
                            <div className="video-details-info-single">
                                <h4>Video Length</h4>
                                <p>{videoData?.album_dt?.video_duration}</p>
                            </div>
                            <div className="video-details-info-single">
                                <h4>Language</h4>
                                <p>{videoData?.album_dt?.langauge}</p>
                            </div>

                        </div>
                        <div className="video-details-subDetails">
                            <p>{albumData[0].details}</p>
                        </div>
                        <div className="video-details-more-video">
                            <h2>Trailers &amp; More</h2>
                            <div className="video-details-more-video-wrapper">
                                <Grid container spacing={3}>

                                    {
                                        albumData?.map((data, index) =>
                                            <Grid key={index} item lg={2} md={3} sm={4} xs={6} >
                                                <div key={index} className="video-details-more-video-cart">
                                                    <span onClick={() => { setVideoData(data); window.scrollTo(0, 1);}}>
                                                        <img alt="" style={{ maxWidth: "100%" }} src={`${IMG_URL}/${data?.image}`} />
                                                        <h3>{data?.title}</h3>
                                                    </span>
                                                </div>
                                            </Grid>

                                        )
                                    }
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
export default VideoDetails
