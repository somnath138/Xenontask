import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PropertyDetails() {
  const params = useParams();
  const [data, setdata] = useState(null);
  const fetchproperty = async () => {
    try {
      const url = `https://xenontask.onrender.com/api/v1/getProperty/${params.id}`;
      const headers = {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      };
      const response = await fetch(url, headers);
      const result = await response.json();
      console.log(result);
      setdata(result.data);
    } catch (error) {
      //   handleError(error);
    }
  };
  useEffect(() => {
    if (params.id) {
      fetchproperty();
    }
  }, []);
  return <div>PropertyDetails</div>;
}

export default PropertyDetails;
