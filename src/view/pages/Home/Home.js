import React from 'react';
import Layout from '../../element/Layout'
import TopSlider from './TopSlider'
import Slides from '../../element/Slides'
function Home() {
  return (
       <Layout >
           <TopSlider />
           <Slides title="title for slides" />
           <Slides title="title for slides 2" />
           <Slides title="title for slides 3" />
           <Slides title="title for slides 4" />
           <p>hello in home page</p>
       </Layout>
  );
}
export default Home
