import React from 'react';
import { useHistory} from 'react-router-dom'
import {PlayArrow} from '@material-ui/icons'

import { Button } from '@material-ui/core';

export default function LiveCart({ albumDetails, isSmall }) {
    const { title, img, totalView, id } = albumDetails
    console.log('xx',albumDetails)
    const history = useHistory();
    return (
        <div className={`album-cart-wrapper ${isSmall ? "album-cart-wrapper--small" : ""}`} 
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
                        history.push(`/theater/${id}`)
                    }}  >
                    <PlayArrow />
                </Button>
             
            </div>
        </div>
    );
}