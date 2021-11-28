import React from "react";
import styles from "./header.module.sass";
import {Tumblr} from "../../components/tumblr/tumblr";

export const Header: React.VFC<{ picture: string }> = ({ picture }) => {
    return(
        <header className={styles.header}>
            <Tumblr img={picture}/>
        </header>
    )
}