import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart'
import { useTranslation} from "react-i18next";

const Product1Item = (props) => {
    const { t } = useTranslation();
    const {addItem} = useCart();
  return (
    <div className='product1item py-5'>
       <div className="container pt-5">
       <div className="row py-5 d-flex align-items-center justify-content-center">
            <div className="col-lg-5 col-md-10 col-10 d-flex align-items-center justify-content-center">
                <img src={props.img} alt="err" />
            </div>
            <div className="col-lg-5 col-md-10 col-10 d-flex flex-column  justify-content-center">
                <p>
                    <Link className='link1' to="/">{props.link1}</Link>
                    <Link className='link2' to='/ourmenu'> {props.link2}</Link>
                </p>
                <h1>{props.title}</h1>
                <h5 className='price'>Price: <span>${props.price}</span> </h5>
                <h6 className='mt-2'>{t('text152')}</h6>
                <p>{t('text153')}</p>
                <div className="buttons d-flex">
                <Link className='button1' to="/ourmenu">{t('text154')}</Link>
                <button  className='button2 ms-3' onClick={()=>addItem(props.item)}>{t('text72')}</button>
                </div>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Product1Item