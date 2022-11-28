import React from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const SignleProduct = ({ ctg, handleDelete }) => {
  // const {original_price, resale_price} = categori;
  console.log(ctg);

  const handleAdver = () => {
    console.log(ctg);
    fetch("https://used-car-resale-market-server.vercel.app/advertise", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ ctg }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Advertise added Successfully");
      });
  };
  return (
    <div className="flex flex-col justify-center px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-gray-200 dark:text-gray-800 shadow-xl">
				<img alt="Img Not Found" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500" src={ctg.img} />
				<div className="flex-1 my-4">
					<p className="text-xl font-semibold leading-snug">{ctg?.name}</p>
					<div className="flex">
          <p className="font-semibold">Resale Price: {ctg.resale_price ? ctg.resale_price : "No Price Added"}</p>
					<p className="font-semibold">Original Price: {ctg.original_price ? ctg.original_price : "No Price Added"}</p>
          </div>
				</div>
				<div className="flex items-center justify-center p-3 space-x-3 border-t-2">
        <button
              onClick={() => handleAdver(ctg)}
              className="btn rounded-none btn-primary text-gray-900"
            >
              Advertise{" "}
            </button>
            <button
              onClick={() => handleDelete(ctg._id)}
              className="btn rounded-none btn-primary text-gray-900"
            >
              Delete{" "}
            </button>
				</div>
		</div>
  );
};

export default SignleProduct;
