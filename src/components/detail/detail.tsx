import React from "react";
import styles from "./detail.module.sass";
import {Toolbar} from "../../core/toolbar/toolbar";
import {InfoText} from "../infoText/infoText";
import {DetailProps} from "../../models/details";

export const Detail: React.VFC<DetailProps> = ({title,subTitle, _selectTab, tabSelected}) => {
    return(
        <div className={styles.detail}>
            <InfoText title={title} subTitle={subTitle} />
            <Toolbar _selectTab={_selectTab} tabSelected={tabSelected}/>
        </div>
    )
}