import React from 'react'
import "./Crypto.css";

const Crypto = ({name, image, symbol, price, volume, priceChange, marketcap}) => {
    return (
        <div className="crypto-container">
            <div className="crypto-row">
                <div className="crypto">
                    <img src={image}alt="crypto"/>
                    <h1>{name}</h1>
                    <p classNAME="crypto-symbol">{symbol}</p>
                </div>
                <div className="crypto-data">
                    <p className="crypto-price">Eur{price}</p>
                    <p className="crypto-volume">Eur{volume.toLocaleString()}</p>
                    {priceChange < 0 ? (
                        <p className="crypto-percent-red">{priceChange.toFixed(2)}%</p>
                    ) : (<p className="crypto-percent-green">{priceChange.toFixed(2)}%</p>)}
                    <p className="crypto-marketcap">
                        Mkt Cap:Eur{marketcap.toLocaleString()}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Crypto
