import React from 'react'

function BannerCard({img, title, onCLick}) {
    return (
        <div onClick={onCLick} className="banner-card" style={{
            backgroundImage: `url(${img})`,
        }}>
            <div className="banner-card__item">
                <h3>{title}</h3>
            </div>
        </div>
    )
}

export default BannerCard
