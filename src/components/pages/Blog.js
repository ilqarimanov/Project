import React from 'react'
import data6 from '../data/data6'
import BlogItem from './BlogItem'
import { useTranslation} from "react-i18next";


const Blog = () => {
    const { t } = useTranslation();
    return (
        <div className="blog py-5" data-aos="fade-up"  data-aos-duration="2000">
            <div className="row d-flex justify-content-center align-items-center px-5 mt-5">
            {data6.blog.map((item,index)=>{
                        return(
                            <BlogItem
                            img={item.img}
                            title={t(item.title)}
                            desc1={t(item.desc1)}
                            desc2={t(item.desc2)}
                            time={t(item.time)}
                            text={t(item.text)}
                            link={t(item.link)}
                            item={item}
                            key={index}
                            />
                        )
                    })}
            </div>
      </div>
    )
}

export default Blog
