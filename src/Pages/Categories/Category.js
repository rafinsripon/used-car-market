import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Spinner from '../../components/BigSpinner/Spinner';
import { AuthContext } from '../../contexts/AuthProvider';


const Category = ({ct, setBooked}) => {
    const {_id, time, timess, name, location, resale_price, original_price, years_used, img, discription} = ct;

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
            {discription?.slice(0, 80)}
          </p>
          <div className="flex space-x-4">
            <p className='font-bold text-secondary'>original price: ${original_price}</p>
            <p className='font-bold text-secondary'>resale price: ${resale_price}</p>
          </div>
          <div className="flex justify-between px-2">
          <p className='font-bold mt-2 text-rose-600'>{time}</p>
          <p className='font-bold mt-2 text-rose-600'>{timess}</p>
          </div>
          <label 
          onClick={() => setBooked(ct)}
          htmlFor="booking-modal" className="btn w-full rounded-none mt-3">Book Now</label>
        </div>
      </div>
    );
};

export default Category;