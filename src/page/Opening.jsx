import React from 'react'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import './Common.css'
export const Opening = () => {
  return (
    <div className=' row  opening' style={{background:'#8c6e91',borderRadius:'30px',marginTop:'2px',height:'100px',}}>
          <div className='col-md-4' style={{paddingTop:'40px',fontSize:'20px'}}>
                    <p><span><LocalShippingIcon/></span> Free Shipping From $500.00 |</p>
          </div>
          <div className='col-md-4' style={{paddingTop:'40px',fontSize:'20px'}}>
                    <p><span></span><PermPhoneMsgIcon/> Support 24/7 At Anytime |</p>
          </div>
          <div className='col-md-4' style={{paddingTop:'40px',fontSize:'20px'}}>
                    <p><span></span> Latest Offer Upto 20% Off |</p>
          </div>



    </div>
  )
}
