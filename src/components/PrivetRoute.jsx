import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route,  } from 'react-router-dom';


export default function PrivetRoute({children}){
const islogedin=useSelector(state=>state.islogedin)
return islogedin ? children : <Navigate to='/login' />
}
