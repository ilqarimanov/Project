import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useCart } from 'react-use-cart';
import slider1 from '../../assets/img/slider1.png'
import slider3 from '../../assets/img/slider3.png'
import data1 from '../data/data1';
import data2 from '../data/data2';
import data3 from '../data/data3';
import data4 from '../data/data4';
import Box from './Box';
import ProductItem1 from './ProductItem1';
import ProductItem2 from './ProductItem2';
import ProductItem3 from './ProductItem3';
import img7 from '../../assets/img/img7.png'
import img8 from '../../assets/img/img8.jpg'
import img5 from '../../assets/img/img5.jpg'
import img9 from '../../assets/img/img9.png'
import img10 from '../../assets/img/img10.png'
import img11 from '../../assets/img/img11.png'
import img12 from '../../assets/img/img12.png'
import img13 from '../../assets/img/img13.png'
import {GiPizzaSlice} from 'react-icons/gi'
import { useTranslation} from "react-i18next";

const Home = (props) => {
// Carousel Start
var settings = {
    speed: 500,
    slidesToShow: 2,
    infinite: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
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
const [darkMode, setDarkMode] = useState(false)  
const [id, setid] = useState(props.id);

useEffect(()=>{
      localStorage.setItem('id', id);
},[id])
const{totalItems,addItem}=useCart();
const { t } = useTranslation();
    return ( 
        <div className='home'>
{/* Header start */}
            <header>
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                     <div className="carousel-indicators">
                         <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                         <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
                         <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active item item1">
                            <div className="bg">
                                <div className="product container d-flex align-items-center justify-content-center">
                                    <div className="productbg d-flex flex-column align-items-center justify-content-center">
                                       <div>
                                           <h1 data-aos="fade-right"  data-aos-duration="1000">{t('text1')}</h1>
                                       <img data-aos="zoom-in"  data-aos-duration="1000" src={slider1} alt="err" />
                                       <h1 data-aos="fade-left"  data-aos-duration="1000">{t('text2')}</h1>
                                       </div>
                                      
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item item item2">
                            <div className="container  d-flex flex-column justify-content-center align-items-center ">
                               <h5 >{t('text3')}</h5>
                               <h1>{t('text4')}</h1>
                            </div>
                            
                        </div>
                        <div className="carousel-item item item3 ">
                            <div className="container d-flex justify-content-between align-items-center px-3">
                                <div className="text d-flex flex-column align-items-center justify-content-center">
                                    <h1>{t('text5')}</h1>
                                    <NavLink to='/ourmenu' className='menu px-5 py-2'>{t('text6')}</NavLink>
                                </div>
                                <img src={slider3}  alt="err" />
                            </div>
                         
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </header>
{/* Header End */}
{/* Section1 Start */}
            <section className='section1 mt-5 py-4'>
                <div className="container">
                    <div className="row d-flex justify-content-between ">
                        {data2.box.map((item,index)=>{
                            return(
                            <Box
                            img={item.img}
                            title={t(item.title)}
                            desc={t(item.desc)}
                            item={item}
                            key={index}
                            />
                            )
                            })}
                    </div>

                </div>
            </section>
{/* Section1 End */}

{/* Section2 Start */}

            <section className='section2 py-5' data-aos="fade-up"  data-aos-duration="1000">
                <div className="container">
                    <div className='slider'>
                        <p className='menu mb-5'>{t('text7')}</p>
                        <div className="buttons d-flex justify-content-between">
                         <button className='button mb-5 ' id="1" onClick={()=>setid(1)} ><img src={img9} alt="err"/> {t('text8')} </button>
                         <button className='button px-2'  id="2" onClick={()=>setid(2)} ><GiPizzaSlice className='icon'/> {t('text9')}</button>
                         <button className='button px-2'  id="3" onClick={()=>setid(3)} ><img src={img10} alt="err"/> {t('text10')} </button>
                         <button className='button px-2'  id="4" onClick={()=>setid(4)} ><img src={img11} alt="err"/> {t('text11')} </button>
                         <button className='button px-2'  id="5" onClick={()=>setid(5)} ><img src={img12} alt="err"/>{t('text12')}  </button>
                         <button className='button px-2'  id="6" onClick={()=>setid(6)} ><img src={img13} alt="err"/>{t('text13')}</button>
                         </div>
                         {(() => {
                             if (id==1) {
                                 return (
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
                                            )
                                        } else if (id==2) {
                                            return (
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
                                    )
                                } else if (id==3) {
                                    return (
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
                                    )
                                }else if (id==4) {
                                    return (
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
                                    )
                                }else if (id==5) {
                                    return (
                                    <Slider className='slider1' {...settings}>
                                        {data3.productData6.map((item,index)=>{
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
                                    )
                                }else if (id==6) {
                                    return (
                                    <Slider className='slider1' {...settings}>
                                        {data3.productData7.map((item,index)=>{
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
                                    )
                                }
                                })()} 
                    </div>
                </div>
            </section>
{/* Section2 End */}
{/* Section3 Start */}
            <section className='section3 d-flex align-items-center justify-content-center'>
                <div className='bg1' >
                <div className="bg"></div>
                </div>
                <div className="container ms-5">
                    <h5 className='ps-5' >{t('text14')}</h5>
                    <h1 className='ps-5' >{t('text15')}</h1>
                    <NavLink to='/ourmenu' className='menu mt-3 ms-5 px-5 py-2'>{t('text6')}</NavLink>
                </div>
            </section>
{/* Section3 End */}

{/* Section4 Start */}
            <section className='section4 py-5' data-aos="fade-up"  data-aos-duration="1000">
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
                            item={item}
                            key={index}
                            />
                            )
                            })}
                    </div>
                </div>
            </section>
{/* Section4 End */}

{/* Section5 Start */}
            <section className='section5 mt-5'>
                <div className="container pt-4 ps-5">
                    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active item px-5 py-3">
                                <div className="title">
                                    <p>🍕</p>
                                    <h5>{t('text18')}</h5>
                                </div>
                                <p className='mt-4'>{t('text19')} <br /> {t('text20')}</p>
                                <NavLink to="/ourmenu" className='menu px-3 py-1'>{t('text6')}</NavLink>  
                            </div>
                            <div className="carousel-item item px-5 py-3">
                                <div className="title">
                                    <img src={img7} alt="err" />
                                    <h5>{t('text21')}</h5>
                                </div>
                                <p className='mt-4'>{t('text22')}</p>
                                <NavLink to="/ourmenu" className='menu px-3 py-1'>{t('text6')}</NavLink>  
                            </div>
                        </div>
                    <button className="carousel-control-prev my-auto" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden ">Previous</span>
                    </button>
                    <button className="carousel-control-next my-auto" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                 </div>
                </div>
            </section>
{/* Section5 End */}

{/* Section6 Start */}
            <section className='section6 py-5'>
                <div className="container">
                        <img src={img8} className='img1' alt="err" />
                        <div className="text p-5">
                           <h4 className='mt-3'>{t('text23')}</h4>
                           <p className='mt-4'>{t('text24')}</p>
                           <button>
                                <NavLink to='/deliverytime' className='button mt-3'>{t('text25')}</NavLink>
                           </button>
                         </div>
                         <div className="red"></div>
                         <img className='img2' src={img5} alt="err" />
                   
                </div>
            </section>
{/* Section6 End */}

{/* Section7 Start */}
            <section className='section7 mt-5' data-aos="fade-up"  data-aos-duration="1000">
                <div className="container">
                    <p className='best'>{t('text26')}</p>
                    <div className="row d-flex justify-content-center align-items-center">
                        {data4.productData1.map((item,index)=>{
                            return(
                            <ProductItem3
                            img={item.img}
                            title={t(item.title)}
                            price={item.price}
                            star={item.star}
                            item={item}
                            key={index}
                            />
                            )
                            })}
                    </div>
                    <NavLink to="/ourmenu" className="all1"><p className='text-center my-5 py-2 all mx-auto'>{t('text27')}</p></NavLink>
                    
                </div>
            </section>
{/* Section7 End */}

        </div>
    )
}
Home.defaultProps={
    id: 1
  }
export default Home
