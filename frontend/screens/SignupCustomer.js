import { View, Text } from 'react-native';
import React, {useState} from 'react';

import AuthContent from "../components/AuthContent";

const SignupCustomer = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const {authenticate}  = useContext(AuthContext)

 async function handleSignUp({email, password}){
   try{
     setIsAuthenticated(true)
    //  const response = await authenticationHandle("signup",email,password)
     setIsAuthenticated(false)
      if(response){
        // authenticate(response);
      }

   }catch(error){

   }
 }


 // loading
//  if(isAuthenticated){
//    return <LoadingOverlay message="Creating user...." />
//  }


  return (
   <>
    <AuthContent onAuthenticate={handleSignUp}/>
   </>
  )
}

export default SignupCustomer