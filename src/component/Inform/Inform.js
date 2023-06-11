import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function TextFieldSizes() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          label="Full Name"
          id="outlined-size-small"
          defaultValue="Lori Steven"
          size="small"
        />
        <TextField label="Email id" id="outlined-size-normal" defaultValue="example@gmail.com" />
      </div>
      <div>
        <TextField
          label="Username"
          id="filled-size-small"
          defaultValue="Eduport.com/loristev"
          variant="filled"
          size="small"
        />
        <TextField
          label="Phone number"
          id="filled-size-normal"
          defaultValue="123456789"
        
        />
      </div>
      <div>
        <TextField
          label="Location"
          id="standard-size-small"
          defaultValue="California"
          size="larg"
          variant="standard"
        />
        <TextField
          label="Education"
          id="standard-size-normal"
          defaultValue="Bachelor in Computer Graphics"
          variant="standard"
        />
      </div>
    </Box>
  );
}