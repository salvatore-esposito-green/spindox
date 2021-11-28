import React, {useEffect} from "react";
import styles from "./app.module.sass";
import {Header} from "../../core/header/header";
import {Detail} from "../../components/detail/detail";
import useUser from "../../hooks/useUser";
export const AppPage: React.VFC = () => {
    /*
    * @AppPage è il mio smart container
    * dove ho deciso di centralizzare il mio state e il mio service,
    * tramite props comunico con tutti i componenti child.
    * Questo mi permette di avere dei componenti "stateless" (molto più facili da testare e da manutenere)
    * Altri approcci solo l'utilizzo di Contex e Redux, evitando di inserire logica in ogni componente
    * */
    const { user, loading, title, subTitle, _initState, _setTab, tab } = useUser();
    useEffect(() => _initState(),[])
    const selectTabHandler = (tab: string) => {
        _setTab(tab)
    }
    if(loading) return <span className={styles.loading}>Loading...</span>
    return (
        <div className={styles.app}>
            {/* eslint-disable-next-line no-mixed-operators */}
            <Header picture={user && user[0]?.picture?.large || ''} />
            <Detail
                title={title}
                subTitle={subTitle}
                _selectTab={selectTabHandler}
                tabSelected={tab}
            />
        </div>
    )
}