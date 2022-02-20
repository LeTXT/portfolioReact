import React from "react";

import { occupation } from '../array/occupation'

export default function Occupation() {

    return (
        <div className="occupationBody">
            <div className="modal">
                {occupation.map((obj, index) => {

                    return (
                        <div key={index} className={obj.classR}>
                        <h3>{obj.h3}</h3>
                        <p>{obj.p}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}