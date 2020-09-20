import React from 'react';
import { useHistory} from 'react-router-dom'
import "./AlbumCart.scss";

export default function AlbumCart({ albumDetails }) {
    const { title, img, totalView, id } = albumDetails
    const history = useHistory();
    return (
        <div className="album-cart-wrapper" style={{
            backgroundImage: `url(${img})`,
        }}>
            {totalView}
            <img className="album-cart-wrapper__bg" alt={title} src={img} />
            <div className="album-cart-wrapper-footer">
                <h3 style={{
                    cursor: 'pointer'
                }} onClick={()=>{
                    history.push(`/video/${id}`)
                }}  >{title}</h3>
            </div>
        </div>
    );
}
