import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

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
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ fontSize: "12px" }}
      >
        Dashboard
      </Button>
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
