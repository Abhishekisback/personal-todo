import React from "react";
import { useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function ViewOrder() {
  const location = useLocation();
  const navigateTo=useNavigate();

  return (
    <div>
      <h1>Order Details</h1>

      <div className="orderDetailsBox">
        <div className="orderDetailsRow">
          <strong>Order No :</strong>
          {location.state.reqNo}
        </div>

        <div className="orderDetailsRow">
          <strong>Country :</strong>
          {location.state.country}
        </div>

        <div className="orderDetailsRow">
          <strong>Date :</strong>
          {location.state.date}
        </div>

        <div className="orderDetailsRow">
          <strong>Department :</strong>
          {location.state.department}
        </div>

        <div className="orderDetailsRow">
          <strong>Description :</strong>
          {location.state.buyerRemarks}
        </div>

        <div className="orderDetailsRow">
          <strong>Vessel Name:</strong>
          {location.state.vesselName}
        </div>

        <Button variant="contained" onClick={()=>{
            navigateTo("/my-orders")
        }} >View my orders</Button>
      </div>
    </div>
  );
}

export default ViewOrder;
