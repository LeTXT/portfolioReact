import React from "react";

import { portfolio } from "../array/portfolio";

export default function Portfolio() {

    return (
        <div className="portfolioBody">
            <h2>Portfólio</h2>
            <div className="apkPortfolio">
                {portfolio.map((obj, index) => {

                    return (
                        <div key={index} className='apk'>
                         <a href={obj.link} target='_blank'>
                        <img src={obj.img} alt="" />
                        </a>
                    </div>
                    ) 
                })}
            </div>
        </div>
    )
}