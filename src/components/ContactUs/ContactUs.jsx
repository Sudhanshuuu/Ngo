import React from "react";
import styles from "./ContactUs.module.css";

function ContactUs() {
    return (<div className={styles["contactUs"]}>
        <div className={styles["contactUs-head"]}>Get in touch</div>
        <div className={styles["contactUs-body"]}>
            <div>career@nayepankh.com</div>
            <div>WhatsApp: +91-6306266557</div>
            <div>Office Address: 104A/279 P.Road Kanpur </div>
            <div>Pin Code: 208012</div>
        </div>
    </div>)
}

export default ContactUs;