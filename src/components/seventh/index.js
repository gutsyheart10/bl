import React, { forwardRef } from "react";
import style from './seventh.module.scss'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import "slick-carousel/slick/slick-theme.css";
import { useTranslation} from 'react-i18next'
import finmarine from '../../img/finmarine.png'
import energystar from '../../img/energystar.png'
const Seventh=forwardRef((props,ref)=>{
    const {t}=useTranslation()

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "none"}}
            onClick={onClick}
          />
        );
      }
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "none"}}
            onClick={onClick}
          />
        );
      }
    const settings = {
        className:style.slider,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
      };
    return(
        <div className={style.seventh} ref={ref}>
            <h3>{t("seventh_h3")}</h3>
            <div className="container">
                <Slider {...settings}>
                    <div className={style.card}>
                        <img src={finmarine} alt="finmarine" className={style.logo}/>
                        <div className={style.feedback}>
                            <div className={style.company}>
                              <p className={style.h}>FINMARINE</p>
                            </div>
                            <p>{t("seventh_sliderP1")}</p>
                        </div>
                    </div>
                    <div className={style.card}>
                        <img src={energystar} alt="energystar" className={style.logo}/>
                        <div className={style.feedback}>
                            <div className={style.company}>
                              <p className={style.h}>EnergyStar</p>
                            </div>
                            <p>{t("seventh_sliderP2")}</p>
                        </div>
                    </div>
                    
                </Slider>
            </div>
            
        </div>
    )
})

export default Seventh