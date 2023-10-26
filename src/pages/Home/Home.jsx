import React, { useEffect } from "react";
import Head from "./Head/Head";
import AboutUs from "./AboutUs/AboutUs";
import Service from "./Servics/Service";

import "./Home.css";
import Authentication from "./Authentication/Authentication";
import HamburgerMenu from "../../components/Navbar/NavBar";
import ContactUs from "../../components/ContactUs/ContactUs";

function Home() {

    useEffect(() => {
        const Observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("moveAnimation")
                }
                else {
                    entry.target.classList.remove("moveAnimation")

                }
            })
        })

        const moveHiddenElements = document.querySelectorAll(".moveHidden");
        moveHiddenElements.forEach((el) => { Observer.observe(el) });

        const blurHiddenElements = document.querySelectorAll(".blurHidden");
        blurHiddenElements.forEach((el) => { Observer.observe(el) });

    }, [])



    return (<div className="home">
        <HamburgerMenu />
        <Head />
        <AboutUs />
        <Authentication />
        <Service />
        <ContactUs />
    </div>)
}

export default Home;