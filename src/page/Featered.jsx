import React ,{  useEffect, useState }from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import image1 from '../images/image1.webp'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Common.css'
import {
          Button,
          CardActions,
          
        } from "@material-ui/core";
import{Card} from 'react-bootstrap'

const Responsive=()=>  {
          const [product, setProduct] = useState([]);
          useEffect(() => {
                    fetch('https://fakestoreapi.com/products')
                      .then(res => res.json())
                      .then(data => {
                        console.log(data,'mahbub alam')
                        setProduct(data)
                      })
                  }, []);
   
          const settings = {
          // dots: true,
          // infinite: true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 1
          };

            return (
              <div className="App" style={{background:'#faf1f0'}}>
                    <div className='  section-title text-center'>
                              <h4>Featere Products</h4>
                              <hr  style={{marginLeft:'200px',marginRight:'200px'}}/>

                    </div>
                

                <Slider {...settings}>
                {
                product?.map((item,i) =>  



                <div className="row ">
                <div className='col-md-3 ' style={{marginBottom:'5px'}}>
                                  <div className='card  ' style={{width:'250px',marginLeft:'30px'}}>
                                    <div className='card-body '>
                                        <img src={item?.image} alt='' style={{height:'200px',width:'200px'}}/>
                                    </div>
                                    <p>{item?.title?.substring(0, 20)}</p>
                                    <p><strong> Price:{item?.price}TK</strong></p>
                                        <CardActions style={{justifyContent: "center", }}>
                                        <a href='' className='view-all-btn'>View All<ArrowForwardIcon/></a>
                                        </CardActions>
                                 </div>
                               </div>
               </div>
          
                )
           }
                </Slider>
               
               
              
              </div>
            );
          
        }
export default Responsive