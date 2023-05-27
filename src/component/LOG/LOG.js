import React from "react";
import "./LOG.css";
import Box from "@mui/material/Box";
import FilledInput from "@mui/material/FilledInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Button from '@mui/material/Button';

const LOG = () => {
  return (
    <div>
      <h1>Let's talk</h1>
      <p>
        To request a quote or want to meet up for coffee, contact us directly or
        fill out the form and we will get back to you promptly
      </p>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <FormControl fullWidth sx={{ m: 1 }} variant="filled">
          <InputLabel htmlFor="filled-adornment-amount">E-mail</InputLabel>
          <FilledInput
            sx={{ height: 60, width: 550,marginBottom:5 }}
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }} variant="filled">
          <InputLabel htmlFor="filled-adornment-amount"> *Message</InputLabel>
          <FilledInput
            sx={{ height: 150, width: 550 ,marginBottom:6}}
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
        </FormControl>
        <Button sx={{ height: 50, width: 550}} variant="contained">Send Message</Button>

      </Box>
    </div>
  );
};

export default LOG;
