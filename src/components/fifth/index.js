import React,{forwardRef} from "react";
import style from './fifth.module.scss'
import Lock from '../../img/Lock.svg'
import truck from '../../img/truck.svg'
import Discount from '../../img/Discount.svg'
import Paper from '../../img/Paper.svg'
import Heart from '../../img/Heart.svg'
import Shield from '../../img/Shield.svg'
import { useTranslation} from 'react-i18next'

const Fifth = forwardRef((props,ref)=>{
    const {t}=useTranslation()

    
    const elements = [
        {id:1,name:t("fifth_name1"), text:t("fifth_text1"),img:Lock},
        {id:2,name:t("fifth_name2"), text:t("fifth_text2"),img:truck},
        {id:3,name:t("fifth_name3"), text:t("fifth_text3"),img:Discount},
        {id:4,name:t("fifth_name4"), text:t("fifth_text4"),img:Paper},
        {id:5,name:t("fifth_name5"), text:t("fifth_text5"),img:Heart},
        {id:6,name:t("fifth_name6"), text:t("fifth_text6"),img:Shield}
    ]
    return(
        <div className={style.fifth} ref={ref}>
            <div className="container">
                <h3 className={style.h3}>{t("fifth_h3")}</h3>
                <div className={style.elements}>
                    {
                        elements.map(el=>
                            <div key={el.id} className={style.element}>
                                <div className={style.top}>
                                    <div className={style.foto}><img src={el.img} alt="advantages"/></div>
                                    <h3>{el.name}</h3>
                                </div>
                                <p>{el.text}</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
})

export default Fifth