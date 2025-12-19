import React, { forwardRef } from "react";
import style from './third.module.scss'
import logistic from '../../img/logistic.png'
import customs from '../../img/customs.png'
import certificate from '../../img/certificate.png'
import consult from '../../img/consult.png'
import insurence from '../../img/insurence.png'
import { useTranslation } from 'react-i18next'

const Third = forwardRef((props, ref) => {
    const { t } = useTranslation()

    const element = [
        { id: 1, name: t("third_name1"), text: t("third_text1"), img: logistic },
        { id: 2, name: t("third_name2"), text: t("third_text2"), img: customs },
        { id: 3, name: t("third_name3"), text: t("third_text3"), img: certificate },
        { id: 4, name: t("third_name4"), text: t("third_text4"), img: consult },
        { id: 5, name: t("third_name5"), text: t("third_text5"), img: insurence },
    ]
    return (
        <div className={style.third} ref={ref}>
            <div className="container">
                <h3 className={style.zagolovok}>{t("third_h3")}</h3>
                <div className={style.elements}>
                    {
                        element.map((el) =>
                            <div key={el.id} className={style.element}>
                                <div className={style.elFoto}>
                                    <img src={el.img} alt="serives"></img>
                                    <h3 className={style.elName}>{el.name}</h3>
                                </div>
                                <p className={style.elText}>{el.text}</p>
                            </div>
                        )
                    }
                </div>
                <div className={style.button}>
                    <button><a href="https://wa.me/996500015855?text=Здравствуйте!">{t("first_btn")}</a></button>
                </div>
            </div>
        </div>
    )
})

export default Third