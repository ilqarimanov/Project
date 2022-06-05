import React from 'react'
import {VscDebugBreakpointData} from 'react-icons/vsc'
import { Link } from 'react-router-dom'
import { useTranslation} from "react-i18next";

const BlogItem = (props) => {
  const { t } = useTranslation();
  return (
    <div className="col-lg-3 mx-3 mt-4 col-md-5 col-10 d-flex flex-column justify-content-between miniblog" data-aos="fade-up"  data-aos-duration="2000">
    <img src={props.img} alt="err" />
    <div className="text py-2 d-flex flex-column align-items-center">
      <p className="p1">{props.desc1} <VscDebugBreakpointData/> {props.desc2} </p>
      <h4>{props.title}</h4>
      <p className="time">{props.time} </p>
      <div className="p2">{props.text}</div>
      <div className="icons">

      <div className="end">
      <Link to={props.link} className='link'>{t('text129')}</Link>
      </div>
    </div>
    </div>
  </div>
  )
}

export default BlogItem