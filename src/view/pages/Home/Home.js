import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import { getDaynamicPostData } from '../../../services/services'
import Layout from '../../element/Layout'
import Slides from '../../element/Sliders/Slides/Slides'
import { BannerSlider } from '../../element/Sliders'
import Skeleton from '@material-ui/lab/Skeleton';
import { config } from '../../../constants';

function Home() {
  const [homePageData, setHomePageData] = useState({})
  const {
    id
  } = useParams()
  useEffect(() => {
      getDaynamicPostData('getHomePageDataById', { cat_id: id ? id : config.CATEGORY_ID_LIST.home })
      .then(setHomePageData)
  }, [id]);
  
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
  return (
    <Layout >
      {
        homePageData && <>
          <BannerSlider items={homePageData?.bannerRecord} />
          {
            homePageData?.records?.map((itm, index) =>
              <Slides key={index} itm={itm} items={getItems(itm?.album)} isSmall={itm?.cat?.cat_view_type === "1"} allLink={`/album/${itm?.cat?.cat_id}`} title={itm.cat.title} />
            )
          }

        </>
      }
      {
        !homePageData.records &&  <>
        <Skeleton variant="rect" width="100%" height="50vh" />
        <Skeleton variant="rect" width="25%" height="20px"  style={{ marginTop: 20 }} />
        <Skeleton variant="rect" width="100%" height="30vh"  style={{ marginTop: 10 }} />
        <Skeleton variant="rect" width="25%" height="20px"  style={{ marginTop: 20 }} />
        <Skeleton variant="rect" width="100%" height="30vh"  style={{ marginTop: 10 }} />
        </>
      }

    </Layout>
  );
}
export default Home
