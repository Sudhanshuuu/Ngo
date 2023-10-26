import React, {  useState } from "react";
import aboutImg from "../../../assets/naye2.avif";
import slider1Img from "../../../assets/slider1.avif";
import slider2Img from "../../../assets/slider2.avif";
import slider3Img from "../../../assets/slider3.avif";
import styles from "./AboutUs.module.css";

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AboutUs() {

    let [show, setShow] = useState(false);

    function handleClick() {
        setShow((prev) => (!prev));
    }


    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (<div className={styles["box"]}>
        <div className={styles["aboutUs"]}>

            <div>
                <img src={aboutImg} alt="aboutImg" className={styles["aboutImg"]} />
            </div>



            <div className="moveHidden">
                <div className={styles["aboutUs-content"]}>
                    <div className={styles["head"]}>About <span> NayePankh Foundation</span></div>
                    <div className={styles["body"]}>
                        "NayePankh Foundation" is a non governmental organisation with a strong desire to help the society
                        and make it a better place for all, by doing everything in our power and to make our vision successful
                        we would require your vital support. Service to mankind is the service to god. Lets revolutionise
                        the society together!.
                        <div className={show ? styles["show"] : styles["hide"]}>
                            Nayepankh foundation was initiated to bring a change and help people during the tough times of Covid.
                            Later in the year, the NGO started to expand their operations and provide help to a wider section of
                            the society. With this revamped vision, the NGO acquired the name of NayePankh  giving wings to uplift
                            the underprivileged section of our society. NayePankh is one of the eminent NGOs espoused in providing
                            food, sanitary napkins, clothes, educating underprivileged sectors of our society for the better future.
                            We make efforts to solve daily problems faced by people of India.
                        </div>
                    </div>
                    <button onClick={handleClick} className={styles["button"]} >Read More</button>

                </div>
            </div>
        </div>

        <Slider {...settings} className={styles["slider"]}>
            <div><img src={slider1Img} alt='slider1Img' /></div>
            <div> <img src={slider2Img} alt='slider2Img' /></div>
            <div> <img src={slider3Img} alt='slider3Img' /></div>
        </Slider>
    </div>)
}


export default AboutUs;