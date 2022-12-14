import { async } from "@firebase/util";
import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import Spinner from "../../../components/BigSpinner/Spinner";
import { AuthContext } from "../../../contexts/AuthProvider";
import SignleProduct from "./SignleProduct";

const Myproduct = () => {
  const { user } = useContext(AuthContext);
  const [product, setProduct] = useState([]);

  const { data = [], refetch } = useQuery({
    queryKey: ["category"],
    queryFn: () => {
      fetch("https://used-car-resale-market-server.vercel.app/category")
        .then((res) => res.json())
        .then((data) => {
          const myproducts = data.filter((products) => {
            return products.email === user?.email;
          });
          setProduct(myproducts);
        });
    },
  });
  console.log(product);

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
        fetch(`https://used-car-resale-market-server.vercel.app/category/${id}`, {
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
    <section className="dark:bg-gray-50 dark:text-gray-100 py-6">
      <div className="grid lg:grid-cols-3 gap-4 lg:px-0 px-6">
        {product &&
          product.map((ctg) => (
            <SignleProduct ctg={ctg} handleDelete={handleDelete} />
          ))}
      </div>
    </section>
  );
};

export default Myproduct;
