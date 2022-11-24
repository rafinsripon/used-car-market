import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../components/Button/PrimaryButton';

const Category = ({category}) => {
    const {_id ,name, location, resale_price, original_price, years_used, img, discription} = category;
    return (
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-lg border-2 border-gray-100">
        <Link href="/" aria-label="Article">
          <img
            src={img}
            className="object-cover w-full h-64 rounded"
            alt=""
          />
        </Link>
        <div className="py-5 px-4">
          <div className='flex justify-between items-center'>
            <p className="mb-2 text-base font-semibold text-gray-600 uppercase">
                {location}
            </p>
            <p className="mb-2 text-base font-semibold text-gray-600 uppercase mr-4">Used: {years_used}</p>
          </div>
          <Link
            href="/"
            aria-label="Article"
            className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
          >
            <p className="text-2xl font-bold leading-5">{name}</p>
          </Link>
          <p className="mb-4 text-gray-700">
            {discription.slice(0, 85)}
          </p>
          <div className="flex space-x-4">
            <p className='font-bold text-secondary'>original price: {original_price}</p>
            <p className='font-bold text-secondary'>resale price: {resale_price}</p>
          </div>
          <Link to={`/category/${_id}`}>
          <PrimaryButton
                type="submit"
                classes="w-full px-8 py-3 font-semibold rounded-md hover:bg-gray-700 hover:text-gray-100 mt-4"
              >
                Book Now
            </PrimaryButton>
          </Link>
        </div>
      </div>
    );
};

export default Category;