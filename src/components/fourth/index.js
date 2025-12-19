import React from "react";
import style from './fourth.module.scss'
import { useTranslation} from 'react-i18next'

export default function Fourth({eigth}){
    const {t}=useTranslation()

    const scrollHandler = (elRef)=>{
        window.scrollTo({top:elRef.current.offsetTop,behavior:"smooth"})
    }
    return (
        <div className={style.fourth}>
            <h3>{t("fourth_h3")}</h3>
            <p>{t("fourth_p")}</p>
            <button onClick={()=>scrollHandler(eigth)}>{t("fourth_btn")}</button>
        </div>
    )
}