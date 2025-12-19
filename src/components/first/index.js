import React, { forwardRef } from "react";
import style from './first.module.scss'
import plane from '../../img/plane.svg'
import train from '../../img/train.svg'
import truck from '../../img/truck.svg'
import { useTranslation } from 'react-i18next'

const First = forwardRef((props, ref) => {
    const { t } = useTranslation()
    return (
        <div className={`${style.first}`} ref={ref}>
            <div className="container">
                <div>
                    <div className={style.main}>
                        <h1>{t("first_h1")} <span>{t("first_h1_span")}</span></h1>
                        <p>{t("first_p")}</p>
                        <button className={style.btn}><a href="https://wa.me/996500015855?text=Здравствуйте!">{t("first_btn")}</a></button>
                    </div>
                    <div className={style.footer}>
                        <div className={style.element}>
                            <div><img src={plane} alt="plane" /></div>
                            <p>{t("first_avia")}</p>
                        </div>
                        <div className={style.line} />
                        <div className={style.element}>
                            <div><img src={train} alt="train" /></div>
                            <p>{t("first_jd")}</p>
                        </div>
                        <div className={style.line} />
                        <div className={style.element}>
                            <div><img src={truck} alt="truck" /></div>
                            <p>{t("first_auto")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default First