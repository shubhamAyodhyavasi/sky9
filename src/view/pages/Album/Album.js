import React from 'react';
import Grid from '@material-ui/core/Grid';

import Layout from '../../element/Layout'
import './Album.css'
import AlbumCart from '../../element/AlbumCart'
const items = new Array(50).fill({
  title:"title",
  id:"12",
  details:"Each  has an image container, this is because you need the image to scale and move, we want the scaling to have a smooth transition. However if you add ...",
  totalView:"10",
  img:"https://akamaividz2.zee5.com/image/upload/w_1337,h_536,c_scale,f_auto,q_auto/resources/0-0-214663/cover/1170x658withlogo_756173185.jpg"
})
function Album() {
  return (
       <Layout >
         <div>

         </div>
         <div className="album-list-wrapper">
          <Grid container spacing={3}>
            {
              items.map((item, key) =>(
                <Grid  key={key} item lg={3} md={4} sm={6} xs={12} >
                  <AlbumCart  albumDetails={item} />
                </Grid>
              ))
            }
          </Grid>
         </div>
           
       </Layout>
  );
}
export default Album
