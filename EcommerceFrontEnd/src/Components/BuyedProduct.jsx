import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axiosInstance from "./axiosInstance";

const BuyedProduct = () => {
  const [products, setProducts] = useState([]);
  const token = localStorage.getItem("jwtToken");

  // ✅ Fetch all bought products on page load
  const getAllProducts = async () => {
    try {
      const response = await axiosInstance.get("/product/getAllBuyedProducts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = response.data;

      // Handle both possible backend formats
      if (data && Array.isArray(data.products)) {
        setProducts(data.products);
      } else if (Array.isArray(data)) {
        setProducts(data);
      } else {
        setProducts([]);
        console.error("Unexpected response format:", data);
        toast.error("Unexpected response format from server.");
      }
    } catch (error) {
      console.error("Error fetching bought products:", error);
      toast.error("Failed to fetch your orders.");
    }
  };

  useEffect(() => {
    getAllProducts();
  }, [token]);

  return (
    <div className="min-h-screen w-full p-6 bg-gray-50">
      <h1 className="text-3xl font-semibold mb-6 text-gray-800">My Orders</h1>

      {Array.isArray(products) && products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((prod, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <img
                src={prod.imageUrl || "https://via.placeholder.com/250"}
                alt={prod.productName}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col grow justify-between">
                <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">
                  {prod.productName}
                </h2>
                <p className="text-blue-600 font-bold text-lg mt-2">
                  ₹{prod.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-zinc-600 text-lg mt-8">
          You haven’t bought anything yet.
        </p>
      )}
    </div>
  );
};

export default BuyedProduct;
