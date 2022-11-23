import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../../Assets/Image/bner1.jpg'

const Banner = () => {
    return (
        <div className="relative px-4 pt-16 mx-auto lg:py-32 md:px-8 xl:px-20 sm:max-w-xl md:max-w-full">
      <div className="max-w-xl mx-auto lg:max-w-screen-xl">
        <div className="mb-16 lg:max-w-lg lg:mb-0">
          <div className="max-w-xl mb-6">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-base font-bold tracking-wider text-secondary uppercase rounded-full bg-primary">
               Used Car Market
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Best Low Prices Used 
              <br className="hidden md:block" />
              Rasel Market{' '}
              <span className="inline-block text-primary">
                in Bangladesh
              </span>
            </h2>
            <p className="text-base font-semibold text-gray-700 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae. explicabo.
            </p>
          </div>
          <div className="flex items-center">
            <Link
              to="/"
              aria-label=""
              className="inline-flex text-secondary font-bold items-center transition-colors duration-200 hover:bg-[#00d8d8] bg-primary py-2 px-10"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center h-full overflow-hidden lg:w-2/3 xl:w-1/2 lg:absolute lg:justify-start lg:bottom-0 lg:right-0 lg:items-end">
        <img
          src={banner}
          className="object-cover object-top w-full h-64 max-w-xl -mb-16 rounded shadow-2xl lg:ml-64 xl:ml-8 lg:-mb-24 xl:-mb-28 lg:h-[560px] lg:max-w-screen-md"
          alt=""
        />
      </div>
    </div>
    );
};

export default Banner;