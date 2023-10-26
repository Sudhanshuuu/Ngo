import React from "react";
import styles from "./Head.module.css";
import Cover from "../../../assets/naye1.jpg";

function Head() {
    return (<div className={styles["box"]}>

        <img className={styles["bgImg"]} src={Cover} alt="BackgroundImg" />

        <div className={styles["head"]}>
            <div className={styles["content"]}>
                <div>
                    <div className={styles["content-head"]}>
                         "It's that easy to bring a Smile on Their Faces"
                    </div>
                    <div className={styles["content-body"]}>
                        We don't ask for much, just help us with what you can- Be it Money, Skill or Your Time</div>
                </div>
                <div> <button>Donate Now </button></div>

            </div>
        </div>

    </div>)
}

export default Head;