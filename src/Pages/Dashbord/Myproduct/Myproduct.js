import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import Spinner from '../../../components/BigSpinner/Spinner';
import { AuthContext } from '../../../contexts/AuthProvider';
import SignleProduct from './SignleProduct';

const Myproduct = () => {
    const {user} = useContext(AuthContext)
    const [product, setProduct] =useState([])

    const { data = [], refetch } = useQuery({
        queryKey: ["category"],
        queryFn: () => {
          fetch("http://localhost:5000/category")
            .then((res) => res.json())
            .then((data) => {
              const myproducts = data.filter((products) => {
                return products.email === user?.email;
              });
              setProduct(myproducts);
            });
        },
      });
      console.log(product)

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
            fetch(`http://localhost:5000/category/${id}`, {
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
        <div class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-100 mt-12">
            <div className="overflow-x-auto mb-4">
    <table className="table w-full flex items-center justify-between">
        <thead>
            <tr>
              <th>Avatar</th>
              <th>original_price</th>
              <th>resale_price</th>
              <th>Delete</th>
            </tr>
          </thead>
        </table>
        <div>
            {
                product &&
                product.map(ctg => <SignleProduct ctg={ctg}
                    handleDelete={handleDelete}
                />)
            }
            </div>
      </div>
            
        </div>
    );
};

export default Myproduct;