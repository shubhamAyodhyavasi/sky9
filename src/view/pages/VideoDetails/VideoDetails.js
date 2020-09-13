import React from 'react';
import Layout from '../../element/Layout'
import ReactPlayer from 'react-player/lazy'
import Slides from '../../element/Sliders/Slides/Slides'
import "./VideoDetails.css"
const albumDetails={
  title:"title",
  id:"12",
  details:"Each  has an image container, this is because you need the image to scale and move, we want the scaling to have a smooth transition. However if you add ...",
  totalView:"10",
  img:"https://akamaividz2.zee5.com/image/upload/w_1337,h_536,c_scale,f_auto,q_auto/resources/0-0-214663/cover/1170x658withlogo_756173185.jpg"
}
function VideoDetails() {
  return (
       <Layout >
         <div className="video-player-wrapper">
                <ReactPlayer
                controls={true}
                playing
                width="100%"
                playIcon={<img width="10%" src="http://fantasymedia.in/sky9/uploads/play.png" />}
                url="https://thepaciellogroup.github.io/AT-browser-tests/video/ElephantsDream.mp4"
                light="https://akamaividz2.zee5.com/image/upload/w_1337,h_536,c_scale,f_auto,q_auto/resources/0-6-1298/cover/1170x658withlog_1647246974.jpg"
                config={{ file: {
                    attributes: {
                        crossOrigin: 'true',
                        controlsList: 'nodownload'
                    },

                    nodownload:true,
                    tracks: [
                    {kind: 'subtitles', src: 'https://thepaciellogroup.github.io/AT-browser-tests/video/subtitles-en.vtt', srcLang: 'en', default: true},
                    {kind: 'subtitles', src: 'https://thepaciellogroup.github.io/AT-browser-tests/video/subtitles-en.vtt', srcLang: 'hi'}
                    ]
                }}}
                />
         </div>
         <div className="video-details-wrapper">
            <div className="video-details-title">
               <h2>Movie title name</h2>
               <p>Drama movie 2029 2h-30min</p>
            </div>
            <div className="video-details-info">
               <div className="video-details-info-single">
                   <h4>Released On</h4>
                   <p>4 April 2020</p>
               </div>
               <div className="video-details-info-single"> 
                   <h4>Language</h4>
                   <p>Hindi</p>
               </div>
            </div>
            <div className="video-details-subDetails">
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <div className="video-details-more-video">
               <h2>Trailers & More</h2>
               <Slides />
               
            </div>
         </div>
         
       </Layout>
  );
}
export default VideoDetails
