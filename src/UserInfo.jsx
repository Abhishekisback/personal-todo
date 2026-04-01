import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Box from "@mui/material/Box";

export default function UserInfo() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigateTo = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  function handleOrder() {
    navigateTo("/my-orders");
    setAnchorEl(null);
  }

  return (
    <div>
      <div className="userInfo">
        <Box sx={{ display: "flex", flexDirection: "column", gap:"0px" }}>
          <span className="userdetails">{Cookies.get("email")}</span>
          <span className="userdetails">{Cookies.get("userName")}</span>
        </Box>
        <Box onClick={handleClick} sx={{ cursor: "pointer" }}>
          <ArrowDropDownIcon />
        </Box>
      </div>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            "aria-labelledby": "basic-button",
          },
        }}
      >
        <MenuItem onClick={handleClose} sx={{ fontSize: "12px" }}>
          Profile
        </MenuItem>
        <MenuItem onClick={handleOrder} sx={{ fontSize: "12px" }}>
          My Orders
        </MenuItem>
        <MenuItem
          onClick={() => {
            Cookies.remove("isUserVerified");
            Cookies.remove("userName");
            Cookies.remove("email");
            window.location.href = "/";
          }}
          sx={{ fontSize: "12px" }}
        >
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
}
