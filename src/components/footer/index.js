import React from "react";
import style from './footer.module.scss'
import { useTranslation } from 'react-i18next'

export default function Footer() {
    const { t } = useTranslation()

    return (
        <div className={style.footer}>
            <div className="container">
                <div className={style.content}>
                    <p>Business<span>Logistic</span></p>
                    <button><a href="https://wa.me/996500015855?text=Здравствуйте!">{t("first_btn")}</a></button>
                </div>
            </div>
        </div>
    )
}