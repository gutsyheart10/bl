import React from "react";
import style from './header.module.scss'
import logo from '../../img/BusinessLogistic.svg'
import { useTranslation } from "react-i18next";


export default function Header ({first,two,three,five,six,seven,eigth}){
    const {t,i18n}=useTranslation()
    const changeLanguage = (lang)=> {
        i18n.changeLanguage(lang)
    }
    React.useEffect(()=>{

        const head = document.getElementById('header')

        window.addEventListener('scroll',function(){
            const scrollPos = window.scrollY
            const Width = window.innerWidth
            
            
            if (Width < 450){
                if(scrollPos>19){
                    head.classList.add('head-fixed')
                } else{
                    head.classList.remove('head-fixed')
                }
                if(scrollPos>750){
                    head.classList.add("head-back")
                } else{
                    head.classList.remove("head-back")
                }
            } else{
                if(scrollPos>48){
                    head.classList.add('head-fixed')
                } else{
                    head.classList.remove('head-fixed')
                }
                if(scrollPos>1086){
                    head.classList.add("head-back")
                } else{
                    head.classList.remove("head-back")
                }
            }
        })

    },[])
    const scrollHandler = (elRef)=>{
        window.scrollTo({top:elRef.current.offsetTop,behavior:"smooth"})
    }
    return(
        <div className={style.headerBack} id="header">
            <div className="container">
                <header className={style.header}>
                    <p onClick={()=>scrollHandler(first)} className={style.logo}><img src={logo} alt="logo"/></p>
                    <menu className={style.menu}>
                        <p className={style.reference} onClick={()=>scrollHandler(two)}>{t("header_onas")}</p>
                        <p className={style.reference} onClick={()=>scrollHandler(three)}>{t("header_service")}</p>
                        <p className={style.reference} onClick={()=>scrollHandler(five)}>{t("header_advantage")}</p>
                        <p className={style.reference} onClick={()=>scrollHandler(six)}>{t("header_direction")}</p>
                        <p className={style.reference} onClick={()=>scrollHandler(seven)}>{t("header_client")}</p>
                    </menu>
                    <div className={style.right}>
                        <p className={style.phone} onClick={()=>scrollHandler(eigth)}>{t("header_contact")}</p>
                        <div className={style.translate}>
                            <button className={style.btns} onClick={()=> changeLanguage('ru')}>RU</button>
                            <div className={style.line}/>
                            <button className={style.btns} onClick={()=> changeLanguage('en')}>EN</button>
                        </div>
                    </div>
                </header>
            </div>
        </div>
    )
}