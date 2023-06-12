import React from "react";
import "./../Settings/Settings.css";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
const Delete = () => {
  const numbers = [
    "Take a backup of your data Here",
    "If you delete your account, you will lose your all data.",
  ];
  const listItems = numbers.map((number) => <li>{number}</li>);

  const label = { inputProps: { "aria-label": "Switch demo" } };

  return (
    <div className="delete">
      <h1>Deactivate Account</h1>
      <p>Before you go...</p>
      <p>
        <ul>{listItems}</ul>
      </p>
      <div className="switch">
        <Switch {...label} defaultChecked  />
        <>Yes, I'd like to delete my account</>
      </div>
      <Stack direction="row" spacing={2} >
        <Button variant="contained" color="success" sx={{height:"50px"}}>
          Keep My Account
        </Button>
        <Button variant="contained" color="error">
          Delete My Account
        </Button>
      </Stack>
    </div>
  );
};

export default Delete;
