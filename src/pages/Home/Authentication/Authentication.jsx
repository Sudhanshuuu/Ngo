import React from "react";
import styles from "./Authentication.module.css";
import certi1 from "../../../assets/certificate1.avif";
import certi2 from "../../../assets/certificate2.avif";
import certi3 from "../../../assets/certificate3.avif";


function Authentication() {



    return (<div className={styles["auth"]}>
        <div className={styles["auth-head"]}>
            We are a 12A and 80G certified NGO
            <br />
            <span>(that means if someone donates to NayePankh they will get a relief of 50%in income tax)</span>
        </div>
        <div className="blurHidden">
            <div className={styles["auth-certi"]}>

                <img src={certi1} alt="certi1" />
                <img src={certi2} alt="certi2" />
                <img src={certi3} alt="certi3" />

            </div>
        </div>
    </div>)
}

export default Authentication