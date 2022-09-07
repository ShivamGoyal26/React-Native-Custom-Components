import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {getScreenHeight} from '../utils/domUtils';
import {Formik, Field, Form} from 'formik';

const CustomCheckbox = props => {
  return (
    <View>
      <Formik
        initialValues={{
          toggle: false,
          checked: [],
        }}
        onSubmit={async values => {
          console.log('Values', values);
        }}>
        {({values}) => {
          return (
            <Form>
              <Field type="checkbox" name="toggle" />
            </Form>
          );
        }}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: getScreenHeight(2),
    height: getScreenHeight(2),
    borderColor: 'grey',
    borderWidth: getScreenHeight(0.1),
    borderRadius: getScreenHeight(0.5),
  },
  title: {
    marginLeft: getScreenHeight(1),
    color: 'black',
    fontSize: getScreenHeight(1.8),
  },
});

export default CustomCheckbox;
