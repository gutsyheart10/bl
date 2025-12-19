import React, { forwardRef } from "react";
import style from './eigth.module.scss'
import map from '../../img/map.jpg'
import Location from '../../img/Location.png'
import Call from '../../img/Call.png'
import Message from '../../img/Message.png'
import whatsapp from '../../img/whatsapp.png'
import telegram from '../../img/telegram.png'
import { useTranslation } from 'react-i18next'
import Swal from "sweetalert2";
import { Form, Formik, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import emailjs from '@emailjs/browser'


const Eigth = forwardRef((props, ref) => {


    const { t } = useTranslation()

    const right = [
        { id: 1, name: t("eigth_name1"), text: t("eigth_text1"), img: Location },
        { id: 2, name: t("eigth_name2"), text: t("eigth_text2"), img: Call },
        { id: 3, name: t("eigth_name3"), text: t("eigth_text3"), img: Message }
    ]
    const regx = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9]+$/
    }
    const schema = Yup.object().shape({
        name: Yup.string()
            .required(t("eigth_error1")),
        email: Yup.string()
            .matches(regx.email, t("eigth_error3"))
            .required(t("eigth_error2")),
        number: Yup.number()
            .required(t("eigth_error4")),
        type: Yup.string()
            .required(t("eigth_error5"))
    })
    const sendEmail = (values) => {

        emailjs.send("service_4vaf0yi", "template_646y61j", values, "_z8Ae045iRYAIYWh_")
            .then((result) => {
                console.log(result.text)
            }, (error) => {
                console.log(error.text)
            })

    };


    return (
        <div className={style.eigth} ref={ref}>
            <div className="container">
                <div className={style.content}>
                    <div className={style.left}>
                        <div className={style.top}>
                            <p className={style.h}>{t("eigth_h3")}</p>
                            <p className={style.p}>{t("eigth_p1")}<br /> {t("eigth_p2")}</p>
                        </div>
                        <Formik
                            initialValues={{
                                name: "",
                                number: "",
                                email: "",
                                type: ""
                            }}
                            validationSchema={schema}
                            onSubmit={(values, { setSubmitting, resetForm }) => {
                                setTimeout(() => {
                                    sendEmail(values)
                                    Swal.fire({
                                        position: "center",
                                        icon: "success",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    setSubmitting(false)
                                    resetForm()
                                }, 1000)
                            }}
                        >
                            <Form className={style.form} >
                                <div className={style.Input}>
                                    <Field name="name" id="name" type="text" className={style.input} placeholder={t("eigth_input1")} />
                                    <ErrorMessage name="name">{(error) => <span>{error}</span>}</ErrorMessage>
                                </div>
                                <div className={style.Input}>
                                    <Field type="number" name="number" id="number" className={style.input} placeholder={t("eigth_input2")} />
                                    <ErrorMessage name="number">{(error) => <span>{error}</span>}</ErrorMessage>
                                </div>
                                <div className={style.Input}>
                                    <Field name="email" type="email" id="email" className={style.input} placeholder={t("eigth_input3")} />
                                    <ErrorMessage name="email">{(error) => <span>{error}</span>}</ErrorMessage>
                                </div>
                                <div className={style.Input}>
                                    <Field as="textarea" name="type" id="type" className={style.textarea} placeholder={t("eigth_input4")} />
                                    <ErrorMessage name="type">{(error) => <span>{error}</span>}</ErrorMessage>
                                </div>
                                <button type="submit">{t("eigth_btn")}</button>
                            </Form>
                        </Formik>

                    </div>
                    <div className={style.right}>
                        <img src={map} className={style.map} alt="map" />
                        <div>
                            <div className={style.info}>
                                {
                                    right.map(el =>
                                        <div key={el.id} className={style.element}>
                                            <div className={style.img}><img alt={el.name} src={el.img} /></div>
                                            <div className={style.infoText}>
                                                <p className={style.name}>{el.name}</p>
                                                <p className={style.text}>{el.text}</p>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                            <div className={style.media}>
                                <p className={style.mediaP}>{t("eigth_p3")}</p>
                                <div className={style.icons}>
                                    <a href="https://wa.me/996500015855?text=Здравствуйте!"><img src={whatsapp} alt="whatsapp" /></a>
                                    <a href="https://t.me/+996500015855"><img src={telegram} alt="telegram" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default Eigth