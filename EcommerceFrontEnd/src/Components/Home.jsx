import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategory] = useState([]);
  const navigate = useNavigate();

  const token = localStorage.getItem("jwtToken");

  useEffect(() => {
    if (!token) {
      alert("Session expired. Please login again.");
      navigate("/login/user");
    }
  }, [token, navigate]);

  useEffect(() => {
    if (!token) return; 

    const getAllProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8080/", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        setProducts(response.data?.products || []);
        setCategory(response.data?.categories || []);
      } catch (error) {
        console.error("Error fetching products:", error);

        // If backend rejects token → logout automatically
        if (error.response && error.response.status === 401) {
          alert("Session expired. Please login again.");
          localStorage.removeItem("jwtToken");
          navigate("/login/user");
        }
      }
    };

    getAllProducts();
  }, [token, navigate]);

  const logOutFunc = () => {
    localStorage.removeItem("jwtToken");
    navigate("/login/user");
  };

  const categoryPage = (e) => {
    const selectedCategory = e.target.value;
    if (selectedCategory) {
      navigate(`/prod/${selectedCategory}`);
    }
  };

  if (!token) return null;

  return (
    <div className="min-h-screen w-full bg-zinc-100 flex flex-col items-center p-6">
      <div className="w-full flex items-center justify-between bg-white shadow-md rounded-xl px-6 py-4">
        <div className="text-zinc-800 font-semibold text-2xl w-[40vw]">
          <h1 className="text-zinc-400">
            This is a demo showing how JWT tokens protect endpoints.
          </h1>
        </div>

        <div className="flex items-center space-x-6">
          <Link
            to="/product/allBuyedProducts"
            className="p-3 font-semibold hover:text-blue-500"
          >
            My Orders
          </Link>

          <button
            onClick={logOutFunc}
            className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition-all shadow-md"
          >
            <i className="ri-logout-box-line text-xl mr-2"></i>
            Logout
          </button>
        </div>
      </div>

      <div className="w-full flex-1 mt-8 rounded-xl shadow-inner p-6 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-semibold text-zinc-600">
            Welcome ...
          </h1>
          <select
            onChange={categoryPage}
            className="border border-zinc-300 rounded-xl px-4 py-2 w-64 text-lg"
          >
            <option value="">Select Category</option>
            {categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div className="w-full flex flex-wrap gap-6 justify-center">
          {products.map((p, i) => (
            <Link
              to={`product/${p.product_id}`}
              key={i}
              className="w-[18rem] bg-white border border-zinc-200 rounded-2xl shadow hover:shadow-lg transform transition duration-300 hover:-translate-y-1"
            >
              <div className="w-full h-56 overflow-hidden rounded-t-2xl">
                <img
                  src={
                    p.imageUrl ||
                    "https://images.unsplash.com/photo-1606813902778-456c79ecf9f7?auto=format&fit=crop&q=80&w=800"
                  }
                  alt={p.productName}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 flex flex-col gap-2">
                <h1 className="font-semibold text-xl text-zinc-800 truncate">
                  {p.productName}
                </h1>
                <h2 className="text-lg text-blue-600 font-medium">
                  ₹{p.price}
                </h2>
                <h3 className="text-sm text-zinc-500">
                  Category:{" "}
                  <span className="font-medium text-zinc-700">{p.category}</span>
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
