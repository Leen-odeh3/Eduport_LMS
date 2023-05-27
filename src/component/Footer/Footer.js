import React from 'react'
import './Footer.css'
import Divider from '@mui/material/Divider';
import Edu from '../Edu/Edu'
import Company from '../Company/Company'
const Footer = () => {
  return (
    <>
      <div className="aallll">
        <div className="main">
          <Edu />{" "}
        </div>
        <div className="aas">
          <Company />
        </div>
        <Divider/>
      </div>
      <div className="end">
        <p className='sop'>Copyrights ©2023 Webestica. All rights reserved. </p>
        <div className='of'>
          <p>Terms of use </p>
          <p>Privacy policy</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
