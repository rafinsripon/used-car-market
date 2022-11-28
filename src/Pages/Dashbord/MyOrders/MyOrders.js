import { async } from "@firebase/util";
import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const url = `https://used-car-resale-market-server.vercel.app/bookings?email=${user?.email}`;
  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });
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
            {bookings &&
              bookings?.map((booking, i) => (
                <tr key={booking._id}>
                  <td>
                    <div className="avatar">
                      <div className="w-16 rounded-full">
                        <img src={booking.img} alt="" />
                      </div>
                    </div>
                  </td>
                  <td>{booking.productname}</td>
                  <td>{booking.resaleprice}</td>
                  <td>
                    {booking.resaleprice && !booking.paid && (
                      <Link>
                        <button className="btn btn-sm btn-primary text-gray-900">
                          pay
                        </button>
                      </Link>
                    )}
                    {booking.resaleprice && booking.paid && (
                      <span className="text-rose-600">paid</span>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
