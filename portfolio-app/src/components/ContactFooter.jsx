import React from "react";

import { social } from '../array/social'

export default function ContactFooter() {

    return (
        <div className="ContactFooterBody">
            <div className="redFooter">
                <h2>
                    Gostou?
                </h2>
                <p>Então vamos conversar!</p>
                <p>leandrogomesdeoliveira2@gmail.com</p>
            </div>
            <div className="gridFooter">
                <h4>CONTATO</h4>
                <div className="lineContact"></div>
                <p>Outras formas de entrar em contato!</p>
                <div className='flexSocial'>
                    {social.map((obj, index) => {

                        return (
                                <a href={obj.link} key={index} className='socialScreen' target='_blank'>
                                <img src={obj.img}/>
                                </a>
                        )
                    })}
                </div>
            </div>
            
        </div>
    )
}