import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../../components/Button/PrimaryButton";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="mb-10">
        <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-secondary">
          OUR <br />Used Best Categories
        </h1>

        <div class="mt-2">
          <span class="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
          <span class="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
          <span class="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
        </div>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <div key={category._id}>
            <Link>
              <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                <img
                  className="object-cover w-full h-56 md:h-64 xl:h-80"
                  src={category.img}
                  alt=""
                />
                <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                  <Link to={`/categorys/${category.c_id}`}>
                    <PrimaryButton classes="w-full px-8 py-3 font-semibold rounded-md hover:bg-gray-700 hover:text-gray-100 mt-4">
                      {category.name}
                    </PrimaryButton>
                  </Link>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
