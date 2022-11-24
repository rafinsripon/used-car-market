import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../../Assets/Image/bner1.jpg'

const Banner = () => {
    return (
      <div className="relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0">
      <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
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
      <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
        <img
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
          src={banner}
          alt=""
        />
      </div>
    </div>
    );
};

export default Banner;