import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { getDaynamicPostData } from '../../../services/services'
import Layout from '../../element/Layout'
import ReactPlayer from 'react-player/lazy'
import Skeleton from '@material-ui/lab/Skeleton';
import "./VideoDetails.css"
import config from '../../../constants/config'
const IMG_URL = config.IMG_URL

function VideoDetails() {
    const [albumData, setAlbumData] = useState([])
    const [videoData, setVideoData] = useState([])
    const [skeletonView, setSkeletonView] = useState(true)
    const { id } = useParams()
    useEffect(() => {
        getData(id)
    }, [id]);

    const getData = async (id) => {
        if (!id) return
        const response = await getDaynamicPostData('getVideoByalbumeId', { album_id: id })
        setAlbumData(response?.records && response?.records.length && response?.records)
        setVideoData(response?.records && response?.records.length && response?.records[0])
        setSkeletonView(false)
    }

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


                    <div className="video-player-wrapper">
                        <ReactPlayer
                            controls={true}
                            playing
                            width="100%"
                            height="85vh"
                            playIcon={<img width="10%" alt="play" src={`${IMG_URL}/uploads/play.png`} />}

                            url={videoData?.video_link ? `${IMG_URL}/${videoData?.video_link}` : "https://thepaciellogroup.github.io/AT-browser-tests/video/ElephantsDream.mp4"}
                            // url="https://thepaciellogroup.github.io/AT-browser-tests/video/ElephantsDream.mp4"
                            light={`${IMG_URL}/${videoData?.image}`}
                            config={{
                                file: {
                                    attributes: {
                                        crossOrigin: 'true',
                                        controlsList: 'nodownload'
                                    },

                                    nodownload: true,
                                    tracks: [
                                        { kind: 'subtitles', src: 'https://thepaciellogroup.github.io/AT-browser-tests/video/subtitles-en.vtt', srcLang: 'en', default: true },
                                        { kind: 'subtitles', src: 'https://thepaciellogroup.github.io/AT-browser-tests/video/subtitles-en.vtt', srcLang: 'hi' }
                                    ]
                                }
                            }}
                        />
                    </div>
                    <div className="video-details-wrapper">
                        <div className="video-details-title">
                            <h2>{albumData[0].title}</h2>
                            <h3>{albumData[0].sub_cat_dt?.title}</h3>
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
                            <h2>Trailers & More</h2>
                            <div className="video-details-more-video-wrapper">
                                {
                                    albumData?.map((data, index) =>
                                        <div key={index} className="video-details-more-video-cart">
                                            <span onClick={() => { setVideoData(data) }}>
                                                <img alt="" src={`${IMG_URL}/${data?.image}`} />
                                                <h3>{data?.title}</h3>
                                            </span>
                                        </div>
                                    )
                                }

                            </div>

                        </div>
                    </div>
                </>
            }


        </Layout>
    );
}
export default VideoDetails
