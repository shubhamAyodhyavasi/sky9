import Grid from '@material-ui/core/Grid';
import React, { useEffect, useState } from 'react';
import { getDaynamicPostData } from '../../../services/services'
import Layout from '../../element/Layout'
import './Album.css'
import AlbumCart from '../../element/AlbumCart'
const IMG_URL="http://fantasymedia.in/sky9/"
function Album(catId) {
    const [albumList, setAlbumList] = useState([])
    const getData = async () => {
        const response = await getDaynamicPostData('getAlbumBySubCategoryId', { sub_cat_id: 7 })
        setAlbumList((response?.records && response?.records.length && response?.records) || [])
    }
    useEffect(()=> {
        getData()
    }, [catId]);
    console.log('albumList', { albumList })
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
                albumList.length > 0 &&
                <>
                    <div>

                    </div>

                    <div className="album-list-wrapper">
                        <Grid container spacing={3}>
                            {
                                albumList.map((item, key) => (
                                    <Grid key={key} item lg={3} md={4} sm={6} xs={12} >
                                        <AlbumCart albumDetails={convertIntoFormat(item)} />
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
