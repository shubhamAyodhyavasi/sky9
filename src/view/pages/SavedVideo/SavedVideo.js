import Grid from '@material-ui/core/Grid';
import React, { useEffect, useState } from 'react';
import { getDaynamicPostData,getUserData } from '../../../services/services'
import Layout from '../../element/Layout'
import Skeleton from '@material-ui/lab/Skeleton';
import { useHistory} from 'react-router-dom'
import './SavedVideo.scss'
import AlbumCart from '../../element/AlbumCart'
import config from '../../../constants/config'
const IMG_URL = config.IMG_URL
function SavedVideo() {
    const [albumList, setAlbumList] = useState([])
    const [skeletonView, setSkeletonView] = useState(true)
    const history = useHistory();
    const getData = async () => {
        if(!getUserData()){
            history.push(`/login`)
        }
        const user=getUserData()
        const response = await getDaynamicPostData('getFavList', { user_id: user.user_id })
        setAlbumList((response?.records && response?.records.length && response?.records) || [])
        setSkeletonView(false)
    }
    useEffect(() => {
        getData()
    }, []);
    const convertIntoFormat = (itm) => {
        
        const newdata = {
            title: itm[0]?.title,
            id: itm[0]?.album_id,
            img: `${IMG_URL}/${itm[0]?.image}`,
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

                    <div className="album-list-wrapper">
                        <Grid container spacing={3}>
                            {
                                albumList.map((item, key) => (
                                    <Grid key={key} item lg={2} md={3} sm={4} xs={4} >
                                        <AlbumCart isSmall={true} albumDetails={convertIntoFormat(item)} />
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </div>
                </>
            }


        </Layout>
    );
}
export default SavedVideo
