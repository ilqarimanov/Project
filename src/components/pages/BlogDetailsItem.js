import React from 'react'
import { useTranslation} from "react-i18next";

const BlogDetailsItem = (props) => {
  const { t } = useTranslation();
  return (
    <div className="details py-5" data-aos="fade-up"  data-aos-duration="1000">
    <div className="container">
        <div className="row d-flex justify-content-center">
            <div className=" px-5 col-lg-7 col-md-10 col-10 bg d-flex align-items-center">
                <img src={props.img} alt="err" />
            </div>
            <div className="col-lg-5 col-md-10 col-10">
                <p className='p1'>{t('text35')}</p>
                <h1>{props.title}</h1>
                <p className='p2'>{props.text}</p>
            </div>
        </div>
     </div>    
</div>
  )
}

export default BlogDetailsItem