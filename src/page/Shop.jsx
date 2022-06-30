import React,{useState,useEffect} from 'react'
import{Card} from 'react-bootstrap'
import axios from 'axios';
import './Common.css'
import {
  Button,
  CardActions,
  
} from "@material-ui/core";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { useDispatch,useSelector } from 'react-redux';
import {incrementCounter} from '../Service/Action/Action'

export const Shop = () => {

  const [Products, setProducts] = useState(null);
  const [cart, setCart] = useState([])
  // console.log(cart,'mahabub cart data')

  const dispatch=useDispatch()
  const product=useSelector(state=>state.product)
  console.log(product)

  let total=0;
  
  for(let i=0;i<product.length;i++){
   let prod=product[i]
   total=total+prod.price;
  //  console.log(total,'////')
  }

  // const total=product.reduce((sum,product)=>
  //   sum+product.price,0
  // )
  // const totalprice=Number(total)


  const addToCart =(product)=>{
    console.log(product)
    dispatch(incrementCounter(product))
   }


  useEffect(() => {
    const getProduct = async () => {
      await axios({
        url: `https://fakestoreapi.com/products`,
        method: "GET",
      })
        .then((response) => {
          // console.log(response.data,'categpory data');
          setProducts(response.data);
        })
        .catch((error) => {
          console.log("CategoryProduct", error);
        });
    };
    getProduct();
  }, []);

  
  
 
 
  return (
    <div  style={{background:'#f2eeed',}}>

          <div className='container'>
                              <div className='section-title text-center'>
                                        <h4>Latest Discounted Products</h4>
                                        <p className='text-muted'>Choose your necessary products from this feature categories.</p>

                              </div>
          </div>

      <div >
           {
                Products?.map((item,i) => 
        <div className="row" style={{ display: 'inline-block' }} key={i}>
          <div className="col-md-3">

          <Card style={{ width: '13rem',height:'250px' ,marginLeft:'5px',marginBottom:'5px'}}>
          <div className='inner'>
          <Card.Img variant="top" src={item?.image} style={{height:'100px'}} alt=''/>

            </div>
          
          <Card.Body>
            <Card.Text>
              
             <h6 style={{fontSize:'15px',paddingRight:'50px'}}> {item?.category?.substring(0, 12)}</h6> 
             <p style={{paddingRight:'90px',fontSize:'15px',}}><span style={{color:'red',fontSize:'6px'}}><MonetizationOnIcon/></span>{item?.price}</p>

             <CardActions
  style={{
    justifyContent: "center",
  }}
>
<Button variant="contained" color="secondary" style={{marginBottom:'10px'}} onClick={()=>addToCart(item)} >
AddToCart
</Button>


</CardActions>


            </Card.Text>
          </Card.Body>
        </Card>
            

          </div>

       </div>
                
                )

           }


           

      </div>
    </div>
  )
}
