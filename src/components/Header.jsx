import React,{useState} from 'react'
import './Header.css'
import {   Container, Nav, Table,Form } from 'react-bootstrap';
import Chip from '@mui/material/Chip';
import { IconButton } from '@material-ui/core';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MessageIcon from '@mui/icons-material/Message';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Card, MenuItem, ClickAwayListener,Button , Drawer, Box,Badge,Paper,InputBase } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import ClearIcon from '@mui/icons-material/Clear';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import DeleteIcon from '@mui/icons-material/Delete';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Menu from '@mui/material/Menu';
import { decrementCounter } from '../Service/Action/Action';
import { width } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';


export const Header = () => {
      const[over,setOver]=useState(false)
      const[text,setText]=useState('')
     function submitText(e){
      var frm=document.getElementsByName('textform')[0];
      frm.submit()
      frm.reset();
      e.preventDefault()
     }

      const dispatch=useDispatch()
      const [isDrowerOpen, setisDrowerOpen] = useState(false)
      const domain = "https://availtrade.com/public/images/";
      
     const product=useSelector(state=>state.product)
    //  const count=useSelector(state=>state.count)
      let total=0;
      // console.log(total,'////+++')
  
  for(let i=0;i<product.length;i++){
   let prod=product[i]
    total=total+Number(prod.product_price);
  
   

  }

 


       var togglefunction=()=>{
            document.getElementsByClassName('navbar-links')[0].classList.toggle('active')
       }
     

      const removeItem=(product)=>{
        console.log(product,'product id')
        dispatch(decrementCounter(product))
      }

      var styling={
            fontSize:'20px',
            paddingRight:'30px',
            color:'white',
            
            paddingTop:'13px'
  
            
          }
  return (
    <div style={{marginLeft:'0px',marginRight:'0px'}}>
            
            <nav className='navbar'>
               <Link to='/' style={{textDecoration:'none'}}>
               <div className='brand-title' style={{paddingLeft:'80px',color:'#FF6F00',}}>
               <span style={{marginRight:'5px',marginBottom:'5px'}}><ShoppingBagIcon/></span>Amar Bazar
               </div>

               </Link>
               <Paper  className='opening'>
                <Form name='textform'>
               <InputBase style={{background:'white',width:'280px',borderRadius:'5px',height:'30px'}} type='text' placeholder='search..' onChange={(e)=>{setText(e.target.value)}} />
               <IconButton onClick={submitText}><SearchIcon/></IconButton>
               </Form>
               </Paper>

                <a  className='toggle-button' onClick={togglefunction}>
                      <span className='bar'></span>
                      <span className='bar'></span>
                      <span className='bar'></span>

                </a>
                <div className='navbar-links'>
                      <ul>

                      
           
                        
                          <Link to='/item' style={{textDecoration:'none'}}>
                          <li ><a style={{paddingRight:'20px',fontSize:'20px',color:'white',paddingTop:'15px'}} >Category</a></li>
                          
                          </Link>

                          <Link to='/about' style={{textDecoration:'none'}}>
                          <li ><a style={{paddingRight:'20px',fontSize:'20px',color:'white',paddingTop:'15px'}} >About</a></li>
                          
                          </Link>

                          <Link to='/contact' style={{textDecoration:'none'}}>
                          <li ><a style={{paddingRight:'20px',fontSize:'20px',color:'white',paddingTop:'15px'}} >Contact</a></li>
                          
                          </Link>

                          <Link to='#' style={{textDecoration:'none'}}>
                          <li ><a style={{paddingRight:'20px',fontSize:'20px',color:'white',paddingTop:'15px'}}>Page<span><KeyboardArrowDownIcon/></span></a></li>
                          
                          </Link>
                            <li><a> <strong><span><IconButton style={{color:'white',height:'50px',}}><Badge color="secondary" badgeContent={product.length}>
                            <FavoriteIcon/>
                            </Badge></IconButton></span></strong></a></li>
                            
                           <li><a> <strong><span><IconButton style={{color:'white',height:'50px',}} onClick={() => setisDrowerOpen(true)}>
                           <Badge badgeContent={product.length} color='secondary'>
                           <ShoppingCartIcon />
                           </Badge>
                           </IconButton></span></strong></a></li>

                           <li><a> <strong><span><IconButton style={{color:'white',height:'50px',}} onMouseOver={() => setOver(true)}><AccountCircleIcon /></IconButton></span></strong></a></li>
           
                      </ul>
                     
                </div>
           

          </nav>

          {
            over &&
            <ClickAwayListener onClickAway={() => setOver(false)}>
                 <Card style={{
                      position: 'fixed',
                      width: '300px',
                      height: '70px',
                      top: '50px',
                      marginLeft: '1000px'
                 }} >
                  <Link to='/login' style={{textDecoration:'none',color:'inherit'}}>
                  <MenuItem><span><PersonIcon /></span>Login</MenuItem>
                  
                  </Link>
                    <MenuItem><span><LogoutIcon /></span>Logout</MenuItem>
                  

                 </Card>
            </ClickAwayListener>


       }

       

               <Drawer anchor='right' open={isDrowerOpen}
                    onClose={() => setisDrowerOpen(false)} >
                    <Box p={2} width='350px' textAlign='center' role='presentation' >

                      {
                        product.length <= 0 ?  
                       <div className='card-details'>
                       <p style={{ textAlign: 'left' }}> Your Cart
                       <button type="button"  onClick={()=>setisDrowerOpen(false)} style={{border:'none',marginLeft:'200px'}}>
                       <ClearIcon/>
                       </button>
                        </p>

                        <hr/>
                          <h2 style={{marginTop:'50%',color:'red'}}>  Your Crad Is Empty <LocalFireDepartmentIcon/></h2>
                      </div> : <div>

                      <p style={{ textAlign: 'left' }}> Your Cart <button type="button"  onClick={()=>setisDrowerOpen(false)} style={{border:'none',marginLeft:'200px'}}>
                       <ClearIcon/>
                       </button></p>

                         <hr />
                         <div className='card_details'>
                          <Table>
                            <thead>
                              <tr>
                                <th>image</th>
                                <th>name</th>
                                <th>Quantity</th>
                                <th>Action</th>
                              </tr>
                            </thead>

                            <tbody>
                              
                            {
                                product?.map(item =>
                                  <tr>
                                    <td><img src={`${domain}${item?.products_image}`} alt="" style={{  height: '50px', width: '50px' ,clipPath:'circle()'}}></img></td>
                                    <td>{item?.product_name?.substring(0,6)} <br/><CurrencyRupeeIcon/>{item?.product_price}</td>
                                    <td>{item?.start_quantity}</td>
                                    <td><IconButton ><span style={{color:'red'}} onClick={()=>removeItem(item)}><DeleteIcon/></span></IconButton></td> 

                                  </tr>
                                 
                                  )
                                  
                              }
                             
                            </tbody>
                           
                           
                          </Table>
                         </div>
                         <hr></hr>
                         <h4 style={{ textAlign: 'left' }}>Total:{total}TK</h4>

                         <div style={{ display: 'flex' }}>
                              <div className='col-6'>
                                   <Link to='/orderPage' style={{ textDecoration: 'none' }}>
                                        <Button variant="contained" class="btn btn-outline-info" style={{ width: '140px', marginTop: '20px' }} onClick={()=>setisDrowerOpen(false)}>View Cart</Button>
                                   </Link>
                              </div>

                         <Link to='/checkout'>
                              <div className='col-6'>
                                   <Button variant="contained" color="info" style={{ width: '160px', marginTop: '20px' }} onClick={()=>setisDrowerOpen(false)}>Checkout</Button>

                              </div>
                              </Link>
                         </div>
                      </div>
                      }
                     
                    </Box>

               </Drawer>



      
    </div>
  )
}