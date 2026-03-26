import React from "react";
import { useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";


function CreateRequest() {
  const [purchaseReq, setPurchaseRequest] = useState({
    reqNo: "",
    vesselName: "",
    department: "",
    date: "",
    country: "",
    port: "",
    priority: "",
    buyerRemarks: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setPurchaseRequest((prevVals) => ({ ...prevVals, [name]: value }));
  }

  console.log("purchasereq", purchaseReq);

  function handleOrderNow() {
    axios
      .post("http://localhost:7000/createRequest", purchaseReq)
      .then((ack) => {
        alert(ack.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const options = ["The Godfather", "Pulp Fiction"];

  return (
    <div className="createRequestWrapper">
      <div className="headersection1">
        <p className="pageTitle">Create Request</p>
        <img
          src="https://t4.ftcdn.net/jpg/15/38/44/23/360_F_1538442389_yaTW5BfzE4CaIhJ4sG7PewMQvxD9o4wF.jpg"
          width={30}
          height={30}
          alt="anchor"
        />
      </div>

      <form className="formContainer">
        <div className="grid">
          <TextField
            id="outlined-basic"
            label="PR No"
            name="reqNo"
            variant="outlined"
            size="small"
            onChange={handleChange}
          />

          <TextField
            id="outlined-basic"
            label="Vessel Name"
            name="vesselName"
            variant="outlined"
            size="small"
            onChange={handleChange}
          />

          <select
            name="department"
            id="department"
            className="dropdown"
            onChange={handleChange}
          >
            <option value={"Engine"}>Engine</option>
            <option value={"Deck"}>Deck</option>
            <option value={"Galley"}>Galley</option>
          </select>

          <input
            type="datetime-local"
            name="date"
            id="date"
            onChange={handleChange}
            className="datepicker"
          />

          <select
            name="country"
            id="country"
            className="dropdown"
            onChange={handleChange}
          >
            <option value={"india"}>India</option>
            <option value={"china"}>China</option>
            <option value={"Sri Lanka"}>Sri Lanka</option>
          </select>

          <select
            name="port"
            id="port"
            className="dropdown"
            onChange={handleChange}
          >
            <option value={"Chennai"}>Chennai</option>
            <option value={"Mumbai"}>Mumbai</option>
            <option value={"Kochi"}>Kochi</option>
          </select>

          <select
            name="priority"
            id="priority"
            className="dropdown"
            onChange={handleChange}
          >
            <option value={"immediate"}>Immediate</option>
            <option value={"High"}>High</option>
            <option value={"Critical"}>Critical</option>
            <option value={"Low"}>Low</option>
          </select>

          <textarea
            name="buyerRemarks"
            id="buyerRemarks"
            placeholder="Remarks to Seller"
            required
            onChange={handleChange}
            className="remarks"
          ></textarea>

          <Autocomplete
            disablePortal
            options={options}
            sx={{ width: 300, height: "35px" }}
            renderInput={(params) => <TextField {...params} label="Movie" />}
          />

          <Button
            color="success"
            variant="contained"
            size="small"
            sx={{
              height: "35px",
              width: "100px",
              textTransform: "capitalize",
            }}
            onClick={handleOrderNow}
          >
            Order Now
          </Button>
        </div>
      </form>
    </div>
  );
}

export default CreateRequest;
