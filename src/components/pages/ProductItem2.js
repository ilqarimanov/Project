import React from 'react';
import { useCart } from 'react-use-cart'
import { useTranslation} from "react-i18next";
import { Link } from 'react-router-dom'

const ProductItem2 = (props) => {
    const { t } = useTranslation();
    const {addItem} = useCart();
  return (
    <div data-aos="flip-left" data-aos-duration="3000">
        <div className='item d-flex  align-items-center justify-content-around pe-5 ms-4' >
            <img src={props.img} />
            <div className="text">
                <p className="title" id='title'>{props.title}</p>
                <div className="star">{props.star}</div>
                <p className="price">${props.price}</p>
                <button className='button1' onClick={()=>addItem(props.item)}>{t('text72')}🛒</button>
                <button className='mt-2 button3'><Link className="button2" to={props.link}>{t('text25')}</Link></button>
            </div>
        </div >
    </div>
    )
};

export default ProductItem2;
