import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Switch from '@mui/material/Switch';
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function SwitchesGroup() {
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: true,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <>
    <FormControl component="fieldset" variant="standard">
      <h1 component="legend">Settings</h1>
      <h2>Profile Settings</h2>
      <h5>Choose type of notifications you want to receive</h5>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch checked={state.gilad} onChange={handleChange} name="gilad" />
          }
          label="Notify me via email when logging in"
        />
        <FormControlLabel
          control={
            <Switch checked={state.jason} onChange={handleChange} name="jason" />
          }
          label=" Send SMS confirmation for all online payments"
        />
         <FormControlLabel
          control={
            <Switch checked={state.jason} onChange={handleChange} name="jason" />
          }
          label="Show your profile publicly"
        />
         <FormControlLabel
          control={
            <Switch checked={state.jason} onChange={handleChange} name="jason" />
          }
          label=" Your profile's public visibility "
        />
        <FormControlLabel
          control={
            <Switch checked={state.antoine} onChange={handleChange} name="antoine" />
          }
          label="Check which device(s) access your account"
          
        />
      </FormGroup>
      <FormHelperText>Be careful</FormHelperText>
    </FormControl>
      <Stack direction="row" spacing={2} sx={{paddingLeft:"500px"}}>
      <Button variant="contained" >
        Save Changes
      </Button>
      <Button variant="outlined" >
        Cancel
      </Button>
    </Stack>
    </>
  );
}