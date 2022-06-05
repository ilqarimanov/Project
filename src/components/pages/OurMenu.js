import React from 'react';
import data3 from '../data/data3'
import data1 from '../data/data1'
import ProductItem1 from './ProductItem1'
import ProductItem2 from './ProductItem2'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img9 from '../../assets/img/img9.png'
import img10 from '../../assets/img/img10.png'
import img11 from '../../assets/img/img11.png'
import img12 from '../../assets/img/img12.png'
import img13 from '../../assets/img/img13.png'
import {GiPizzaSlice} from 'react-icons/gi'
import { useTranslation} from "react-i18next";

const OurMenu = () => {
  const { t } = useTranslation();
  // Carousel Start
var settings = {
  speed: 500,
  slidesToShow: 3,
  infinite: true,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        infinite: true,
      }
    },
    {
      breakpoint: 995,
      settings: {
        slidesToShow: 1,
        initialSlide: 1
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
};
// Carousel End
  return (
      <div className='ourmenu pt-5'>
        <div className="container pb-5">
          <div>
            <div className="text d-flex justify-content-center">
              <button className='button mt-5 mb-3'><img src={img9} alt="err"/>{t('text8')}</button>
            </div>
            <Slider className='slider1' {...settings}>
             {data3.productData2.map((item,index)=>{
             return(
             <ProductItem2
             img={item.img}
             title={t(item.title)}
             price={item.price}
             star={item.star}
             link={item.link}
             item={item}
             key={index}
             />
             )
            })}
            </Slider>
          </div>

          <div>
            <div className="text d-flex justify-content-center">
              <button className='button mt-5 mb-3'><GiPizzaSlice className='icon'/> {t('text9')} </button>
            </div>
            <Slider className='slider1' {...settings}>
              {data3.productData3.map((item,index)=>{
              return(
              <ProductItem2
              img={item.img}
              title={t(item.title)}
              price={item.price}
              star={item.star}
              link={item.link}
              item={item}
              key={index}
              />
              )
              })}
            </Slider>
          </div>

          <div>
            <div className="text d-flex justify-content-center">
              <button className='button mt-5 mb-3'><img src={img10} alt="err"/> {t('text10')} </button>
            </div>
            <Slider className='slider1' {...settings}>
              {data3.productData4.map((item,index)=>{
                return(
                  <ProductItem2
                  img={item.img}
                  title={t(item.title)}
                  price={item.price}
                  star={item.star}
                  link={item.link}
                  item={item}
                  key={index}
                  />
                  )
                  })}
            </Slider>
          </div>

          <div>
            <div className="text d-flex justify-content-center">
              <button className='button mt-5 mb-3'><img src={img11} alt="err"/> {t('text11')} </button>
            </div>
            <Slider className='slider1' {...settings}>
              {data3.productData5.map((item,index)=>{
                return(
                <ProductItem2
                img={item.img}
                title={t(item.title)}
                price={item.price}
                star={item.star}
                link={item.link}
                item={item}
                key={index}
                />
                )
                })}
            </Slider>
          </div>

          <div>
            <div className="text d-flex justify-content-center">
              <button className='button mt-5 mb-3'><img src={img12} alt="err"/>{t('text12')}</button>
            </div>
            <Slider className='slider1' {...settings}>
              {data3.productData6.map((item,index)=>{
                return(
                <ProductItem2
                img={item.img}
                title={t(item.title)}
                price={item.price}
                link={item.link}
                star={item.star}
                item={item}
                key={index}
                />
                )
                })}
            </Slider>
          </div>

          <div>
            <div className="text d-flex justify-content-center">
              <button className='button mt-5 mb-3'><img src={img13} alt="err"/> {t('text13')} </button>
            </div>
            <Slider className='slider1' {...settings}>
              {data3.productData7.map((item,index)=>{
                return(
                <ProductItem2
                img={item.img}
                title={t(item.title)}
                price={item.price}
                link={item.link}
                star={item.star}
                item={item}
                key={index}
                />
                )
                })}
            </Slider>
          </div>
       
          
          </div>
          <section className='burgermenu py-5'>
                <div className="container">
                   <div className="d-flex flex-column align-items-center">
                   <h1>{t('text16')}</h1>
                    <p className='mt-3'>{t('text17')}</p>
                   </div>
                    <div className="row d-flex justify-content-around mt-4">
                        {data1.productData1.map((item,index)=>{
                            return(
                            <ProductItem1
                            img={item.img}
                            title={t(item.title)}
                            price={item.price}
                            link={item.link}
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

export default OurMenu;
