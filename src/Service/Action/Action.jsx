import { ADD_TO_CART,REMOVE_CART,REMOVE_CART_ALL,USER_LOGEDIN } from "../Constants/ActionType";

export const incrementCounter=(data)=>{
           console.log(data,'action datas')
          return{
                    type:ADD_TO_CART,
                    payload:data
          }
}

export const decrementCounter=(data)=>{
          return{
                    type:REMOVE_CART,
                    payload:data
          }
}


export const decrementCounterALL=()=>{
          return{
                    type:REMOVE_CART_ALL,
                    
          }
}

export const userlogin=()=>{
          return{
                    type:USER_LOGEDIN,
                    
          }
}



