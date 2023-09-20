
import { Navigation, Pagination, EffectCoverflow, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  ev1, ev2, ev3, ev4, ev5, ev6, ev7, ev8,
  ev9, ev10, ev11, ev12, ev13, ev14, ev15
} from '../../assets';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useState } from 'react';


export const PastEvents = () => {
  const imgsArr = [ev1, ev2, ev3, ev4, ev5, ev6, ev7, ev8,
    ev9, ev10, ev11, ev12, ev13, ev14, ev15];
  const [swiper, setSwiper] = useState({})
  return <div className="PastEvents-sec sec">
    <div className="sec-container">
      <h2>Past Events</h2>
      <div className="content">
        <Swiper
          onInit={(sw) => setSwiper(sw)}
          effect='coverflow'
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={2}
          pagination={{ clickable: true }}
          spaceBetween={5}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 20,
            modifier: 10,
          }}
          modules={[EffectCoverflow, Pagination, Navigation, A11y]}
          className='swiper_container container-wheel'
        >
          {
            imgsArr.map((img, i) => {
              return <SwiperSlide key={img} onClick={() => swiper.slideTo(i)}>
                <img src={img} alt="image" className="cursor-pointer" />
              </SwiperSlide>
            })
          }
        </Swiper>
      </div>
    </div>
  </div >;
};



