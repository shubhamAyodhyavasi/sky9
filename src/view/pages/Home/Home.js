import React, { useEffect, useState } from 'react';
import { getDaynamicPostData } from '../../../services/services'
import Layout from '../../element/Layout'
import Slides from '../../element/Sliders/Slides/Slides'
import { BannerSlider } from '../../element/Sliders'
import config from '../../../constants/config'
const IMG_URL = config.IMG_URL
function Home() {
  const [homePageData, setHomePageData] = useState({})
  const getData = async () => {
    const response = await getDaynamicPostData('getHomePageDataById', { cat_id: 4 })
    setHomePageData(response)
  }
  useEffect(() => {
    getData()
  }, []);
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
        homePageData && <>
          <BannerSlider items={homePageData?.bannerRecord} />
          {
            homePageData?.records?.map((itm, index) =>
              <Slides key={index} items={itm?.album} allLink="/album" title={itm.cat.title} />
            )
          }

        </>
      }

    </Layout>
  );
}
export default Home
