import React from 'react'
import './Div.css'
import Button from '@mui/material/Button';

const Div = () => {
  return (
    <div className='Div'>
        <div> 
            <h1>Earn a Certificate</h1>
            <p className='get'>Get the right professional certificate program for you.</p>
            <Button variant="contained"> View Programs </Button>
        </div>
      <img src="img/he.png" alt="" width="200px" height={200} className='iimmgg'/>
      
    </div>
  )
}

export default Div
