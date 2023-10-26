import React from "react";
import styles from "./Service.module.css";

import gallery1Img from "../../../assets/donateSlider1.jpg";
import gallery2Img from "../../../assets/donateSlider2.jpg";
import gallery3Img from "../../../assets/donateSlider3.jpg";
import { useNavigate } from "react-router-dom";


function Service() {

    let navigate = useNavigate();
    let link = "https://docs.google.com/forms/d/e/1FAIpQLScQRE7vFFPaDJhbdBZJubFX-HUFLBmZTmewkxaIPVhz0pQXsQ/viewform?usp=send_form";
    function handleClick() {
        navigate(link)
    }

    return (<div className={styles["service"]}>
        <div className={styles["service-head"]}>Donate to Make<br /> an Impact</div>
        <div className={styles["service-gallery"]}>

            <img src={gallery2Img} alt='gallery2Img' />
            <img src={gallery1Img} alt='gallery1Img' />
            <img src={gallery3Img} alt='gallery3Img' />
        </div>
        <button onClick={handleClick}>Donate Now</button>
    </div>)
}

export default Service;