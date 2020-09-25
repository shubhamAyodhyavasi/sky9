import Grid from '@material-ui/core/Grid';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDaynamicPostData } from '../../../services/services'
import Layout from '../../element/Layout'
import Skeleton from '@material-ui/lab/Skeleton';
import './Album.css'
import AlbumCart from '../../element/AlbumCart'
import config from '../../../constants/config'
const IMG_URL = config.IMG_URL
function Album() {
    const [albumList, setAlbumList] = useState([])
    const [skeletonView, setSkeletonView] = useState(true)
    const {
        id
    } = useParams()
    const getData = async (id) => {
        const response = await getDaynamicPostData('getAlbumBySubCategoryId', { sub_cat_id: id ? id : 7 })
        console.log({response})
        setAlbumList((response?.records && response?.records.length && response?.records) || [])
        setSkeletonView(false)
    }
    useEffect(() => {
        getData(id)
    }, [id]);
    const convertIntoFormat = (itm) => {
        const newdata = {
            title: itm.details,
            id: itm.album_id,
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

                    <div className="album-list-wrapper">
                        <Grid container spacing={3}>
                            {
                                albumList.map((item, key) => (
                                    <Grid key={key} item lg={2} md={3} sm={3} xs={3} >
                                        <AlbumCart isSmall={item?.cat_dt?.cat_view_type === "1"} albumDetails={convertIntoFormat(item)} />
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
export default Album
