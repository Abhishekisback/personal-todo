import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function MyRequests() {
  const [orders, setorders] = useState([]);
  const navigateTo = useNavigate();
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "reqNo",
      headerName: "Order No",
      width: 150,
      editable: true,
      renderCell: (params) => (
        <span
          style={{
            cursor: "pointer",
            color: "#1976d2",
            textDecoration: "underline",
          }}
          onClick={()=>{
            navigateTo("/view-order",{state:params.row})
          }}
        >
          {params.value}
        </span>
      ),
    },
    {
      field: "country",
      headerName: "Country",
      width: 150,
      editable: true,
    },
    {
      field: "date",
      headerName: "Date",
      width: 150,
      editable: true,
    },
    {
      field: "department",
      headerName: "Department",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "buyerRemarks",
      headerName: "Description",
      type: "number",
      minWidth: 110,
      editable: true,
    },
    {
      field: "vesselName",
      headerName: "Vessel Name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
    },
  ];

  function getMyOrders() {
    axios
      .get("http://localhost:7000/get-my-orders")
      .then((res) => {
        console.log(res.data);
        setorders(res.data);
      })
      .catch();
  }
  useEffect(() => {
    getMyOrders();
  }, []);

  return (
    <Box sx={{ height: "80vh", width: "98%", margin: "auto" }}>
      <h1>My Orders</h1>
      <DataGrid
        rows={orders.map((ele, i) => ({ ...ele, id: i + 1 }))}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 25,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
