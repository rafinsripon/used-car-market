// import React from "react";
// import { useLoaderData } from "react-router-dom";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
// import CheckoutForm from "./CheckoutForm";

// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

// const Payment = () => {
//   const booking = useLoaderData();
//   return (
//     <div>
//       <h2> Your Payment For :- {booking.productname}</h2>
//       <div className="w-96 mt-8 border-8 border-cyan-100 p-4">
//         <Elements stripe={stripePromise}>
//           <CheckoutForm booking={booking} />
//         </Elements>
//       </div>
//     </div>
//   );
// };

// export default Payment;
