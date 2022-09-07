import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const ActionScreen = (props: any) => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.screen}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('WebViewScreen')}>
          <Text>Pay Your Bill</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default ActionScreen;
