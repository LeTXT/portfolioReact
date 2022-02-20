import React, { useState } from "react";

import perfil from '../img/perfil.svg'
import arrow from '../img/arrow.svg'
import { setParHero } from "../util/setParHero";
import { iAmDev } from "../array/iAmDev";


export default function Hero() {
    const [state, setState] = useState(0)

    setParHero(setState, state)

    return (
        <div>
            <div className="heroBody">
            <img src={perfil} alt='perfil'/>
            <div>
            <h1 >Oi, sou o Leandro</h1>
            <p >{iAmDev[state]}</p>
            </div>
            <div className="circle">
            <img src={arrow} alt="arrow down" />
            </div>
        </div>
            <div className="red"></div>
        </div>
        
    )
}

