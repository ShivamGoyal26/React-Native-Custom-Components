import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';

import CustomButton from './CustomButton';
import FormInput from './FormInput';
import {getScreenHeight} from '../utils/domUtils';

const FormManager = props => {
  const [userInfo, setUserInfo] = useState({});
  const [validationSchema, setValidationSchema] = useState(Yup.object({}));

  useEffect(() => {
    if (props.fields) {
      getValidationHandler();
      setUserInputs();
    }
  }, [props.fields, props.fields.length]);

  const setUserInputs = () => {
    let user = {};
    let values = {};
    props.fields.map((item, index) => {
      user[item.fieldName] = '';
      values[item.fieldName];
    });
    setUserInfo(user);
  };

  const getValidationHandler = () => {
    let validations = {};
    props.fields.map((item, index) => {
      validations[item.fieldName] = item.validation;
    });
    setValidationSchema(Yup.object(validations));
  };

  return (
    <Formik
      initialValues={userInfo}
      validationSchema={validationSchema}
      onSubmit={(values, formikActions) => {
        props.action(values, formikActions);
        //   formikActions.resetForm();
        formikActions.isTouched = true;
        formikActions.setSubmitting(false);
      }}>
      {({
        values,
        handleChange,
        errors,
        handleBlur,
        touched,
        handleSubmit,
        isSubmitting,
      }) => {
        return (
          <View>
            {props.fields.map((item, index) => {
              return (
                <View key={index} style={styles.textInput}>
                  <FormInput
                    icon={item.icon}
                    {...item}
                    anotherIcon={item.anotherIcon}
                    // keyboardType={item.keyboardType}
                    error={touched[item.fieldName] && errors[item.fieldName]}
                    value={values[item.fieldName]}
                    onBlur={handleBlur(item.fieldName)}
                    placeholder={item.placeholder}
                    onChangeText={handleChange(item.fieldName)}
                    label={item.label}
                  />
                </View>
              );
            })}
            <View style={styles.textInput}>
              <CustomButton
                action={handleSubmit}
                loading={isSubmitting}
                title={props.buttonTitle}
              />
            </View>
          </View>
        );
      }}
    </Formik>
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

export default FormManager;
