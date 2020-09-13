import React, { useEffect, useState } from 'react';
import { getDaynamicPostData } from '../../../services/services'
import Layout from '../../element/Layout'
import ReactPlayer from 'react-player/lazy'

import "./VideoDetails.css"
const IMG_URL = "http://fantasymedia.in/sky9/"

function VideoDetails({ album_id }) {
    const [albumData, setAlbumData] = useState([])
    const [videoData, setVideoData] = useState([])
    const getData = async () => {
        const response = await getDaynamicPostData('getVideoByalbumeId', { album_id: 82 })
        setAlbumData((response?.records && response?.records.length && response?.records) || [])
        setVideoData((response?.records && response?.records.length && response?.records[0]) || [])
    }
    useEffect(() => {
        getData()
    }, [album_id]);



    return (
        <Layout >
            {
                albumData.length > 0 &&
                <>
                    <div className="video-player-wrapper">
                        <ReactPlayer
                            controls={true}
                            playing
                            width="100%"
                            playIcon={<img width="10%" alt="play" src={`${IMG_URL}/uploads/play.png`} />}

                            url={`${IMG_URL}/${videoData?.video_link}`}
                            //url="https://thepaciellogroup.github.io/AT-browser-tests/video/ElephantsDream.mp4"
                            light={`${IMG_URL}/${videoData?.image}`}
                            config={{
                                file: {
                                    attributes: {
                                        crossOrigin: 'true',
                                        controlsList: 'nodownload'
                                    },

                                    nodownload: true,
                                    // tracks: [
                                    // {kind: 'subtitles', src: 'https://thepaciellogroup.github.io/AT-browser-tests/video/subtitles-en.vtt', srcLang: 'en', default: true},
                                    // {kind: 'subtitles', src: 'https://thepaciellogroup.github.io/AT-browser-tests/video/subtitles-en.vtt', srcLang: 'hi'}
                                    // ]
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
                                <p>4 April 2020</p>
                            </div>
                            <div className="video-details-info-single">
                                <h4>Language</h4>
                                <p>Hindi</p>
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
