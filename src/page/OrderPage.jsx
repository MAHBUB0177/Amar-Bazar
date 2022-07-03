import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { domain, getheader } from '../env';
import Cookies from 'js-cookie'
import {  Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Button  } from '@mui/material';
import { Typography } from '@mui/material';
// import Swal from 'sweetalert2'
import DeleteIcon from '@mui/icons-material/Delete';
import {Card} from 'react-bootstrap';
import {  IconButton } from '@mui/material';
import { useSelector ,useDispatch} from 'react-redux';
import {decrementCounter} from '../Service/Action/Action'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {   Container, Nav, Table } from 'react-bootstrap';
import { TabTitle } from '../utils/FunctionTitle';
const OrderPage = () => {
  TabTitle('Amar Bazar | OrderPage')
  const domain = "https://availtrade.com/public/images/";
  const dispatch=useDispatch()

  const cartItem=useSelector(state=>state.product)

  let total=0;
  for (let i=0;i<cartItem.length;i++){
    let prod=cartItem[i];
    total=total+Number(prod.product_price);
  }
  var tax=Number(total/10);


  const notify = () =>   toast.success("product add to cart!", {
    position: toast.POSITION.TOP_CENTER,
    
  }
  
  );
const removeItem=(product)=>{
  dispatch(decrementCounter(product))
  notify()

}

  return (
    <div className='  container col-md-12' style={{  marginTop: '30px',marginLeft:'20px',marginRight:'20px' }} >
      <div class="col-12 col-lg-8 text-center">
          <span class="dri dri-cart fa-2x bg-primary rounded-circle"></span>
          <h2 class="mt-3">Shopping <font class="text-primary">Cart</font></h2>
      </div>

    
<div className="row d-flex" >
<div className='col-md-7'>
        { cartItem?.length > 0 && 
              <div className='' >
                    <Table>
                            <thead>
                              <tr>
                                <th>image</th>
                                <th>name</th>
                                <th>Quantity</th>
                                <th>total price</th>
                                <th>Action</th>
                              </tr>
                            </thead>

                            <tbody>
                              
                            {
                                cartItem?.map(item =>
                                  <tr>
                                    <td><img src={`${domain}${item?.products_image}`} alt="" style={{  height: '80px', width: '70px' ,clipPath:'circle()'}}></img></td>
                                    <td>{item?.product_name?.substring(0,6)} <br/>{item?.product_price}TK</td>
                                    <td>{item?.start_quantity}</td>
                                    <td>---</td>
                                    <td><IconButton ><span style={{color:'red'}} onClick={()=>removeItem(item)}><DeleteIcon/></span></IconButton></td> 
                                    <ToastContainer/>

                                  </tr>
                                  )
                              }
                             
                            </tbody>
                       </Table>
                       
                       <div style={{ display: 'flex' }}>
                          <div className='col-6 ' >
                              <Link to='/' style={{ textDecoration: 'none' }}>
                                    <Button variant="contained" color='secondary' style={{ width: '160px',  }} ><ArrowBackIcon/>Add Cart</Button>
                              </Link>
                          </div>

                        <Link to='/checkout'>
                        <div className='col-6 mb-5'>
                              <Button variant="contained" color="info" style={{ width: '160px' ,marginLeft:'5px'}} >Checkout<ArrowForwardIcon/></Button>

                          </div>
                        </Link>
  
                  </div>
                  </div>
          }
 </div>

          {
                        cartItem?.length <=0 && <div className='alert alert-info container' >
                         <h2 style={{textAlign:'center'}}> Yor Cart Is Empty !!!!!</h2>
                         
                        </div>
                        
          }


  {  cartItem?.length > 0 && 
          <div className='col-md-5 ' style={{background:'#dce0dd',height:'300px',marginTop:'40px'}}>
            
                <h4 style={{marginLeft:'40px',marginTop:'10px'}}>Order Summary</h4>
                <hr/>
                <h6 style={{marginTop:'40px',marginRight:'390px'}}>Subtotal:{total}Tk</h6>
                <h6 style={{marginTop:'40px',marginRight:'390px'}}>Taxes:0.00TK</h6>

                <hr/>
                <h4 style={{marginRight:'390px'}}><span>Total:{total}TK</span> </h4>
          </div>
    }
   



    </div>


    </div>
  );
};

export default OrderPage;