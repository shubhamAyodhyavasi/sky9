import React from 'react';
import { useHistory} from 'react-router-dom'
import {PlayArrow} from '@material-ui/icons'
import "./AlbumCart.scss";
import { Button } from '@material-ui/core';

export default function AlbumCart({ albumDetails, isSmall }) {
    const { title, img, totalView, id } = albumDetails
    const history = useHistory();
    return (
        <div onClick={()=>{history.push(`/video/${id}`)}} className={`album-cart-wrapper coursePointer ${isSmall ? "album-cart-wrapper--small" : ""}`} 
        style={{
            backgroundImage: `url(${img})`,
        }}>
            {totalView}
            <img className="album-cart-wrapper__bg" alt={title} src={img} />
            <div className="album-cart-wrapper-footer">
                <Button 
                    style={{
                        minWidth: '40px'
                    }}
                    onClick={()=>{
                        history.push(`/video/${id}`)
                    }}  >
                    <PlayArrow />
                </Button>
                {/* <Button>
                    <WatchLater />
                </Button> */}
                {/* <h3 style={{
                    cursor: 'pointer'
                }} onClick={()=>{
                    history.push(`/video/${id}`)
                }}  >{title}</h3> */}
            </div>
        </div>
    );
}
