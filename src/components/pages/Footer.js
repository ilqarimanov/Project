import React from 'react'
import img14 from '../../assets/img/img14.jpg'
import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineGooglePlus, AiOutlineInstagram, AiOutlineTwitter} from 'react-icons/ai'
import { useTranslation} from "react-i18next";
import BackToButton from './BackToButton';

const Footer = () => {
    const { t } = useTranslation();
  return (
    <footer>
                <div className="container">
                <div className="row">
                    <div className="col col1 d-flex flex-column align-items-end">
                        <div className="box"></div>
                        <img src={img14} alt="err" />
                    </div>
                    <div className="col d-flex flex-column align-items-center py-5">
                        <div className="text1">
                            <h3>{t('text57')}</h3>
                            <p>{t('text58')}</p>
                        </div>
                        <div className="text2 mt-4">
                            <input className='p-2' type="email" placeholder={t('text60')} />
                            <button className='ms-3'>{t('text59')}</button>
                        </div>
                        <div className="text3 d-flex justify-content-between">
                            <div className="minitext1 d-flex flex-column align-items-end">
                                <h5 className="title">{t('text61')}</h5>
                                <p>{t('text62')}</p>
                                <p>{t('text63')}</p>
                                <p>IL 60604-2340</p>
                            </div>
                            <div className="minitext2 d-flex flex-column align-items-end">
                                <h5 className="title">{t('text64')}</h5>
                                <div className="icons d-flex justify-content-between">
                                    <div className="icon"><FaFacebookF/></div>
                                    <div className="icon"><AiOutlineTwitter/></div>
                                    <div className="icon"><AiOutlineInstagram/></div>
                                    <div className="icon"><AiOutlineGooglePlus/></div>
                                </div>
                                <p className='mt-3'>{t('text65')}</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <BackToButton/>
            </footer>
  )
}

export default Footer