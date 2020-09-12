import React from 'react';
import "./AlbumCart.css"
import { Badge } from '@material-ui/core';
import { Visibility } from '@material-ui/icons';

export default function AlbumCart({ albumDetails }) {
    const { title, img, id, totalView } = albumDetails
    return (
        <div onClick={()=>{console.log('calling url')}} className="album-cart-wrapper" style={{
            backgroundImage: `url(${img})`,
        }}>
            {totalView}
            <div className="album-cart-wrapper-footer">
                <h3>{title}</h3>
            </div>
        </div>
    );
}
