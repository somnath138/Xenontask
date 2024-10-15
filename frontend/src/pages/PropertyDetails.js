import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PropertyDetails.css";

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
  if (!data) {
    return <p>Loading...</p>;
  }
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img
            src="https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="productdiplay-img">
          <img
            className="productdisplay-main-img"
            src="https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1 style={{ fontSize: "40px" }}>{data.PROP_HEADING || ""}</h1>
        <p style={{ width: "500px", marginTop: "20px" }}>
          {data.DESCRIPTION.replace(/\r?\n|\r/g, " ")}
        </p>
        <div
          style={{
            display: "flex",
            marginTop: "40px",
            justifyContent: "space-between",
          }}
        >
          <div>
            <h1>Bedrooms</h1>
            <p>{Number(data.BEDROOM_NUM)}</p>
          </div>
          <div>
            <h1>Bathrooms</h1>
            <p>{data.BATHROOM_NUM}</p>
          </div>
        </div>
        <h1 style={{ marginTop: "40px" }}>{data.BUILDING_NAME}</h1>
        <h1 style={{ marginTop: "40px" }}>PRICE</h1>
        <h2>{data.PRICE}</h2>

        <h1 style={{ marginTop: "40px" }}>AREA</h1>
        <h2>{data.AREA}</h2>
        <div className="productdisplay-right-discription"></div>
        <p className="productdisplay-right-category"></p>
        <p className="productdisplay-right-category"></p>
      </div>
    </div>
  );
}

export default PropertyDetails;
