import React from "react";

export default function Activity({par, percent, classPercent}) {

    return (
        <div className="hoverActivity">
        <div className="activity">
        <p>{par}</p>
        <p>{percent}</p>
        </div>
        <div>
        <div className="bodyGrafic">
        <div className={classPercent}></div>
        </div>
        </div>
        </div>
    )
}