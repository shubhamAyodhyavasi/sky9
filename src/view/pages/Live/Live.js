import Grid from '@material-ui/core/Grid';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDaynamicPostData } from '../../../services/services'
import Layout from '../../element/Layout'
import Skeleton from '@material-ui/lab/Skeleton';
import './Live.scss'
import LiveCart from './LiveCart'
import config from '../../../constants/config'
const IMG_URL = config.IMG_URL
function Live() {
    const [albumList, setAlbumList] = useState([])
    const [skeletonView, setSkeletonView] = useState(true)
    const {
        id
    } = useParams()
    const getData = async (id) => {
        const response = await getDaynamicPostData('getLiveVideo', {})
       setAlbumList((response?.records && response?.records.length && response?.records) || [])
         setSkeletonView(false)
    }
    useEffect(() => {
        getData(id)
    }, [id]);
    const convertIntoFormat = (itm) => {
        console.log('xx',{itm})
        const newdata = {
            title: itm.title,
            id: itm.live_id,
            img: `${IMG_URL}/${itm?.image}`,
        }
        return newdata
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
                    <div>

                    </div>

                    <div className="live-list-wrapper">
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
                                              
                                                <Grid key={key2} item lg={2} md={3} sm={3} xs={3} >
                                                    <LiveCart isSmall={true} albumDetails={convertIntoFormat(item2)} />
                                                    
                                                </Grid>
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
