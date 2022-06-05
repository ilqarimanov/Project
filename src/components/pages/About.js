import React from 'react';
import {BiChevronRight} from 'react-icons/bi'
import {NavLink} from 'react-router-dom'
import img20 from '../../assets/img/img20.jpg'
import img21 from '../../assets/img/img21.jpg'
import img22 from '../../assets/img/img22.jpg'
import img23 from '../../assets/img/img23.png'
import img24 from '../../assets/img/img24.png'
import img25 from '../../assets/img/img25.png'
import Chef from './Chef';
import data5 from '../data/data5';
import { useTranslation} from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="about pt-4" >
      <header>
        <div className="container py-5">
          <h1 className='text-center'>{t('text28')}</h1>
          <div className="text d-flex justify-content-center">
            <NavLink to="/" className='navlink text-decoration-none'>{t('text29')}<BiChevronRight/></NavLink>
            <p className='ms-2'>{t('text28')}</p>
          </div>
        </div>
      </header>
      <section className="aboutsection1 py-5 ps-5">
        <div className="row d-flex">
          <div className="col-lg-5 col-md-10 col-10 ms-4" data-aos="fade-up-right" data-aos-duration="2000">
            <h4>{t('text30')}</h4>
            <h1>{t('text31')}</h1>
            <p>{t('text32')}</p>
            <p>{t('text33')}</p>
            <button className='my-3'>{t('text34')}</button>
         </div>
          <div className='col-lg-5 col-md-10 col-10 d-flex col2' >
            <img src={img20} alt="err" className='img1' />
            <div className="img ms-3">
            <img src={img21} alt="err" className='img2'  data-aos="fade-down" data-aos-duration="2000"/>
            <img src={img22} alt="err" className='img3 mt-3'  data-aos="fade-up" data-aos-duration="2000" />
            </div>
          </div>
        </div>
      </section>
      <section className="aboutsection2"></section>
      <section className="aboutsection3 py-5">
        <div className="container d-flex flex-column align-items-center">
        <div className="row d-flex justify-content-between" data-aos="fade-right"  data-aos-duration="2000">
          <div className="col-lg-5 col-md-10 col-10">
            <p className='p1'>{t('text35')}</p>
            <h1>{t('text36')}</h1>
            <p className='p2'>{t('text37')}</p>
            <button className='my-3'>{t('text38')}</button>
          </div>
          <div className="col-lg-7 col-md-10 col-10 bg d-flex align-items-center">
            <img src={img23} alt="err" />
          </div>
        </div>

        <div className="row d-flex justify-content-between my-5" data-aos="fade-left"  data-aos-duration="2000">
        <div className="col-lg-7 col-md-10 col-10 bg d-flex align-items-center">
            <img className='image2' src={img24} alt="err" />
          </div>
          <div className="col-lg-5 col-md-10 col-10">
            <p className='p1'>{t('text35')}</p>
            <h1>Burger</h1>
            <p className='p2'>{t('text39')}</p>
            <button className='my-3'>{t('text38')}</button>
          </div>
        </div>

        <div className="row d-flex justify-content-between" data-aos="fade-right"  data-aos-duration="2000">
          <div className="col-lg-5 col-md-10 col-10">
            <p className='p1'>{t('text35')}</p>
            <h1>{t('text40')}</h1>
            <p className='p2'>{t('text41')}</p>
            <button className='my-3'>{t('text38')}</button>
          </div>
          <div className="col-lg-7 col-md-10 col-10 bg d-flex align-items-center">
            <img src={img25} alt="err" />
          </div>
        </div>
        </div>
      </section>

      <div className="aboutsection4">
        <div className="bg d-flex align-items-center justify-content-center">
          <h1>{t('text42')}</h1>
        </div>
      </div>
      <section className="aboutsection5 my-5" data-aos="fade-up"  data-aos-duration="1000">
        <div className="container">
        <div className="text">
          <p className='p1'>{t('text43')}</p>
          <h1>{t('text44')}</h1>
        </div>
        <div className="row mt-4 d-flex justify-content-center">
          {data5.chef.map((item,index)=>{
            return(
            <Chef
            img={item.img}
            job={t(item.job)}
            name={item.name}
            text={t(item.text)}
            item={item}
            key={index}
            />
            )
            })}
        </div>
        </div>
      </section>
    </div>
    )
};

export default About;
