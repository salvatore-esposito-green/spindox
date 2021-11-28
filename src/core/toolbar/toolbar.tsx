import React from "react";
import styles from "./toolbar.module.sass";
import { Icon } from "../../components/icon/icon";
import {DetailProps} from "../../models/details";

const icons:string[] = [
    "fa-user-circle-o",
    "fa-envelope",
    "fa-calendar",
    "fa-map",
    "fa-phone",
    "fa-lock"
]

export const Toolbar: React.VFC<Pick<DetailProps, '_selectTab' | 'tabSelected'>> = ({_selectTab, tabSelected}) => {
    const onClickHandler = (type: string) => {
        _selectTab(type)
    }
    const isActiveHandler = (type:string):boolean => {
        return tabSelected === type;
    }
    return(
            <div className={styles.toolBar}>
                {icons.map(icon => <Icon
                        _onclick={onClickHandler}
                        isActive={isActiveHandler(icon)}
                        type={icon}
                    />)}
            </div>
    )
}