import React from 'react'
import { useCart } from 'react-use-cart'
import {ImBin} from 'react-icons/im'
import { useTranslation} from "react-i18next";

const Card = () => {
    const { t } = useTranslation();
    const {
        isEmpty,
        totalUniqueItems,
        items, totalItems,
        cartTotal, updateItemQuantity,
        removeItem,
        emptyCart} = useCart();

    if (isEmpty) return <h1 className='text-center my-5 empty'>Your Cart is Empty</h1>
    return (
        <div className='card py-5'>
            <div className="py-5 container">
                <div className="row d-flex justify-content-evenly align-items-start">
                    <div className="col-lg-7 col-md-10 col-10 carditems mb-3">
                        {items.map((item, index) => {
                            return (
                            <div className='carditem px-3 py-4'  key={index}>
                                <div className="main d-flex justify-content-between">
                                    <div className='me-3'>
                                        <p className='name my-auto'>{t(item.title)}</p>
                                        <img src={item.img} style={{ height: '6rem' }} />
                                    </div>
                                    <div>
                                        <div className='d-flex'>
                                            <p  className='title'>{t('text48')}</p>
                                            <p className='fw-bold'>${item.price}</p>
                                        </div>
                                        <div>
                                            <p  className='title'>{t('text49')}</p>
                                            <div className='d-flex'>
                                                <button className='btn btn1' onClick={() =>
                                                updateItemQuantity(item.id, item.quantity - 1)
                                                }>-</button>
                                                
                                                <p className='mx-2 my-auto '>{item.quantity}</p>
                                                
                                                <button className='btn btn1' onClick={() =>
                                                updateItemQuantity(item.id, item.quantity + 1)
                                                }>+</button>
                                            </div>
                                        </div>
                                    </div>
                                    <button className='btn btn2 my-auto' onClick={()=>removeItem(item.id)}><ImBin/></button>
                                </div>
                            </div>
                            )
                            })}
                </div>
                    <div className="col2 col-lg-4 col-md-10 col-10 d-flex align-items-center justify-content-center mt-3">
                        <div className="total p-3">
                            <b>{t('text50')}</b>
                            <hr />
                            <div className='d-flex justify-content-between'>
                                <b>{t('text51')}</b>
                                <b className='carttotal'>${cartTotal}</b>
                            </div>
                             <button onClick={()=>emptyCart()} className="button1 mt-4">{t('text52')}</button>
                             <button className='button2 mt-2'>{t('text53')}</button>
                        </div>
                       
                    </div>

                </div>
            

            </div>
        </div>
    )
}

export default Card