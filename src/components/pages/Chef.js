import React from 'react'
import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineTwitter, AiOutlineGooglePlus} from 'react-icons/ai'


const Chef = (props) => {
  return (
    <div className="chef col-lg-4 col-md-5 col-10 mt-3 ms-3" data-aos="fade-up"  data-aos-duration="1000">
    <img src={props.img} alt="err" />
    <div className="info p-2 d-flex flex-column align-items-center">
      <p className='p2 d-flex align-items-center justify-content-center'>{props.job}</p>
      <h5>{props.name}</h5>
      <p className='p3'>{props.text}</p>
      <div className="icons d-flex justify-content-between">
        <FaFacebookF className='icon'/>
        <AiOutlineTwitter className='icon'/>
        <AiOutlineGooglePlus className='icon'/>
      </div>
    </div>
  </div>
  )
}

export default Chef