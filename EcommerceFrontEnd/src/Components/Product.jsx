import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosInstance from "./axiosInstance";
import { toast } from "react-toastify";

const Product = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem("jwtToken");

  useEffect(() => {
    const getProduct = async () => {
      if (!token) {
        alert("Session expired. Please log in again.");
        navigate("/login/user");
        return;
      }

      try {
        const response = await axiosInstance.get(`/product/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        // Adjust key if backend returns lowercase "product"
        setProduct(response.data.Product);
      } catch (error) {
        console.error("Error fetching product:", error);
        toast.error("Failed to fetch product details.");
      }
    };

    getProduct();
  }, [id, token, navigate]);

  const handleBuy = async () => {
    const want = window.confirm("Are you sure you want to buy this product?");
    if (!want) {
      toast.error("Purchase cancelled.");
      return;
    }

    try {
      const response = await axiosInstance.post(
        `/product/buyProduct/${product.productName}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      toast.success(`${product.productName} purchased successfully!`);
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error buying product:", error);
      alert("Failed to buy product.");
    }
  };
  
  if (!product) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-zinc-100">
        <p className="text-zinc-600 text-xl">Loading product details...</p>
      </div>
    );
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-zinc-100 p-4">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden">
        {/* Product Image */}
        <div className="md:w-1/2 h-96 md:h-auto shrink-0">
          <img
            src={
              product.imageUrl ||
              "https://images.unsplash.com/photo-1606813902778-456c79ecf9f7?auto=format&fit=crop&q=80&w=800"
            }
            alt={product.productName}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="md:w-1/2 p-6 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-zinc-800 mb-2">
              {product.productName}
            </h1>
            <p className="text-xl text-blue-600 font-semibold mb-4">
              ₹{product.price}
            </p>
            <p className="text-zinc-700 mb-2">
              <span className="font-medium">Category:</span> {product.category}
            </p>
          </div>

          <button
            onClick={handleBuy}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
