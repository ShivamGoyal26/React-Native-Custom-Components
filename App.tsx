import React, {useState} from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import * as Yup from 'yup';

import {getScreenHeight} from './src/utils/domUtils';
import Strings from './src/constants/Strings';
import {phoneRegExp} from './src/constants/Regex';
import Images from './src/constants/Images';
import FormManager from './src/components/FormManager';
import ImagePickerModal from './src/components/ImagePicker';
import CustomButton from './src/components/CustomButton';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  let fields = [
    {
      fieldName: Strings.name.fieldName,
      label: Strings.name.label,
      placeholder: Strings.name.placeholder,
      errorMessage: Strings.name.errorMessage,
      keyboardType: 'default',
      validation: Yup.string().trim().min(3, Strings.name.errorMessage),
      icon: Images.user,
      leftIcon: Images.user,
    },
    {
      fieldName: Strings.email.fieldName,
      label: Strings.email.label,
      placeholder: Strings.email.placeholder,
      errorMessage: Strings.email.errorMessage,
      keyboardType: 'email-address',
      leftIcon: Images.email,
      icon: Images.email,
      validation: Yup.string()
        .trim()
        .email(Strings.email.errorMessage)
        .required(Strings.email.required),
    },
    {
      fieldName: Strings.password.fieldName,
      label: Strings.password.label,
      placeholder: Strings.password.placeholder,
      errorMessage: Strings.password.errorMessage,
      icon: Images.lock,
      leftIcon: Images.lock,
      anotherIcon: Images.unlock,
      keyboardType: 'default',
      validation: Yup.string()
        .trim()
        .min(8, Strings.password.errorMessage)
        .required(Strings.password.required),
    },
    {
      fieldName: Strings.confirmPassword.fieldName,
      label: Strings.confirmPassword.label,
      placeholder: Strings.confirmPassword.placeholder,
      errorMessage: Strings.confirmPassword.errorMessage,
      icon: Images.lock,
      leftIcon: Images.lock,
      anotherIcon: Images.unlock,
      keyboardType: 'default',
      validation: Yup.string()
        .required()
        .oneOf(
          [Yup.ref(Strings.password.fieldName)],
          Strings.confirmPassword.errorMessage,
        ),
    },
    {
      fieldName: Strings.phone.fieldName,
      label: Strings.phone.label,
      placeholder: Strings.phone.placeholder,
      errorMessage: Strings.phone.errorMessage,
      icon: Images.phone,
      leftIcon: Images.phone,
      keyboardType: 'numeric',
      maxLength: 10,
      validation: Yup.string()
        .matches(phoneRegExp, Strings.phone.required)
        .required(Strings.phone.required),
    },
  ];
  return (
    <>
      {showModal ? (
        <ImagePickerModal
          cropping={true}
          result={(text: any) => {
            console.log(text);
          }}
          pressHandler={() => setShowModal(false)}
        />
      ) : null}
      <SafeAreaView style={styles.safe}>
        <View style={styles.screen}>
          <Text style={{color: 'black', fontSize: 30}}>App js file</Text>
          <FormManager
            action={(text: any, actions: any) => {
              console.log('>>>', text);
            }}
            fields={fields}
            buttonTitle="Login"
          />
          <CustomButton title="Pick Image" action={() => setShowModal(true)} />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    padding: getScreenHeight(1),
  },
  safe: {
    flex: 1,
    backgroundColor: 'white',
  },
  textInput: {
    marginTop: getScreenHeight(2),
  },
});

export default App;
