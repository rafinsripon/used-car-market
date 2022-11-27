import React from 'react';
import { Link } from 'react-router-dom';
import banner1 from '../../Assets/Image/bn1.jpg'
import banner2 from '../../Assets/Image/bn2.jpg'
import banner3 from '../../Assets/Image/bn3.jpg'
import banner4 from '../../Assets/Image/bn4.jpg'
import '../../Assets/Style/Style.css'

const Slider = () => {
    return (
        <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={banner1} className="w-full lg:h-auto h-[650px]" alt='' />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle dsply hidden">❮</a>
      <div className='lg:w-1/2 mx-auto text-center'>
      <h1 class="text-4xl font-bold text-white uppercase lg:text-3xl">
        Best Low Prices Used Rasel Market in Bangladesh
        </h1>
        <p className="text-base font-semibold text-gray-200 md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae. explicabo.
              </p>
              <Link to="/blog">
                <button class="tracking-wider px-6 py-2.5 mt-6 text-sm text-white uppercase transition-colors duration-300 transform bg-secondary rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-primary">
                  Learn More
                </button>
              </Link>
      </div>
      <a href="#slide2" className="btn btn-circle dsply hidden">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
  <img src={banner2} className="w-full lg:h-auto h-[650px]" alt='' />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle dsply hidden">❮</a> 
      <div className='lg:w-1/2 mx-auto text-center'>
      <h1 class="text-4xl font-bold text-white uppercase lg:text-3xl">
        Best Low Prices Used Rasel Market in Bangladesh
        </h1>
        <p className="text-base font-semibold text-gray-200 md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae. explicabo.
              </p>
              <Link to="/blog">
                <button class="tracking-wider px-6 py-2.5 mt-6 text-sm text-white uppercase transition-colors duration-300 transform bg-secondary rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-primary">
                  Learn More
                </button>
              </Link>
      </div>
      <a href="#slide3" className="btn btn-circle dsply hidden">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
  <img src={banner3} className="w-full lg:h-auto h-[650px]" alt='' />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle dsply hidden">❮</a> 
      <div className='lg:w-1/2 mx-auto text-center'>
      <h1 class="text-4xl font-bold text-white uppercase lg:text-3xl">
        Best Low Prices Used Rasel Market in Bangladesh
        </h1>
        <p className="text-base font-semibold text-gray-200 md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae. explicabo.
              </p>
              <Link to="/blog">
                <button class="tracking-wider px-6 py-2.5 mt-6 text-sm text-white uppercase transition-colors duration-300 transform bg-secondary rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-primary">
                  Learn More
                </button>
              </Link>
      </div>
      <a href="#slide4" className="btn btn-circle dsply hidden">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
  <img src={banner4} className="w-full lg:h-auto h-[650px]" alt='' />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle dsply hidden">❮</a> 
      <div className='lg:w-1/2 mx-auto text-center'>
      <h1 class="text-4xl font-bold text-white uppercase lg:text-3xl">
        Best Low Prices Used Rasel Market in Bangladesh
        </h1>
        <p className="text-base font-semibold text-gray-200 md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae. explicabo.
              </p>
              <Link to="/blog">
                <button class="tracking-wider px-6 py-2.5 mt-6 text-sm text-white uppercase transition-colors duration-300 transform bg-secondary rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-primary">
                  Learn More
                </button>
              </Link>
      </div>
      <a href="#slide1" className="btn btn-circle dsply hidden">❯</a>
    </div>
  </div>
</div>
    );
};

export default Slider;