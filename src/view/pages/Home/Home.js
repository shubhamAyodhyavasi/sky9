import React from 'react';
import Layout from '../../element/Layout'
import Slides from '../../element/Sliders/Slides/Slides'
import AlbumCart from '../../element/AlbumCart'
import {BannerSlider} from '../../element/Sliders'


const bannerItem = [
  {
    title: 'Games of thrones',
    description: 'safd askdfjksdjaf sad fjsfj lks ',
    img: 'https://www.hjackets.com/blog/wp-content/uploads/2017/11/game-of-thrones-s-4-banner.jpg'
  },
  {
    title: 'test',
    description: 'safd askdfjksdjaf sad fjsfj lks ',
    img: 'https://via.placeholder.com/400x500'
  },
  {
    title: 'test',
    description: 'safd askdfjksdjaf sad fjsfj lks ',
    img: 'https://via.placeholder.com/400x500'
  },
]
function Home() {
  return (
       <Layout >
           <BannerSlider items={bannerItem} />
           <Slides title="title for slides" />
       </Layout>
  );
}
export default Home
