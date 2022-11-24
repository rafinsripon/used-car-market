import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Spinner from "../../components/BigSpinner/Spinner";
import PrimaryButton from "../../components/Button/PrimaryButton";
import { AuthContext } from "../../contexts/AuthProvider";
import Category from "./Category";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data)
        console.log(data)
      });
  }, []);


  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <h1 className='text-6xl mb-10'>Category Here</h1>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {
          categories.map(category => <div key={category._id}>
            <Link>
              
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src={category.img}
                alt=""
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <Link to={`/categorys/${category.c_id
                  }`}>
                  <PrimaryButton classes="w-full px-8 py-3 font-semibold rounded-md hover:bg-gray-700 hover:text-gray-100 mt-4">
                    {category.name}
                  </PrimaryButton>
                  </Link>
              </div>
            </div>
            </Link>
          </div>)
        }
      </div>
    </div>
  );
};

export default Categories;
