import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../contexts/AuthProvider';

const Allseller = () => {
    const {user} = useState(AuthContext)
    const [useSeller, setUseSeller] = useState([])

    const { data = [], refetch } = useQuery({
        queryKey: ["categorys"],
        queryFn: () => {
          fetch("https://used-car-resale-market-server.vercel.app/users")
            .then((res) => res.json())
            .then((data) => {
                const allSeller = data.filter((seller) => {
                    return seller.role === "seller";
                  });
                  setUseSeller(allSeller)
            });
        },
      });
      console.log(useSeller);
      const handleDelete = (id) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You Want to Delete?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire("Deleted!", "success");
            fetch(`https://used-car-resale-market-server.vercel.app/users/${id}`, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                if (data.deletedCount > 0) {
                  refetch();
                }
              });
          }
        });
      };
    return (
        <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {useSeller.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td><button onClick={() => handleDelete(user._id)} className="btn btn-error bg-rose-600 btn-xs text-white">Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default Allseller;