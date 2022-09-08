import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {getScreenHeight} from '../../utils/domUtils';

const FormInput = (props: any) => {
  const {placeholder, label, error} = props;
  const [secure, setSecure] = useState(true);
  return (
    <View>
      <View style={styles.row}>
        <Text style={styles.label}>{label}</Text>
        {error ? <Text style={styles.error}>{error}</Text> : null}
      </View>
      <View style={styles.textInput}>
        {props.leftIcon ? (
          <View style={styles.iconContanier}>
            <Image style={styles.icon} source={props.leftIcon} />
          </View>
        ) : (
          <View style={{paddingLeft: getScreenHeight(2)}} />
        )}
        <View style={styles.inputContanier}>
          <TextInput
            secureTextEntry={props.anotherIcon ? secure : false}
            {...props}
            placeholderTextColor="grey"
            placeholder={placeholder}
          />
        </View>
        {props.icon ? (
          <TouchableOpacity
            disabled={!props.anotherIcon}
            onPress={() => setSecure(!secure)}
            style={styles.iconContanier}>
            {secure ? (
              <Image style={styles.icon} source={props.icon} />
            ) : (
              <Image style={styles.icon} source={props.anotherIcon} />
            )}
          </TouchableOpacity>
        ) : (
          <View style={{paddingRight: getScreenHeight(2)}} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: Platform.OS === 'android' ? getScreenHeight(6) : getScreenHeight(4),
    borderColor: 'grey',
    borderWidth: getScreenHeight(0.1),
    borderRadius: getScreenHeight(1),
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontSize: getScreenHeight(1.5),
    color: 'black',
  },
  input: {
    fontSize: getScreenHeight(1.5),
    color: 'black',
  },
  error: {
    fontSize: getScreenHeight(1.5),
    color: 'red',
  },
  row: {
    marginBottom: getScreenHeight(0.5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconContanier: {
    width: '10%',
    height: getScreenHeight(4),
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    height: getScreenHeight(2),
    width: getScreenHeight(2),
  },
  inputContanier: {
    flex: 1,
  },
});

export default FormInput;
