import { View, Text} from 'react-native'
import React, {useState} from 'react'

import AuthContent from "../components/AuthContent"

const Login = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(null)
  // const {authenticate} = useContext(AuthContext);

  async function loginHandler({email, password}){
    try{
      setIsAuthenticated(true)
      // const response = await authenticationHandle("signin",email,password)
      setIsAuthenticated(false)
      // authenticate(response)

    }catch(error){

      if (error.response) {

        // setError(error.response.data.error.message)
        setError("Invalid credintials, Please check your details");

        // console.log('Status Code:', error.response.status);
        // console.log('Response Data:', error.response.data);
        // console.log('Headers:', error.response.headers);


      } else if (error.request) {
        // The request was made, but no response was received
        setError("Please check your network")
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error Message:', error.message);
      }
      setIsAuthenticated(false)
    }
    setIsAuthenticated(false)
  }
  return (
    <View>
        <AuthContent isLogin onAuthenticate={loginHandler}/>
    </View>
  )
}

export default Login