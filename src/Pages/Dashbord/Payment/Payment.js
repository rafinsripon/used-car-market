import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const booking = useLoaderData();
    return (
        <div>
            <h2> Your Payment For :- {booking.name}</h2>
        </div>
    );
};

export default Payment;