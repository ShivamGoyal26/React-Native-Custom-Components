import React, {useState} from 'react';
import {useEffect} from 'react';
import {View, StyleSheet, ActivityIndicator, Alert} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {WebView} from 'react-native-webview';

const WebViewScreen = (props: any) => {
  const [loading, setLoading] = useState(true);

  //   if (loading) {
  //     return (
  //       <View style={styles.loading}>
  //         <ActivityIndicator size={'large'} color="red" />
  //       </View>
  //     );
  //   }

  useEffect(() => {
    timer();
  }, []);

  const timer = () => {
    setTimeout(() => {
      props.navigation.goBack();
      Alert.alert('payment Timeout please retry!');
    }, 60);
  };

  return (
    <SafeAreaView style={styles.screen}>
      {loading ? <ActivityIndicator size={'large'} color="red" /> : null}
      <WebView
        incognito={true}
        style={{flex: 1}}
        source={{
          uri: 'https://secure.3gdirectpay.com/dpopayment.php?ID=FDA9131C-A281-4D59-8BF6-7A166D024C53',
        }}
        onMessage={async m => {
          try {
            // mainHandler("devappadmin")
            console.log('Message', m);
            //   let regex = /\S+[a-z0-9]@[a-z0-9\.]+/gim;
            //   let es = String(m.nativeEvent.data).match(regex);
          } catch (err) {
            console.log('Error', err);
          }
        }}
        onNavigationStateChange={navEvent => {
          console.log('>>> other things', navEvent);
          if (navEvent.title === 'ReturnUrl - PaymentTest') {
            console.log('Success >>>', navEvent);
            Alert.alert('Payment Done');
            props.navigation.goBack();
          }
        }}
        onLoad={() => {
          console.log('LOADING DONE');
          setLoading(false);
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WebViewScreen;
