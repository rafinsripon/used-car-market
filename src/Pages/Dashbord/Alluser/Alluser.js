import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2'

const Alluser = () => {

    const {data: users = [], refetch} = useQuery({
        queryKey : ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users')
            const data = await res.json();
            return data;
        }
    })

    const handleMakeAdmin = (id) => {
      fetch(`http://localhost:5000/users/admin/${id}`, {
        method: 'PUT', 
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if(data.modifiedCount){
          toast.success('user admin success fully');
          refetch();
      }
      })

    }


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
          fetch(`http://localhost:5000/users/${id}`, {
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
              <th>Admin</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                    {user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user?._id)} className="btn btn-secondary btn-xs text-white">Make Admin</button>}
                </td>
                <td><button onClick={() => handleDelete(user._id)} className="btn btn-error bg-rose-600 btn-xs text-white">Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default Alluser;