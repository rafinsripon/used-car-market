import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider";

const BookingModal = ({ booked, setBooked }) => {
  const { user } = useContext(AuthContext);
  const { name, resale_price, original_price, location, img } = booked;
  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const productName = form.productName.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const originalprice = form.originalprice.value;
    const resaleprice = form.resaleprice.value;

    const booking = {
      productname: productName,
      user: name,
      email,
      originalprice,
      resaleprice,
      phone,
      img,
    };
    fetch("https://used-car-resale-market-server.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
    .then((res) => res.json())
    .then((data) => {
      if (data.acknowledged) {
        setBooked(null);
        toast.success("Booking Confirm");
    }
    else {
        toast.error(data.message);
    }
  });

  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form onSubmit={handleBooking}>
            <input
              name="productName"
              type="text"
              value={name}
              disabled
              placeholder="Your Name"
              className="input w-full mt-6 border-2 border-gray-300"
            />
            <input
              name="name"
              type="text"
              defaultValue={user?.displayName}
              disabled
              placeholder="Your Name"
              className="input w-full mt-6 border-2 border-gray-300"
            />
            <input
              name="email"
              type="email"
              value={user?.email}
              disabled
              placeholder="Your Email Address"
              className="input w-full mt-6 border-2 border-gray-300"
            />
            <div className="flex gap-8">
              <input
                name="phone"
                type="text"
                placeholder="Your Phone Number"
                className="input w-full mt-6 border-2 border-gray-300"
              />
              <input
                name="location"
                readOnly
                type="text"
                value={location}
                placeholder="Your Phone Number"
                className="input w-full mt-6 border-2 border-gray-300"
              />
            </div>
            <div className="flex gap-8">
              <input
                name="originalprice"
                type="text"
                value={original_price}
                disabled
                className="input w-full mt-6 border-2 border-gray-300"
              />
              <input
                name="resaleprice"
                type="text"
                value={resale_price}
                disabled
                className="input w-full mt-6 border-2 border-gray-300"
              />
            </div>
            <input
              className="w-full rounded-md btn btn-primary mt-6"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
