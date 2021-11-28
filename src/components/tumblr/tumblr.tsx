import React from "react";
import styles from "./tumblr.module.sass";

export const Tumblr: React.VFC<{img:string}> = ({img}) => {
    return(
        <div className={styles.tumblrContainer}>
            <img src={img} alt={'Tumblr'}/>
        </div>
    )
}