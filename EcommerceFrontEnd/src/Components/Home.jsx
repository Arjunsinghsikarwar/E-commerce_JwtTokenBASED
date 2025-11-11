import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "./axiosInstance";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategory] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]); 
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
        const response = await axiosInstance.get("/", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        setProducts(response.data?.products || []);
        setCategory(response.data?.categories || []);
      } catch (error) {
        console.error("Error fetching products:", error);
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

  // Handle live search
  const handleSearch = async (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (!query) {
      setSearchResults([]); // clear dropdown if input empty
      return;
    }

    try {
      const response = await axiosInstance.get(
        `/home/search/${encodeURIComponent(query)}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      setSearchResults(response.data?.products || []);
    } catch (error) {
      // If 404 → show "No products found"
      if (error.response && error.response.status === 404) {
        setSearchResults([{ productName: "No products found", product_id: null }]);
      } else {
        console.error("Search error:", error);
        setSearchResults([]);
      }
    }
  };

  if (!token) return null;

  return (
    <div className="min-h-screen w-full bg-zinc-100 flex flex-col items-center p-6">
      {/* Top Bar */}
      <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between bg-white shadow-md rounded-xl px-6 py-4 mb-6">
        {/* Search Input with Dropdown */}
        <div className="relative w-full md:w-[40vw] mb-4 md:mb-0">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearch}
            className="w-full px-4 py-2 border border-zinc-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {searchResults.length > 0 && (
            <div className="absolute top-full left-0 w-full bg-white border border-zinc-300 rounded-xl shadow-lg mt-1 max-h-64 overflow-y-auto z-50">
              {searchResults.map((p) =>
                p.product_id ? (
                  <Link
                    key={p.product_id}
                    to={`/product/${p.product_id}`}
                    className="block px-4 py-2 hover:bg-blue-100 text-zinc-700"
                    onClick={() => {
                      setSearchQuery(""); 
                      setSearchResults([]);
                    }}
                  >
                    {p.productName}
                  </Link>
                ) : (
                  <div
                    key="no-product"
                    className="block px-4 py-2 text-zinc-500 cursor-default"
                  >
                    {p.productName}
                  </div>
                )
              )}
            </div>
          )}
        </div>

        {/* Links */}
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

      {/* Main Content */}
      <div className="w-full flex-1 rounded-xl shadow-inner p-6 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-semibold text-zinc-600">Welcome ...</h1>
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
                <h1 className="font-semibold text-xl text-zinc-800 truncate">{p.productName}</h1>
                <h2 className="text-lg text-blue-600 font-medium">₹{p.price}</h2>
                <h3 className="text-sm text-zinc-500">
                  Category: <span className="font-medium text-zinc-700">{p.category}</span>
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
