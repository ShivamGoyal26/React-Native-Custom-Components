import React, {useContext, useMemo, useState} from 'react';
import {
  Modal,
  StyleSheet,
  Pressable,
  View,
  TouchableOpacity,
  Text,
  StatusBar,
  Image,
  Alert,
  Linking,
} from 'react-native';
import Images from '../../constants/Images';
import {getScreenHeight, getScreenWidth} from '../../utils/domUtils';
import {openCameraImage, openGalleryImage} from './uploadImage';

const ImagePickerModal = (props: any) => {
  const [openSettings, setOpenSettings] = useState(false);

  const settingHandler = () => {
    setOpenSettings(true);
  };

  const openGallery = async () => {
    try {
      const res = await openGalleryImage(
        props.height,
        props.width,
        props.cropping,
        props.quality,
        settingHandler,
      );
      if (res) {
        props.pressHandler();
        props.result(res);
      }
    } catch (error: any) {
      console.log(error);
      if (error.message === 'User cancelled image selection') {
        return;
      }
      if (
        error.message === 'User did not grant library permission.' ||
        'User did not grant camera permission.'
      ) {
        setOpenSettings(true);
      }
    }
  };

  const openCamera = async () => {
    try {
      const res = await openCameraImage(
        props.height,
        props.width,
        props.cropping,
        props.quality,
        settingHandler,
      );
      if (res) {
        props.result(res);
        props.pressHandler();
      }
    } catch (error: any) {
      console.log(error.message);
      if (error.message === 'User cancelled image selection') {
        return;
      }
      if (
        error.message === 'User did not grant camera permission.' ||
        'User did not grant library permission.'
      ) {
        setOpenSettings(true);
      }
    }
  };

  return (
    <>
      <Modal visible={true} animationType="fade" transparent={true} {...props}>
        <Pressable onPress={props.pressHandler} style={styles.modalScreen}>
          <View style={styles.modalContanier}>
            <Text style={styles.title}>
              Upload <Text style={{color: 'Orange'}}>Photo</Text>
            </Text>
            {openSettings ? (
              <View>
                <Text
                  style={{marginBottom: getScreenHeight(3), color: 'black'}}>
                  You have denied the permission please go to settings and gave
                  permission
                </Text>
                <View style={styles.row}>
                  <Text style={{color: 'black'}} onPress={props.pressHandler}>
                    Okay
                  </Text>
                  <Text
                    style={{color: 'black'}}
                    onPress={() => {
                      props.pressHandler();
                      Linking.openSettings();
                    }}>
                    Open Settings
                  </Text>
                </View>
              </View>
            ) : (
              <View style={styles.footer}>
                <TouchableOpacity
                  onPress={openCamera}
                  style={styles.semifottercontanier}>
                  <Text style={styles.subtitle}>Camera</Text>
                  <Image source={Images.camera} style={styles.icon} />
                </TouchableOpacity>

                <View style={styles.line} />

                <TouchableOpacity
                  onPress={openGallery}
                  style={styles.semifottercontanier}>
                  <Text style={styles.subtitle}>Gallery</Text>
                  <Image source={Images.gallery} style={styles.icon} />
                </TouchableOpacity>
              </View>
            )}
            <View />
          </View>
        </Pressable>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  modalScreen: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContanier: {
    backgroundColor: 'white',
    height: getScreenHeight(30),
    width: getScreenWidth(65),
    alignSelf: 'center',
    justifyContent: 'space-between',
    padding: getScreenHeight(2),
    borderRadius: getScreenHeight(2),
  },
  title: {
    fontSize: getScreenHeight(2),
    alignSelf: 'center',
    color: 'black',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  subtitle: {
    fontSize: getScreenHeight(1.5),
    marginBottom: getScreenHeight(1),
    color: 'black',
  },
  semifottercontanier: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    height: getScreenHeight(12),
    width: getScreenWidth(0.1),
    backgroundColor: 'black',
  },
  icon: {
    height: getScreenHeight(3),
    width: getScreenHeight(3),
    resizeMode: 'contain',
    tintColor: 'black',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default ImagePickerModal;
