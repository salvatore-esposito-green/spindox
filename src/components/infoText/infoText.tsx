import React from "react";
import styles from "./info.module.sass";
import {DetailProps} from "../../models/details";

export const InfoText: React.VFC<Pick<DetailProps, 'title' | 'subTitle'>> = ({title, subTitle}) => {
    return(
        <div className={styles.info}>
            <span className={styles.subtitle}>{subTitle}</span>
            <h2 className={styles.title}>{title}</h2>
        </div>
    )
}