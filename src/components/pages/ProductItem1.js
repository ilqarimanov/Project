import React from 'react'
import { useCart } from 'react-use-cart'
import { useTranslation} from "react-i18next";

const ProductItem = (props) => {
  const { t } = useTranslation();
    const {addItem} = useCart();
    return (
        <div className="col-lg-5 col-md-10 col-10 product mt-2 " data-aos="fade-up"  data-aos-duration="1000">
          <img src={props.img} alt="err" />
          <div className="text ps-3 pt-5">
            <p className="title">{props.title}</p>
            <p className="price">${props.price}</p>
            <button onClick={()=>addItem(props.item)}>{t('text72')}</button>
          </div>
      </div>
    )
}

export default ProductItem