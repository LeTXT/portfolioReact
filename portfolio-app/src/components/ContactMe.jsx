import React from "react";

import { hiIAm, activityPercent } from "../array/contactMeArray";
import Activity from "./Activity";

export default function ContactMe() {

    return (
        <div className="contactMeBody">
            <div className="hiIAm">
            <p>{hiIAm}</p>
            {/* <button>Contate-Me</button> */}
            </div>
            <div className="activityGrid">
                {
                    activityPercent.map((obj, index) => {

                        return (
                            <Activity key={index} par={obj.par} percent={obj.percent} classPercent={obj.class}/>
                        )
                        
                    })
                }
            </div>
        </div>
    )
}