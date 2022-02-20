import React from "react";

import Hero from '../components/Hero'
import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import Portfolio from "../components/Portfolio";
import ContactFooter from "../components/ContactFooter";

export default function IndexContainer() {

    return (
        <div className="indexBody">
            <Header />
            <Hero />
            <AboutMe />
            <Portfolio />
            <ContactFooter />
        </div>
    )
}