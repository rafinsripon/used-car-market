import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../../components/BigSpinner/Spinner';

const Advertice = () => {
  //advertices
    const {data: advertise = []} = useQuery({
        queryKey: ['advertice'],
        queryFn: async() => {
            const res = await fetch('https://used-car-resale-market-server.vercel.app/advertise')
            const data = await res.json()
            console.log(data)
            return data;
        }
    })
    return (
        <>
        <div className='bg-[#dddddd63]'>
        {
            advertise.length > 0 && <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
            {
                advertise.map(ad => <div key={ad?.ctg?._id} className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-lg border-2 border-gray-100">
                <Link href="/" aria-label="Article">
                  <img
                    src={ad?.ctg?.img}
                    className="object-cover w-full h-64 rounded"
                    alt=""
                  />
                </Link>
                <div className="py-5 px-4">
                  <div className='flex justify-between items-center'>
                    <p className="mb-2 text-base font-semibold text-gray-600 uppercase">
                        {ad?.ctg?.location}
                    </p>
                    <p className="mb-2 text-base font-semibold text-gray-600 uppercase mr-4">Used: {ad?.ctg?.years_used}</p>
                  </div>
                  <Link
                    href="/"
                    aria-label="Article"
                    className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                  >
                    <p className="text-2xl font-bold leading-5">{ad?.ctg?.name}</p>
                  </Link>
                  <p className="mb-4 text-gray-700">
                    {ad?.ctg?.discription?.slice(0, 80)}
                  </p>
                  <div className="flex space-x-4">
                    <p className='font-bold text-secondary'>original price: ${ad?.ctg?.original_price}</p>
                    <p className='font-bold text-secondary'>resale price: ${ad?.ctg?.resale_price}</p>
                  </div>
                  <div className="flex justify-between px-2">
                  <p className='font-bold mt-2 text-rose-600'>{ad?.ctg?.time}</p>
                  <p className='font-bold mt-2 text-rose-600'>{ad?.ctg?.timess}</p>
                  </div>
                </div>
              </div>)
            }
        </div>
        }
        </div>
        </>
    );
};

export default Advertice;