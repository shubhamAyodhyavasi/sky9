import React, { useEffect, useState } from 'react';
import { getDaynamicPostData } from '../../../services/services'
import Layout from '../../element/Layout'
import Slides from '../../element/Sliders/Slides/Slides'
import { BannerSlider } from '../../element/Sliders'

// const bannerItem = [
//   {
//     title: 'Games of thrones',
//     description: 'safd askdfjksdjaf sad fjsfj lks ',
//     img: 'https://www.hjackets.com/blog/wp-content/uploads/2017/11/game-of-thrones-s-4-banner.jpg'
//   },
//   {
//     title: 'test',
//     description: 'safd askdfjksdjaf sad fjsfj lks ',
//     img: 'https://via.placeholder.com/400x500'
//   },
//   {
//     title: 'test',
//     description: 'safd askdfjksdjaf sad fjsfj lks ',
//     img: 'https://via.placeholder.com/400x500'
//   },
// ]

const items = new Array(10).fill(
  {
    img: 'https://akamaividz2.zee5.com/image/upload/w_1337,h_536,c_scale,f_auto,q_auto/resources/0-0-214663/cover/1170x658withlogo_756173185.jpg',
    title: 'Camera',
    width: '30%',
  })
function Home() {
  const [homePageData, setHomePageData] = useState({})
  const getData = async () => {
    const response = await getDaynamicPostData('getHomePageData', { cat_id: 4 })
    setHomePageData(response)
  }
  useEffect(() => {
    getData()
  }, []);

  return (
    <Layout >
      {
        homePageData && <>
          <BannerSlider items={homePageData?.bannerRecord} />
          <Slides items={items} allLink="/album" title="Title for slides" />
          <Slides items={items} allLink="/album" itle="Title another" />
          <Slides items={items} allLink="/album" title="Title for slides" />
        </>
      }

    </Layout>
  );
}
export default Home
