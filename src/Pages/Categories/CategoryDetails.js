import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../../components/BookingModal/BookingModal';
import Category from './Category';

const CategoryDetails = () => {
    const categorys = useLoaderData();
    const [booked, setBooked]  = useState(null)

    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {
                categorys.map(ct => <Category 
                key={ct._id}
                ct={ct}
                setBooked={setBooked}
                />)
            }
            </div>  
            {
                booked && <BookingModal 
                booked={booked}
                setBooked={setBooked}/>
            }
        </div>
    );
};

export default CategoryDetails;