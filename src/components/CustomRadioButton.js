import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Formik, Field, Form} from 'formik';
import {getScreenHeight} from '../utils/domUtils';

const CustomRadioButton = props => {
  const {label, name, options, ...rest} = props;
  return (
    <Formik
      initialValues={{
        picked: '',
      }}
      onSubmit={async values => {
        // await new Promise(r => setTimeout(r, 500));
        // alert(JSON.stringify(values, null, 2));
      }}>
      {() => {
        return (
          <>
            <Form>
              <View>
                <Field type="radio" name="picked" value="One" />
                <Text>One</Text>
              </View>
              <View>
                <Field type="radio" name="picked" value="Two" />
                <Text>One</Text>
              </View>
            </Form>
          </>
        );
      }}
    </Formik>
  );
};

const styles = StyleSheet.create({
  radioButton: {
    width: getScreenHeight(2),
    height: getScreenHeight(2),
    borderRadius: getScreenHeight(100),
    borderWidth: getScreenHeight(0.1),
    borderColor: 'black',
  },
});

export default CustomRadioButton;
