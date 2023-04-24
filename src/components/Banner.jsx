import React from 'react'
import HomeBanner from "../images/banner.jpg"
import "../stylesheet/Banner.css";
const Banner = () => {
  return (
    <div className='Banner__container'>
        <div className="Banner">
        <img src={HomeBanner} alt="Banner" className='HomeBanner'/>
        </div>
        <div className="Categories__available">
          <div className="Category__title">
             <h2>All Categories</h2> 
          </div>
            <div className="Actual__categories">
            <h4 className='Categories__inStock'>Coolers</h4>
          <h4 className='Categories__inStock'>StudyTables</h4>
          <h4 className='Categories__inStock'>Inductions</h4>
            </div>
          
          
        </div>
      
    </div>
  )
}

export default Banner
