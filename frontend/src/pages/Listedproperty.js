import React, { useEffect, useState } from "react";
import "./Listedproperty.css";
import { Link } from "react-router-dom";
import PropertyDetails from "./PropertyDetails";
import Searchbar from "./Searchbar";
function Listedproperty() {
  const [propertyList, setpropertyList] = useState([]);
  const [search, setSearch] = useState("");
  const fetchproducts = async () => {
    try {
      const url = `https://xenontask.onrender.com/api/v1/property?search=${search}`;
      const headers = {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      };
      const response = await fetch(url, headers);
      const result = await response.json();
      console.log(result);
      setpropertyList(result.data);
    } catch (error) {
      //   handleError(error);
    }
  };
  const truncateTo30Words = (str) => {
    const words = str.split(" ");
    if (words.length > 20) {
      return words.slice(0, 20).join(" ") + "...";
    }
    return str;
  };
  useEffect(() => {
    fetchproducts();
  }, []);
  return (
    <section className=" relative top-20">
      <Searchbar
        fetchproducts={fetchproducts}
        setSearch={setSearch}
        search={search}
      />
      <div className="text-center mb-12">
        <h1 className=" text-4xl font-bold text-gray-800">Properties</h1>
      </div>
      <div className="wrappingcard flex justify-center align-middle">
        <div className="wrappingproperty grid grid-cols-3 justify-center gap-16">
          {propertyList.map((ele) => {
            return (
              <div key={ele._id} className="listedpropertycontainer">
                <div className="card bg-white shadow-lg rounded-lg overflow-hidden">
                  <div className="card-img">
                    <img
                      className="w-full h-48 object-cover"
                      src="https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="designer"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between text-sm text-gray-500">
                      <p>{ele.CONTACT_NAME}</p>
                      <p>{ele.PRICE}</p>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-800 mt-4">
                      {ele.PROP_HEADING}
                    </h2>
                    <p className="text-gray-600 mt-2">
                      {truncateTo30Words(
                        ele.DESCRIPTION.replace(/\r?\n|\r/g, " ")
                      )}
                    </p>
                    <button
                      type="submit"
                      className="propertyButton flex flex-row-reverse"
                    >
                      <Link
                        to={`/propertyDetails/${ele._id}`}
                        element={<PropertyDetails />}
                        className=" "
                      >
                        see More
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Listedproperty;
