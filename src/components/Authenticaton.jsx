import { Button, Grid, TextField, Typography } from '@material-ui/core';
import React, { useState,useEffect } from 'react'
import { domain } from '../env'
import Cookies from 'js-cookie'
import Swal from 'sweetalert2'
import { useDispatch } from 'react-redux';
import {userlogin} from '../Service/Action/Action'
import { TabTitle } from '../utils/FunctionTitle';
// import { handelSignOut, handleGoogleSignIn, initializefirebase } from '../utils/LoginFirebaseManager';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import FirebaseConfig from '../utils/FirebaseConfig'
firebase.initializeApp(FirebaseConfig);

export const Authenticaton = () => {
   TabTitle('Amar Bazar | Login')


//firebase authentication:
    // initializefirebase()
    // handleGoogleSignIn()


    const provider = new firebase.auth.GoogleAuthProvider();
    const fbprovider=new firebase.auth.FacebookAuthProvider();
    const handleGoogleSignIn = () => {
        
          firebase.auth().signInWithPopup(provider)
            .then(res => {
              console.log('google login data ',res)
              console.log(res.additionalUserInfo.profile.email)
              console.log(res.credential.accessToken)
              // window.location.href='/checkout'
             
            })
            .catch(err => {
              const errorMessage = err.message;
              console.log(errorMessage)
        
            })
        };
        
        const handelFbsignIn = () => {
            firebase.auth().signInWithPopup(fbprovider)
              .then(res => {
                var user=res.user;
                console.log('facebook login data ',user)
                // window.location.href='/checkout'
               
              })
              .catch(err => {
                const errorMessage = err.message;
                console.log(errorMessage)
              })
          };
    
//simple authentication part:

   const [registernow, setRegisternow] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    console.log(password)
    const [password2, setPassword2] = useState('');


    const dispatch=useDispatch()
    const register = async () => {
          if (password === password2) {
                    Swal.fire({
                              icon: 'success',
                              text: 'Registered Successfully!!',
                              timer: 1000
                              
                            })
                    setRegisternow(false)
          }
          else {
              Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Password Is Not Matching!!',
                  timer: 1000
                  
                })
          }
      }


    const loginnow = async () => {
        var email=document.getElementById('email').value;
        var pass=document.getElementById('pass').value;
        if(email === '' || pass === ''){
            Swal.fire({
                icon: 'error',
                text: 'UserNmae & Password Error!!',
                timer: 1400
              })
        }
        else{
            Swal.fire({
                icon: 'success',
                text: 'Login Successfully!!',
                timer: 1200
              })
                dispatch(userlogin())
                window.location.href='/checkout'
        } 
      }


  return (
    <div>
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: "80vh" }}
        >
            <Typography variant='h4'>{registernow ? "Register Now" : "Login Now"}</Typography>

            <Grid item xs={12} md={8} sm={8}>
                <TextField
                    id='email'
                    style={{ width: "100%", margin: "10px 0" }}
                    variant="outlined"
                    label="Email"
                    type='text'
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                   id='pass'
                    style={{ width: "100%", margin: "10px 0" }}
                    variant="outlined"
                    label="Password"
                    type='password'
                    onChange={(e) => setPassword(e.target.value)}
                />
                {
                    registernow &&
                    <TextField
                        style={{ width: "100%", margin: "10px 0" }}
                        variant="outlined"
                        label="Confirm Password"
                        type='password'
                        onChange={(e)=>setPassword2(e.target.value)}
                    />
                }
                {
                    registernow ?
                        <>
                            <Button  variant='contained' color='primary'  onClick={register}>
                                Register
                    </Button>
                            <Button onClick={() => setRegisternow(false)}>
                                Have an account?Login Now.
                    </Button>
                        </>
                        :
                        <>
                            <Button  variant='contained' color='primary' onClick={loginnow}> 
                                Login
                    </Button>
                            <Button onClick={() => setRegisternow(true)}>
                                No account?Register Now.
                    </Button>
                    <br/>
                    <br/>

                    <Button  variant='contained' color='secondary'  onClick={handelFbsignIn}>
                                Facebook Login
                    </Button>  <b>OR</b>   <Button  variant='contained' color='primary'  onClick={handleGoogleSignIn}>
                                Google Login
                    </Button>
                        </>
                }
            </Grid>
        </Grid>
    </div>
  )
}
