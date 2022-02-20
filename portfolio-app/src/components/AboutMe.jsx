import React from "react";

import { aboutMePrank } from '../array/aboutMePrank'
import ContactMe from "./ContactMe";


export default function AboutMe() {
    console.log(aboutMePrank)

    return (
        <div className="aboutMeBody">
            <h2>Sobre mim</h2>
            <div>
                {ContactMe()}
            </div>
            <div className="flexAboutMe">
                {
                    aboutMePrank.map((obj, id) => {
                        return (
                        <div key={id} className='width'>
                            <h3>{obj.h3}</h3>
                            <p>{obj.p}</p>
                        </div>
                        )
                    })
                }
            </div>
        </div>
    )
}