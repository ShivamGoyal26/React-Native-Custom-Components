import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

import {getScreenHeight} from '../utils/domUtils';

const CustomButton = props => {
  return (
    <TouchableOpacity
      disabled={props.loading}
      onPress={props.action}
      style={styles.screen}>
      {props.loading ? (
        <ActivityIndicator size={'small'} color="white" />
      ) : (
        <Text style={styles.title}>{props.title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  screen: {
    height: getScreenHeight(5),
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: getScreenHeight(1),
  },
  title: {
    fontSize: getScreenHeight(2),
    color: 'white',
  },
});

export default CustomButton;
