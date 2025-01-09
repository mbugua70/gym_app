import { View, Text, StyleSheet} from 'react-native'
import React, {useState} from 'react';
import { useNavigationState } from '@react-navigation/native';

import Input from "./Input";
import FlatButton from "../UI/FlatButton";
import { Checkbox } from 'react-native-paper';
import Checked from '../UI/Checked';
import LinkButton from './LinkButton';
import ForgotButton from './ForgotButton';

const FormContainer = ({isLogin, onSubmit, credentialsInvalid, onPressLink }) => {
  const [isChecked, setIsChecked] = useState(false)
   const [enteredName, setEnteredName] = useState('');
   const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredConfirmEmail, setEnteredConfirmEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const [enteredConfirmPassword, setEnteredConfirmPassword] = useState('');
    const currentRoute = useNavigationState((state) => {
      const route = state.routes[state.index]
      return route.name;
    })

    const {
      name: nameIsValid,
      email: emailIsInvalid,
      password: passwordIsInvalid,
      confirmPassword: passwordsDontMatch,
    } = credentialsInvalid;

    function  updateInputValueHandler(inputType, enteredValue) {
      switch (inputType) {
        case 'name':
          setEnteredName(enteredValue);
          break;
        case 'email':
          setEnteredEmail(enteredValue);
          break;
        case 'confirmEmail':
          setEnteredConfirmEmail(enteredValue);
          break;
        case 'password':
          setEnteredPassword(enteredValue);
          break;
        case 'confirmPassword':
          setEnteredConfirmPassword(enteredValue);
          break;
      }
    }

    function submitHandler() {
      onSubmit({
        name: enteredName,
        email: enteredEmail,
        confirmEmail: enteredConfirmEmail,
        password: enteredPassword,
        confirmPassword: enteredConfirmPassword,
      });
    }


  return (
    <View>
       <View>
       {
       !isLogin && (<Input label={currentRoute === "Customer" ? "Customer Name" : "Business Name"} onUpdateValue={updateInputValueHandler.bind(this, 'name')} value={enteredName} isInvalid={nameIsValid} icon="account"/>)
       }

       <Input
          label="Email"
          onUpdateValue={updateInputValueHandler.bind(this, 'email')}
          value={enteredEmail}
          isInvalid={emailIsInvalid}
          keyboardType='email-address'
          icon="email"
        />

       <Input
          label="Password"
          onUpdateValue={updateInputValueHandler.bind(this, 'password')}
          value={enteredPassword}
          isInvalid={passwordIsInvalid}
          icon="lock"
        />

         {!isLogin && ( <Input
          label="Confirm Password"
          onUpdateValue={updateInputValueHandler.bind(this, 'confirmPassword')}
          value={enteredConfirmPassword}
          isInvalid={passwordsDontMatch}
          icon="lock"
        />)}

        {/* checkbox container */}
        {!isLogin && ( <Checked isChecked={isChecked} onPress={() => setIsChecked(!isChecked)}/>)}

        {/* forgot button */}
        {isLogin && (<ForgotButton/>)}

       {/* button content */}
        <View>
         <FlatButton>
            {isLogin ? "Login" : "Sign Up  "}
         </FlatButton>
        </View>

        {/* link button */}
         <LinkButton isLogin={isLogin} onPress={onPressLink}/>

       </View>
    </View>
  )
}

export default FormContainer

const styles = StyleSheet.create({

})