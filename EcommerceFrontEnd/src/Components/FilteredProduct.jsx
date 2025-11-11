import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axiosInstance from './axiosInstance';

const FilteredProduct = () => {
  const { category } = useParams();
  const token = localStorage.getItem("jwtToken");
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      alert("Please, login again");
      navigate("/login/user");
      return;
    }

    const getCategoryProduct = async () => {
      try {
        const res = await axiosInstance.get(`/getCategoryProduct/${category}`, {
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        });
        setProducts(res.data.Products);
      } catch (error) {
        console.log(error);
      }
    };

    getCategoryProduct();
  }, [category, token, navigate]);

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">{category}</h1>

      <div className="flex flex-wrap gap-6">
        {products.length > 0 ? (
          products.map((p, i) => (
            <Link to={`/product/${p.product_id}`}
              key={i} 
              className="bg-zinc-300 rounded-2xl shadow-md p-4 w-64 flex flex-col items-center hover:scale-105 transition-transform"
            >
              <img 
                src={p.imageUrl} 
                alt={p.productName} 
                className="w-full h-48 object-cover rounded-xl mb-3"
              />
              <h3 className="text-lg font-semibold">{p.productName}</h3>
              <p className="text-gray-700 text-sm">{p.category}</p>
              <p className="text-lg font-bold mt-2">₹{p.price}</p>
            </Link>
          ))
        ) : (
          <p className="text-gray-500 text-lg mt-10">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default FilteredProduct;
