import Grid from '@material-ui/core/Grid';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDaynamicPostData } from '../../../services/services'
import Layout from '../../element/Layout'
import Skeleton from '@material-ui/lab/Skeleton';
import './Theater.scss'
import LiveCart from './LiveCart'
import Slides from './Sliders/Slides'
import config from '../../../constants/config'
const IMG_URL = config.IMG_URL
function Theater() {
    const [albumList, setAlbumList] = useState([])
    const [skeletonView, setSkeletonView] = useState(true)
    const {
        id
    } = useParams()
    const getItems = (itemsArr = []) => {
        if(itemsArr.length < 6){
          switch (itemsArr.length) {
            case 5:
            case 4:
            case 3:
              return [...itemsArr, ...itemsArr]
            case 2:
            case 1:
              return [...itemsArr, ...itemsArr, ...itemsArr, ...itemsArr, ...itemsArr, ...itemsArr]
            default:
              return [...itemsArr, ...itemsArr]
          }
        }
        return itemsArr
      }
    const getData = async (id) => {
        const response = await getDaynamicPostData('getTheaterVideo', {})
       setAlbumList((response?.records && response?.records.length && response?.records) || [])
         setSkeletonView(false)
    }
    useEffect(() => {
        getData(id)
    }, [id]);
    const convertIntoFormat = (itm) => {
        const newdata = {
            title: itm.title,
            id: itm.video_id,
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
                    {
                                albumList.map((item, key) => (
                                    <Slides key={key}  items={getItems(item?.theater)} isSmall={true} allLink={`/theater-single/${item?.cat?.cat_id}`} title={item.cat.title} />
                                ))
                            }
                      
                    </div>

                    {/* <div className="theater-list-wrapper">
                        <Grid container spacing={3}>
                            {
                                albumList.map((item, key) => (
                                    <Grid key={key} item lg={2} md={3} sm={3} xs={3} >
                                        <LiveCart isSmall={true} albumDetails={convertIntoFormat(item?.liveVideo)} />
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </div> */}
                </>
            }


        </Layout>
    );
}
export default Theater
