import React from 'react';
import { useCart } from 'react-use-cart'
import { useTranslation} from "react-i18next";

const ProductItem3 = (props) => {
  const { t } = useTranslation();
    const {addItem} = useCart();
  return( 
    <div className="col-lg-4 col-md-5 col-10 d-flex flex-column align-items-center" data-aos="zoom-in"  data-aos-duration="1000">
        <img src={props.img} alt="err" />
        <div className="text">
             <p className="title">{props.title}</p>
             <div className="star">{props.star}</div>
             <p className="price">${props.price}</p>
             <button className='px-4 py-2' onClick={()=>addItem(props.item)}>{t('text72')} 🛒</button>
        </div>
    </div>
    )
};

export default ProductItem3;
