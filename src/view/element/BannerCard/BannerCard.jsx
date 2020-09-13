import React from 'react'
const IMG_URL="http://fantasymedia.in/sky9/"
function BannerCard({image, title, onCLick}) {
    return (
        <div onClick={onCLick} className="banner-card" style={{
            backgroundImage: `url(${IMG_URL}/${image})`,
        }}>
            <div className="banner-card__item">
                <h3>{title}</h3>
            </div>
        </div>
    )
}

export default BannerCard
