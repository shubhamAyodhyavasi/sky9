import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
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
    const [albumData, setAlbumData] = useState(null)
    const [videoData, setVideoData] = useState(null)
    const [skeletonView, setSkeletonView] = useState(true)
    const [open, setOpen] = useState({ action: false, msg: '', type: false });
    const { id } = useParams()
    useEffect(() => {
        getData(id)
    }, [id]);

    const getData = async (id) => {
        if (!id) return
        const response = await getDaynamicPostData('getSingleTheaterVideo', { video_id: id })
        setAlbumData(response?.records )
        setVideoData(response?.records )
        setSkeletonView(false)
    }
   
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen({ action: false, msg: '', type: 'success' });
    };
    console.log('xx',{albumData})
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
                albumData && !skeletonView &&
                <>


                    <div className="theater-player-wrapper">
                        <ReactPlayer
                            controls={true}
                            playing
                            width="100%"
                            playIcon={<img width="10%" alt="play" src={`${IMG_URL}/uploads/play.png`} />}
                            url={[
                                `${IMG_URL}/${videoData?.trailer_url}`,
                                `${IMG_URL}/${videoData?.video_link}` 
                              ]}
                            light={`${IMG_URL}/${videoData?.image}`}
                            config={{
                                file: {
                                    attributes: {
                                        crossOrigin: 'true',
                                        controlsList: 'nodownload'
                                    },

                                    nodownload: true,
                                    // tracks: [
                                    //     { kind: 'subtitles', src: 'https://thepaciellogroup.github.io/AT-browser-tests/video/subtitles-en.vtt', srcLang: 'en', default: true },
                                    //     { kind: 'subtitles', src: 'https://thepaciellogroup.github.io/AT-browser-tests/video/subtitles-en.vtt', srcLang: 'hi' }
                                    // ]
                                }
                            }}
                        />
                    </div>
                    <div className="theater-details-wrapper">
                        <div className="theater-details-title">
                            <div>
                                <h2>{albumData.title}</h2>
                                <h3>{albumData.sub_cat_dt?.title}</h3>
                            </div>
                            <div>
                                

                            </div>

                        </div>
                        {/* <div className="theater-details-info">
                            <div className="theater-details-info-single">
                                <h4>Released On</h4>
                                <p>{videoData?.album_dt?.release_date}</p>
                            </div>
                            <div className="theater-details-info-single">
                                <h4>Video Length</h4>
                                <p>{videoData?.album_dt?.video_duration}</p>
                            </div>
                            <div className="theater-details-info-single">
                                <h4>Language</h4>
                                <p>{videoData?.album_dt?.langauge}</p>
                            </div>

                        </div> */}
                        <div className="theater-details-subDetails">
                            <p>{albumData.details}</p>
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
