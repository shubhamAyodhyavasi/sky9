import React from 'react'
import {config} from '../../../constants'
const IMG_URL= config.IMG_URL
function BannerCard({image, title, onCLick ,album_id}) {
    return (
        <a onClick={onCLick} className="coursePointer">
        <div  className="banner-card" style={{
            backgroundImage: `url(${IMG_URL}/${image})`,
        }}>
            <div className="banner-card__item">
                <h3>{title}</h3>
            </div>
        </div>
        </a>
    )
}

export default BannerCard
