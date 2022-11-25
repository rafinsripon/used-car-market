import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyOrders = () => {
    const {user} = useContext(AuthContext);
    console.log(user);
    const url = `http://localhost:5000/bookings?email=${user?.email}`
    const {data: bookings = []} = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json();
            return data;
            
        }
    })
    return (
        <div>
            <div className="overflow-x-auto mb-4">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>price</th>
                            <th>pay</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings?.map((booking, i) => <tr key={booking._id}>
                                {/* <th>{i + 1}</th> */}
                                <td><div className="avatar">
                                    <div className="w-16 rounded-full">
                                        <img src={booking.img} alt="" />
                                    </div>
                                    </div>
                                </td>
                                <td>{booking.productname}</td>
                                <td>{booking.resaleprice}</td>
                                <td>
                                <button className="btn btn-sm btn-primary text-gray-900">pay</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;