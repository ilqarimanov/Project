import React from 'react';

const Box = (props) => {
  return (
      <div data-aos="fade-up"  data-aos-duration="1000" className='box mt-2 col-lg-3 col-md-5 col-10 d-flex flex-column justify-content-between p-3'>
          <div className="img d-flex align-items-center justify-content-center">
            <img src={props.img} alt="err" /> 
          </div>
          <div className="text">
            <h5>{props.title}</h5>
            <p>{props.desc}</p>
          </div>
      </div>
  )
};

export default Box;
