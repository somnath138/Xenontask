
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { handleError } from "../utils";
import { ToastContainer } from "react-toastify";
import "./home.css";
function Home() {
  const [products, setProducts] = useState("");
  const location = useLocation();
  const loginstatus = location.state?.loginstatus;
  console.log("im logged is", loginstatus);
  const fetchproducts = async () => {
    try {
      const url = "https://xenontask.onrender.com/products";
      const headers = {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      };
      const response = await fetch(url, headers);
      const result = await response.json();
      // console.log(result);
      setProducts(result);
    } catch (error) {
      handleError(error);
    }
  };
  useEffect(() => {
    fetchproducts();
  }, []);
  return (
    <div className="bg-gray-100 min-h-screen">
      <section
        className="hero bg-cover bg-center py-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D')",
        }}
      >
        <div className="max-w-4xl mx-auto text-center text-white px-4">
          <h1 className="text-4xl font-bold mb-4">Find Your Dream Home</h1>
          <p className="text-lg mb-8">
            Discover the perfect property that suits your lifestyle.
          </p>
          <a
            href="#"
            className="bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-500 hover:text-white transition duration-300"
          >
            <Link to="/property">view properties</Link>
          </a>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 py-12 flex flex-col items-center">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Featured Properties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
                alt="Property Image"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Luxury Villa 1</h3>
                <p className="text-gray-700 mb-2">Location: Miami, FL</p>
                <p className="text-gray-600">$1,200,000</p>
                <a
                  href="#"
                  className="block mt-4 text-blue-500 hover:underline"
                ></a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1608429835892-30be51ea4d6c?q=80&w=3272&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Property Image"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Luxury Villa 2</h3>
                <p className="text-gray-700 mb-2">Location: Los Angeles, CA</p>
                <p className="text-gray-600">$1,500,000</p>
                <a
                  href="#"
                  className="block mt-4 text-blue-500 hover:underline"
                ></a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1558036117-15d82a90b9b1?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Property Image"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Luxury Villa 3</h3>
                <p className="text-gray-700 mb-2">Location: New York, NY</p>
                <p className="text-gray-600">$2,000,000</p>
                <a
                  href="#"
                  className="block mt-4 text-blue-500 hover:underline"
                ></a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; 2024 Real Estate Agency. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
