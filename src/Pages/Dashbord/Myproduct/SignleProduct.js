import React from "react";
import { Link } from "react-router-dom";

const SignleProduct = ({ ctg, handleDelete }) => {
  // const {original_price, resale_price} = categori;
  console.log(ctg);
  return (
    <div>
      <table className="table w-full">
        <tbody>
          <td>{ctg.name}</td>
          <td>{ctg.original_price ? ctg.original_price : "No Price Added"}</td>
          <td>{ctg.resale_price ? ctg.resale_price : "No Price Added"}</td>
          <td>
            <button
            onClick={() => handleDelete(ctg._id)}
             className="btn btn-sm btn-primary text-gray-900">
              Delete{" "}
            </button>
          </td>
        </tbody>
      </table>
    </div>
  );
};

export default SignleProduct;
