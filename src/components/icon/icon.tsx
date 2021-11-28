import React from "react";
import styles from "./icon.module.sass";
import { IconProps } from '../../models/elements'

export const Icon: React.VFC<IconProps> = (props) => {
    const { _onclick, type, isActive }:IconProps = props;
    const onClickHandler = () => {
        _onclick(type)
    }
    return(
        <div
            onClick={onClickHandler}
            className={`
                ${styles.iconContainer} 
                ${isActive ? styles.active : ''}
            `}
        >
            <i className={`fa fa-2x ${type}`} />
        </div>
    )
}