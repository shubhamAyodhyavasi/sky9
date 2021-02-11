import React from 'react';
import { useHistory} from 'react-router-dom'
import {PlayArrow} from '@material-ui/icons'
import "./LiiveCart.scss";
import { Button } from '@material-ui/core';

export default function LiveCart({ albumDetails, isSmall ,onSelectLiveInfo }) {
    const { title, img, totalView, id } = albumDetails
    const history = useHistory();
    return (
        <div className={`live-cart-wrapper ${isSmall ? "live-cart-wrapper--small" : ""}`} 
        // style={{
        //     backgroundImage: `url(${img})`,
        // }}
        >
            <div onClick={()=>{
                onSelectLiveInfo(albumDetails)
                        //history.push(`/live/${id}`)
                    }} className="live-cart-wrapper__image-wrap">
                <img src={img} class="live-cart-wrapper__thumb" alt=""/>
                {/* {totalView} */}
            </div>
            {/* <img className="live-cart-wrapper__bg" alt={title} src={img} /> */}
            <div className="live-cart-wrapper__body">
                <p onClick={()=>{
                    onSelectLiveInfo(albumDetails)
                       // history.push(`/live/${id}`)
                    }} className="live-cart-wrapper__title">{title}</p>
                <Button 
                    style={{
                        minWidth: '40px'
                    }}
                    onClick={()=>{
                        history.push(`/live/${id}`)
                    }}  >
                    <PlayArrow />
                </Button>
             
            </div>
        </div>
    );
}
