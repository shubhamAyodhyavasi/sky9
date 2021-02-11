import Grid from '@material-ui/core/Grid';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDaynamicPostData } from '../../../services/services'
import Layout from '../../element/Layout'
import ReactPlayer from 'react-player/lazy'
import Skeleton from '@material-ui/lab/Skeleton';
import './Live.scss'
import LiveCart from './LiveCart'
import config from '../../../constants/config'
const IMG_URL = config.IMG_URL
function Live() {
    const [albumList, setAlbumList] = useState([])
    const [LiveList, setLiveList] = useState([])
    const [playLiveSelectedVideo, setPlayLiveSelectedVideo] = useState(null)
    const [skeletonView, setSkeletonView] = useState(true)
    const {
        id
    } = useParams()
    const getData = async (id) => {
        const response = await getDaynamicPostData('getLiveVideo', {})
        setAlbumList((response?.records && response?.records.length && response?.records) || [])
        setLiveList((response?.records && response?.liveSection.length && response?.liveSection[0]) || [])
        setSkeletonView(false)
    }
    useEffect(() => {
        getData(id)
    }, [id]);
    const convertIntoFormat = (itm) => {
        const newdata = {
            title: itm.title,
            id: itm.live_id,
            img: `${IMG_URL}/${itm?.image}`,
            yt_url: itm?.yt_url,
        }
        return newdata
    }

    const onSelectLiveInfo = (itm) => {
        console.log('itm',itm)
        setPlayLiveSelectedVideo(itm)
        window.scrollTo(0, 1);
    }
    return (
        <Layout >
            {
                skeletonView &&
                <>
                    <Skeleton variant="rect" width="100%" height="20vh" style={{ marginTop: 20 }} />
                    <Skeleton variant="rect" width="100%" height="20vh" style={{ marginTop: 20 }} />
                    <Skeleton variant="rect" width="100%" height="20vh" style={{ marginTop: 20 }} />
                    <Skeleton variant="rect" width="100%" height="20vh" style={{ marginTop: 20 }} />
                    <Skeleton variant="rect" width="100%" height="20vh" style={{ marginTop: 20 }} />
                </>
            }

            {
                albumList.length > 0 &&
                <>
                    {
                        !playLiveSelectedVideo && LiveList.active === 'on' &&
                        <div>
                            {
                                LiveList.videoType === 'Vimeo' &&
                                <div className="live-player-wrapper">

                                    <ReactPlayer
                                        controls={false}
                                        playing
                                        width="100%"
                                        playsinline={true}
                                        byline={true}
                                        url={`https://vimeo.com/${LiveList?.yt_url}`}
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
                            {
                                LiveList.videoType === 'Youtube' &&
                                <div className="live-player-wrapper">

                                    <ReactPlayer
                                        controls={false}
                                        playing
                                        width="100%"
                                        url={`https://www.youtube.com/watch?v=${LiveList?.videoUrl}`}
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
                            {
                                LiveList.videoType === 'Iframe' &&
                                <div className="live-player-wrapper">
                                    <iframe src={LiveList?.videoUrl} width="100%" height="100%" frameborder="0" scrolling="no" allow="autoplay" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>
                                </div>
                            }
                            {
                                LiveList.videoType === 'Dacast' &&
                                <div className="live-player-wrapper">
                                    <iframe src={LiveList?.videoUrl} width="100%" height="100%" frameborder="0" scrolling="no" allow="autoplay" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>
                                </div>
                            }

                        </div>

                    }

                    {
                        playLiveSelectedVideo && <div className="live-player-wrapper">

                            <ReactPlayer
                                controls={false}
                                playing
                                width="100%"
                                url={`https://www.youtube.com/watch?v=${playLiveSelectedVideo?.yt_url}`}
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





                    <div className="live-list-wrapper" style={{ marginTop: '50px' }}>
                        <Grid container spacing={3}>
                            {
                                albumList?.map((item, key) => (
                                    <div key={key} className="live-list-single-wrapper">
                                        <div className="live-list-single-title">
                                            <h3>{item?.cat?.title}</h3>
                                        </div>
                                        <div className="live-list-single-list">
                                            {
                                                item?.live?.map((item2, key2) => (

                                                    <LiveCart onSelectLiveInfo={onSelectLiveInfo} isSmall={true} albumDetails={convertIntoFormat(item2)} />

                                                ))
                                            }
                                        </div>


                                    </div>

                                ))
                            }
                        </Grid>
                    </div>
                </>
            }


        </Layout>
    );
}
export default Live
