import React from 'react'
import './testimonials.css'
import AVTR1 from '../../images/avatar1.jpg'
import AVTR2 from '../../images/avatar2.jpg'
import AVTR3 from '../../images/avatar3.jpg'
import AVTR4 from '../../images/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: AVTR1,
    name: 'Tiana Snow',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque accusamus unde, reprehenderit laborum sunt ducimus enim earum voluptatibus veniam dolor pariatur dolorem, dicta natus quam eum, laudantium quas a maiores.'
  }, 
  {
    avatar: AVTR2,
    name: 'Shatta Wale',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque accusamus unde, reprehenderit laborum sunt ducimus enim earum voluptatibus veniam dolor pariatur dolorem, dicta natus quam eum, laudantium quas a maiores.'
  }, 
  {
    avatar: AVTR3,
    name: 'Kwame Despite',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque accusamus unde, reprehenderit laborum sunt ducimus enim earum voluptatibus veniam dolor pariatur dolorem, dicta natus quam eum, laudantium quas a maiores.'
  }, 
  {
    avatar: AVTR4,
    name: 'Nana Ama Mcbrown',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque accusamus unde, reprehenderit laborum sunt ducimus enim earum voluptatibus veniam dolor pariatur dolorem, dicta natus quam eum, laudantium quas a maiores.'
  }, 
]


const Testimonials = () => {
  return (
    <section id="testimonial">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}

      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className='client__name'>{name}</h5>
                <small className="client__review">
                  {review}
                </small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials