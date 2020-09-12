import React from 'react';
import Carousel from 'react-material-ui-carousel'
import {Paper,Button} from '@material-ui/core'
 
export default function TopSlider(props)
{
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            img:'https://akamaividz2.zee5.com/image/upload/w_1337,h_536,c_scale,f_auto,q_auto/resources/0-0-214663/cover/1170x658withlogo_756173185.jpg'
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            img:'https://akamaividz2.zee5.com/image/upload/w_1337,h_536,c_scale,f_auto,q_auto/resources/0-0-214663/cover/1170x658withlogo_756173185.jpg'
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            img:'https://akamaividz2.zee5.com/image/upload/w_1337,h_536,c_scale,f_auto,q_auto/resources/0-0-214663/cover/1170x658withlogo_756173185.jpg'
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            img:'https://akamaividz2.zee5.com/image/upload/w_1337,h_536,c_scale,f_auto,q_auto/resources/0-0-214663/cover/1170x658withlogo_756173185.jpg'
        }
    ]
 
    return (
        <Carousel 
        indicators={true} 
        animation="slide"
        timeout={500}
        autoPlay={false}
        >
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}
 
function Item(props)
{
    return (
        <Paper>
            <img src={props.item.img} />
         </Paper>
    )
}