import "./About.css"
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import imgcontact from '../About/img/imgcontact.png';
import imgcontact2 from '../About/img/imgcontact2.png';
import imgcontact1 from '../About/img/imgcontact1.webp';

const About = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
  
    return (
      <Slider {...settings}>
        <div >
          <img className='img' src={imgcontact1} alt="Image 1" />
        
        </div>
        <div className='background'>
          <img className='img1' src={imgcontact} alt="Image 2" />
          <div className="caption" >
            <h1 >Quản Lý Nhà Hàng</h1>
            <h2> SĐT: 035556699</h2>
          </div>
        </div>
        <div>
          <img className='img1' src={imgcontact2} alt="Image 3" />
          <div className="caption" >
            <h1 >Nhân Viên Chăm Sóc Khách Hàng</h1>
            <h2> SĐT: 0224466777</h2>
          </div>
        </div>
      </Slider>
    );
  };
  
  export default About;