import React from 'react';
import Layout from '../../element/Layout'
import Slides from '../../element/Sliders/Slides/Slides'
import AlbumCart from '../../element/AlbumCart'
import {BannerSlider} from '../../element/Sliders'
const albumDetails={
  title:"title",
  id:"12",
  details:"Each  has an image container, this is because you need the image to scale and move, we want the scaling to have a smooth transition. However if you add ...",
  totalView:"10",
  img:"https://akamaividz2.zee5.com/image/upload/w_1337,h_536,c_scale,f_auto,q_auto/resources/0-0-214663/cover/1170x658withlogo_756173185.jpg"
}

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
           {/* <TopSlider /> */}
           <BannerSlider items={bannerItem} />
           <Slides title="title for slides" />
          
           <AlbumCart albumDetails={albumDetails} />
       </Layout>
  );
}
export default Home
