import React from 'react';
import { useHistory} from 'react-router-dom'
import {PlayArrow} from '@material-ui/icons'
import "./LiiveCart.scss";
import { Button } from '@material-ui/core';

export default function LiveCart({ albumDetails, isSmall }) {
    const { title, img, totalView, id } = albumDetails
    const history = useHistory();
    return (
        <div className={`live-cart-wrapper ${isSmall ? "live-cart-wrapper--small" : ""}`} 
        style={{
            backgroundImage: `url(${img})`,
        }}>
            {totalView}
            <img className="live-cart-wrapper__bg" alt={title} src={img} />
            <div className="live-cart-wrapper-footer">
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
