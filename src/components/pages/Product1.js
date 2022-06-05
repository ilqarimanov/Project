import React from 'react'
import { useCart } from 'react-use-cart'
import { useTranslation} from "react-i18next";
import Product1Item from './Product1Item';
import data8 from '../data/data8';

const Product1 = () => {
    const { t } = useTranslation();
    const {addItem} = useCart();
  return (
    <div>
         {data8.productData1.map((item,index)=>{
             return(
             <Product1Item
             img={item.img}
             title={t(item.title)}
             price={item.price}
             link1={t(item.link1)}
             link2={t(item.link2)}
             item={item}
             key={index}
             />
             )
            })}
    </div>
  )
}

export default Product1