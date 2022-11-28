import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SmallSpinner from "../../../components/BigSpinner/SmallSpinner";
import Spinner from "../../../components/BigSpinner/Spinner";
import { AuthContext } from "../../../contexts/AuthProvider";

const AddProduct = () => {
  // const [loading, setLoading] = useState(false);
  const {user} = useContext(AuthContext)
  const navigate = useNavigate();


  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const originalprice = form.originalprice.value;
    const resaleprice = form.resaleprice.value;
    const location = form.location.value;
    const phone = form.phone.value;
    const purchase = form.purchase.value;
    const condition = form.condition.value;
    const category = form.category.value;
    const message = form.message.value;
    // Image Upload
    const image = event.target.image.files[0];
    console.log(image);
    const formData = new FormData();
    formData.append("image", image);
    const url ="https://api.imgbb.com/1/upload?key=8f48b3fadb3c555b43a1283d391d1aa7";
    console.log(url);

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        const image = data.data.display_url;
        // const date = ;
        const addproduct = {
          category_id: category,
          name: name,
          original_price: originalprice,
          resale_price: resaleprice,
          location: location,
          img: image,
          phone,
          years_used: purchase,
          condition,
          category,
          email: user.email,
          time: new Date().toLocaleDateString(),
          timess: new Date().toLocaleTimeString(),
          discription: message,
        };
        console.log(addproduct);
        fetch("https://used-car-resale-market-server.vercel.app/category", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(addproduct),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            toast.success(`Product Added is added successfully`);
            form.reset();
          });
      });
  };

  
  // fetch('https://used-car-resale-market-server.vercel.app/addproduct', {
  //   method: 'POST',
  //   headers: {
  //     'content-type': 'application/json'
  //   },
  //   body: JSON.stringify(addproduct)
  // })
  // .then(res => res.json())
  // .then(data => console.log('myproductsData:', data))
  return (
    <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-100 mt-12">
      <h2 class="text-lg font-semibold text-gray-900 capitalize">
        Add A Products
      </h2>

      <form onSubmit={handleSubmit}>
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label
              class="text-gray-900 font-bold dark:text-gray-900"
              for="productname"
            >
              Productname
            </label>
            <input
              name="name"
              id="name"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-900 bg-white border border-gray-200 rounded-md dark:bg-gray-100 dark:text-gray-900 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label class="text-gray-900 font-bold dark:text-gray-900" htmlFor="image">
              Product Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              class="block w-full px-4 py-2 mt-2 text-gray-900 bg-white border border-gray-200 rounded-md dark:bg-gray-100 dark:text-gray-900 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label
              class="text-gray-900 font-bold dark:text-gray-900"
              for="price"
            >
              Original price
            </label>
            <input
              name="originalprice"
              id="originalprice"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-900 bg-white border border-gray-200 rounded-md dark:bg-gray-100 dark:text-gray-900 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label
              class="text-gray-900 font-bold dark:text-gray-900"
              for="price"
            >
              Resale price
            </label>
            <input
              name="resaleprice"
              id="resaleprice"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-900 bg-white border border-gray-200 rounded-md dark:bg-gray-100 dark:text-gray-900 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label
              class="text-gray-900 font-bold dark:text-gray-900"
              for="location"
            >
              Location
            </label>
            <input
              name="location"
              id="location"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-900 bg-white border border-gray-200 rounded-md dark:bg-gray-100 dark:text-gray-900 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label
              class="text-gray-900 font-bold dark:text-gray-900"
              for="phone"
            >
              Phone Number
            </label>
            <input
              name="phone"
              id="phone"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-900 bg-white border border-gray-200 rounded-md dark:bg-gray-100 dark:text-gray-900 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label
              class="text-gray-900 font-bold dark:text-gray-900"
              for="phone"
            >
              Year of purchase
            </label>
            <input
              name="purchase"
              id="purchase"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-900 bg-white border border-gray-200 rounded-md dark:bg-gray-100 dark:text-gray-900 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label
              class="text-gray-900 font-bold dark:text-gray-900"
              for="phone"
            >
              product Condition
            </label>
            <select
              name="condition"
              class="block w-full px-4 py-2 mt-2 text-gray-900 bg-white border border-gray-200 rounded-md dark:bg-gray-100 dark:text-gray-900 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            >
              <option>excellent</option>
              <option>Good</option>
              <option>Fair</option>
            </select>
          </div>
          <div>
            <label
              class="text-gray-900 font-bold dark:text-gray-900"
              for="phone"
            >
              Product category
            </label>
            <select
              name="category"
              class="block w-full px-4 py-2 mt-2 text-gray-900 bg-white border border-gray-200 rounded-md dark:bg-gray-100 dark:text-gray-900 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            >
              <option value="01">Tesla Car</option>
              <option value="02">Toyota Car</option>
              <option value="03">Audi Car</option>
            </select>
          </div>
        </div>
        <div>
          <label class="text-gray-900 font-bold dark:text-gray-900" for="phone">
            product Discription
          </label>
          <textarea
            name="message"
            className="textarea textarea-bordered h-32 w-full"
            placeholder="product Discription"
          ></textarea>
        </div>
        <div class="flex justify-end mt-6">
          <button className="btn btn-secondary">
            Add A product
            </button>
        </div>
      </form>
    </section>
  );
};

export default AddProduct;