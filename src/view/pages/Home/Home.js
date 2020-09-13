import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import { getDaynamicPostData } from '../../../services/services'
import Layout from '../../element/Layout'
import Slides from '../../element/Sliders/Slides/Slides'
import { BannerSlider } from '../../element/Sliders'

import { config } from '../../../constants';

// import config from '../../../constants/config'
// const IMG_URL = config.IMG_URL
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
              <Slides key={index} itm={itm} items={getItems(itm?.album)} allLink={`/album/${itm?.cat?.cat_id}`} title={itm.cat.title} />
            )
          }

        </>
      }

    </Layout>
  );
}
export default Home
