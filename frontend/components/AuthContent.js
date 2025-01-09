import { useState} from 'react';
import { Alert, StyleSheet, View} from 'react-native';
import {useNavigation} from "@react-navigation/native";


// import { Colors } from '../../constants/styles';
import FormContainer from './FormContainer';

function AuthContent({ isLogin, onAuthenticate }) {
  const navigation = useNavigation();
  const [credentialsInvalid, setCredentialsInvalid] = useState({
    name: false,
    email: false,
    password: false,
    confirmEmail: false,
    confirmPassword: false,
  });

  function switchAuthModeHandler() {
    // Todo
    // navigating dynamically
    // using replace it replace the  page unlike navigate which add a stack on top of anothe one
   if(isLogin){
    navigation.navigate("Register");
   }else{
    navigation.navigate("Login");
   }
  }

  function submitHandler(credentials) {
    let { name, email, confirmEmail, password, confirmPassword } = credentials;

    email = email.trim();
    password = password.trim();
    name = name.trim();

    const nameIsValid = name.length > 2;
    const emailIsValid = email.includes('@');
    const passwordIsValid = password.length > 6;
    const passwordsAreEqual = password === confirmPassword;

    if (
      !emailIsValid ||
      !passwordIsValid ||
      (!isLogin && (!emailsAreEqual || !passwordsAreEqual))
    ) {
      Alert.alert('Invalid input', 'Please check your entered credentials.');
      setCredentialsInvalid({
        name: !nameIsValid,
        email: !emailIsValid,
        password: !passwordIsValid,
        confirmPassword: !passwordIsValid || !passwordsAreEqual,
      });
      return;
    }
    onAuthenticate({ email, password });
  }

  return (
    <View style={styles.authContent}>
      <FormContainer
        onPressLink={switchAuthModeHandler}
        isLogin={isLogin}
        onSubmit={submitHandler}
        credentialsInvalid={credentialsInvalid}
      />

    </View>
  );
}

export default AuthContent;

const styles = StyleSheet.create({
  authContent: {
    marginTop: 64,
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 8,
    // backgroundColor: Colors.primary800,
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.35,
    shadowRadius: 4,
  },
});
