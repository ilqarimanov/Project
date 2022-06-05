import React from 'react';
import img15 from '../../assets/img/img15.png'
import data4 from '../data/data4';
import ProductItem3 from './ProductItem3';
import { NavLink } from 'react-router-dom';
import { useTranslation} from "react-i18next";

const BestProduct = () => {
  const { t } = useTranslation();
  return(
    <div className='bestproduct py-5' >
      <div className="container mt-5">
      <section className='best'>
                <div className="container">
                    <p className='best'>{t('text26')}</p>
                    <div className="row d-flex justify-content-center align-items-center">
                        {data4.productData2.map((item,index)=>{
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
          <section className='cooking' data-aos="fade-up"  data-aos-duration="1000">
            <h3>{t('text45')}</h3>
            <div className="row d-flex justify-content-center mt-4">
              <div className="col1 col-lg-4 col-md-5 col-10 mt-3"></div>
              <div className="col2 col-lg-4 col-md-5 col-10 mt-3"></div>
              <div className="col3 col-lg-4 col-md-5 col-10 mt-3"></div>
            </div>
          </section>
        <div className="burger d-flex flex-column align-items-center">
          <img className='mt-5' src={img15} alt="err" />
        </div>

      </div>
    </div>
  ) 
};

export default BestProduct;
