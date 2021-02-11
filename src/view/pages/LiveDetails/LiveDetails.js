import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { getDaynamicPostData } from '../../../services/services'
import { useHistory} from 'react-router-dom'
import Layout from '../../element/Layout'
import ReactPlayer from 'react-player/lazy'
import Skeleton from '@material-ui/lab/Skeleton';
import {  Grid } from '@material-ui/core';
import "./LiveDetails.scss"
import config from '../../../constants/config'
import LiveCart from '../Live/LiveCart';
const IMG_URL = config.IMG_URL
function LiveDetails() {
    const history = useHistory();
    const [liveData, setLiveData] = useState(null)
    const [relatedData, setRelatedData] = useState([])
    const [skeletonView, setSkeletonView] = useState(true)
    const { id } = useParams()
    
    useEffect(() => {
        window.scrollTo(0, 0)
        getData(id)
    }, [id]);

    const getData = async (id) => {
        if (!id) return
        const response = await getDaynamicPostData('getSingleLiveVideo', { live_id: id })
        setLiveData( response?.records)
        setRelatedData(response?.relatedLiveChanel)
        setTimeout(()=>{setSkeletonView(false)},2000)
        
    }
   
    const convertIntoFormat = (itm) => {
        
        const newdata = {
            ...itm,
            title: itm.title,
            id: itm.live_id,
            img: `${IMG_URL}/${itm?.image}`,
        }
        return newdata
    }
    return (
        <Layout >
            {skeletonView &&
                <>
                    <Skeleton variant="rect" width="100%" height="60vh" />
                    <Skeleton variant="text" width="25%" style={{ marginTop: 20 }} />
                    <Skeleton variant="text" width="100%" style={{ marginTop: 40 }} />
                </>
            }
            {
                liveData && !skeletonView &&
                <>


                    <div className="live-player-wrapper">
                        
                        <ReactPlayer
                            controls={true}
                            playing
                            width="100%"
                            url={`https://www.youtube.com/watch?v=${liveData?.yt_url}`}
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
                    <div className="live-details-wrapper">
                        <div className="live-details-title">
                            <div>
                                <h2>{liveData.title}</h2>
                            </div>
                            

                        </div>
                        <div className="theater-details-info">
                            
                           <div className="theater-details-info-single">
                                <h4>Language</h4>
                                <p>{liveData?.language}</p>
                            </div>

                        </div>
                         <div className="live-details-subDetails">
                            <p>{liveData.details}</p>
                        </div>
                        
                        <div className="video-details-more-video">
                            <h2>Similar Channels</h2>
                            <div className="video-details-more-video-wrapper">
                                <div className="live-list-single-list">
                                    {
                                        relatedData?.map((data, index) => <LiveCart isSmall={true} albumDetails={convertIntoFormat(data)} />
                                            // <Grid key={index} item lg={2} md={3} sm={4} xs={6} >
                                            //     <div key={index} className="video-details-more-video-cart">
                                            //         <span onClick={() => { history.push(`/live/${data.live_id}`) }}>
                                            //             <img alt="" style={{ maxWidth: "100%" }} src={`${IMG_URL}/${data?.image}`} />
                                            //             <h3>{data?.title}</h3>
                                            //         </span>
                                            //     </div>
                                            // </Grid>

                                        )
                                    }
                                </div>
                                {/* <Grid container spacing={3}>

                                    {
                                        relatedData?.map((data, index) =>
                                            <Grid key={index} item lg={2} md={3} sm={4} xs={6} >
                                                <div key={index} className="video-details-more-video-cart">
                                                    <span onClick={() => { history.push(`/live/${data.live_id}`) }}>
                                                        <img alt="" style={{ maxWidth: "100%" }} src={`${IMG_URL}/${data?.image}`} />
                                                        <h3>{data?.title}</h3>
                                                    </span>
                                                </div>
                                            </Grid>

                                        )
                                    }
                                </Grid> */}

                            </div>

                        </div>
                     </div>
                </>
            }

          
        </Layout>
    );
}
export default LiveDetails
