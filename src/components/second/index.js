import React, { forwardRef } from "react";
import style from './second.module.scss'
import second from '../../img/second.jpg'
import { useTranslation} from 'react-i18next'

const Second = forwardRef ((props,ref)=>{
    const {t}=useTranslation()

    return(
        <div className={style.second} ref={ref}>
            <div className='container'>
                <div className={style.content}>
                    <img src={second} alt="seaport"/>
                    <div className={style.text}>
                        <h3>{t("second_h3")}</h3>
                        <div>
                            <p>{t("second_p")}</p>
                            <ul >
                                <li>{t("second_li1")}</li>
                                <li>{t("second_li2")}</li>
                                <li>{t("second_li3")}</li>
                                <li>{t("second_li4")}</li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
 })

export default Second