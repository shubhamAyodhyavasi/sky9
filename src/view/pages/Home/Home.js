import React from 'react';
import Layout from '../../element/Layout'
import BannerSlider from '../../element/Sliders/BannerSlider/BannerSlider'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

function Home() {
  const bannerItem = [
    {
      name: 'test',
      description: 'safd askdfjksdjaf sad fjsfj lks ',
      image: 'http//via.placeholder.com/400x500'
    },
    {
      name: 'test',
      description: 'safd askdfjksdjaf sad fjsfj lks ',
      image: 'http//via.placeholder.com/400x500'
    },
    {
      name: 'test',
      description: 'safd askdfjksdjaf sad fjsfj lks ',
      image: 'http//via.placeholder.com/400x500'
    },
  ]
  return (
       <Layout >
         <BannerSlider navButtonsAlwaysVisible={true} items={bannerItem} />
         <h2>Top Shows on Sky9</h2>
         <Card>
           <CardActionArea>
            <CardMedia
              image="http://via.placeholder.com/200x200"
              title="Contemplative Reptile"
            />
           </CardActionArea>
         </Card>
       </Layout>
  );
}
export default Home
