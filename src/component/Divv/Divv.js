import React from 'react'
import './Divv.css'
import Button from '@mui/material/Button';

const Div = () => {
  return (
    <div className='Divv'>
        <div> 
            <h1>Best Rated Courses</h1>
            <p className='get'> Enroll now in the most popular and best rated courses.</p>
            <Button className='vbnn' variant="contained"> View Courses</Button>
        </div>
      <img src="img/she.png" alt="" width="200px" height={200} className='iimmgg'/>
      
    </div>
  )
}

export default Div
