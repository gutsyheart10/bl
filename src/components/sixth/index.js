import React, { forwardRef } from "react";
import style from './sixth.module.scss'
import worldEN from '../../img/worldEN.svg'
import worldRU from '../../img/worldRU.svg'
import { useTranslation} from 'react-i18next'

const Sixth=forwardRef((props,ref)=>{
    const {t}=useTranslation()

    return(
        <div className={style.sixth} ref={ref}>
            <div className="container">
                <p>{t("sixth_p")}</p>
                <img src={localStorage.getItem('i18nextLng') === "en" ? worldEN : worldRU} alt="world"/>
                
            </div>
        </div>
    )
})

export default Sixth