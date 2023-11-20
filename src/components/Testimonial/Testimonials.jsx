
import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'

const Testimonial = () => {

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,

    responsive:[
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ]
  }

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p>
        Incredible movie booking experience! User-friendly interface, seamless ticketing, and a wide range of movie options. Two thumbs up
        </p>

        <div className='d-flex align-items-center gap-4 mt-3'>
          <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
          <div>
            <h6 className='mb-0 mt-3'>John Doe</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
        I love how easy it is to book tickets on this platform. The layout is clean, and the process is quick. A movie buff's dream come true!
        </p>

        <div className='d-flex align-items-center gap-4 mt-3'>
          <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
          <div>
            <h6 className='mb-0 mt-3'>Lia Franklin</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          Top-notch movie platform! From the vast movie selection to hassle-free payments, it's a joy to use. 5 stars!
        </p>

        <div className='d-flex align-items-center gap-4 mt-3'>
          <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
          <div>
            <h6 className='mb-0 mt-3'>John Doe</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
        Kudos to the team behind this movie booking gem! It's my go-to for all things cinema. Smooth, efficient, and always reliable.
        </p>

        <div className='d-flex align-items-center gap-4 mt-3'>
          <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
          <div>
            <h6 className='mb-0 mt-3'>John Doe</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  )
}

export default Testimonial