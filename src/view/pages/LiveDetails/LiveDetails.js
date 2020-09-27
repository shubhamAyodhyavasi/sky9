import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { getDaynamicPostData } from '../../../services/services'
import Layout from '../../element/Layout'
import ReactPlayer from 'react-player/lazy'
import Skeleton from '@material-ui/lab/Skeleton';
import "./LiveDetails.scss"
import config from '../../../constants/config'

function LiveDetails() {
    const [liveData, setLiveData] = useState(null)
    const [skeletonView, setSkeletonView] = useState(true)
    const { id } = useParams()
    useEffect(() => {
        getData(id)
    }, [id]);

    const getData = async (id) => {
        if (!id) return
        const response = await getDaynamicPostData('getSingleLiveVideo', { live_id: id })
        console.log('xx',{response})
        setLiveData( response?.records)
        setTimeout(()=>{setSkeletonView(false)},2000)
        
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
                            // playIcon={<img width="10%" alt="play" src={`${IMG_URL}/uploads/play.png`} />}
                            url={`https://www.youtube.com/watch?v=${liveData?.yt_url}`}
                            // light={`${IMG_URL}/${liveData?.image}`}
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
                         <div className="live-details-subDetails">
                            <p>{liveData.details}</p>
                        </div>
                     </div>
                </>
            }

          
        </Layout>
    );
}
export default LiveDetails
