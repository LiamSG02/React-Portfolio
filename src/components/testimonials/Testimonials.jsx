import React from 'react'
import './testimonials.css'
import AVTR1 from '../../images/avatar1.jpg'
import AVTR2 from '../../images/avatar2.jpg'
import AVTR3 from '../../images/avatar3.jpg'
import AVTR4 from '../../images/avatar4.jpg'

const Testimonials = () => {
  return (
    <section id="testimonial">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5 className='client__name'>Ernest Achiever</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci sed suscipit laudantium repellat fugit deserunt totam eius consectetur sint non? Maxime aspernatur delectus animi alias voluptatem consequuntur ducimus enim dolorum?
            </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5 className='client__name'>Ernest Achiever</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci sed suscipit laudantium repellat fugit deserunt totam eius consectetur sint non? Maxime aspernatur delectus animi alias voluptatem consequuntur ducimus enim dolorum?
            </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5 className='client__name'>Ernest Achiever</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci sed suscipit laudantium repellat fugit deserunt totam eius consectetur sint non? Maxime aspernatur delectus animi alias voluptatem consequuntur ducimus enim dolorum?
            </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5 className='client__name'>Ernest Achiever</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci sed suscipit laudantium repellat fugit deserunt totam eius consectetur sint non? Maxime aspernatur delectus animi alias voluptatem consequuntur ducimus enim dolorum?
            </small>
        </article>
      </div>
    </section>
  )
}

export default Testimonials