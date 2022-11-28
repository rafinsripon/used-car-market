import React from 'react';
import { Link } from 'react-router-dom';
import bnnner from '../../Assets/Image/bn1.jpg'

const BannerSlider = () => {
    return (
        <div className="carousel w-full">
  <div id="slide2" className="carousel-item relative w-full">
    <img src={bnnner} className="w-full lg:h-auto h-[500px]"  alt=''/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide5" className="btn btn-circle">❮</a> 
      <div className='text-center w-2/3'>
        <h2 className='text-6xl font-bold lg:w-1/3 mx-auto text-orange-600 border-4 p-3 border-[#99999963]'>50% <span className='text-white'>OFF</span></h2>
        <p className='text-[#a59d9d] uppercase font-bold mt-3'>Find The Perfect Car For Your Ride, Sports cars might be our specialty here at Road & Track, but luxury cars are a close second.</p>
      </div>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
</div>
    );
};

export default BannerSlider;