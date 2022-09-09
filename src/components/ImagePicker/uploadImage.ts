import {Alert, PermissionsAndroid, Platform} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Strings from '../../constants/Strings';

export const openGalleryImage = async (
  height: any,
  width: any,
  cropping: any,
  quality: any,
  action: any,
) => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      {
        title: Strings.permissions.title,
        message: Strings.permissions.message,
        buttonNeutral: Strings.permissions.ask,
        buttonNegative: Strings.permissions.cancel,
        buttonPositive: Strings.permissions.okay,
      },
    );
    if (Platform.OS !== 'ios') {
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        const res = await ImagePicker.openPicker({
          mediaType: 'photo',
          cropping: cropping ? cropping : false,
          multiple: false,
          width: width ? width : undefined,
          height: height ? height : undefined,
          compressImageQuality: quality ? quality : 1,
        });
        if (res) {
          return res;
        }
      } else {
        action();
      }
    } else {
      const res = await ImagePicker.openPicker({
        mediaType: 'photo',
        cropping: cropping ? cropping : false,
        multiple: false,
        width: width ? width : undefined,
        height: height ? height : undefined,
        compressImageQuality: quality ? quality : 1,
      });
      if (res) {
        console.log(res);
        return res;
      }
    }
  } catch (error: any) {
    console.log(error);
    throw new Error(error.message);
  }
};

export const openCameraImage = async (
  height: any,
  width: any,
  cropping: any,
  quality: any,
  action: any,
) => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: Strings.permissions.title,
        message: Strings.permissions.message,
        buttonNeutral: Strings.permissions.ask,
        buttonNegative: Strings.permissions.cancel,
        buttonPositive: Strings.permissions.okay,
      },
    );
    if (Platform.OS !== 'ios') {
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        const res = await ImagePicker.openCamera({
          mediaType: 'photo',
          cropping: cropping ? cropping : true,
          useFrontCamera: true,
          width: width ? width : undefined,
          height: height ? height : undefined,
          compressImageQuality: quality ? quality : 1,
        });
        if (res) {
          return res;
        }
      } else {
        action();
      }
    } else {
      const res = await ImagePicker.openCamera({
        mediaType: 'photo',
        cropping: cropping ? cropping : true,
        useFrontCamera: true,
        width: width ? width : 1920,
        height: height ? height : 1080,
        compressImageQuality: quality ? quality : 1,
      });
      if (res) {
        return res;
      }
    }
  } catch (error: any) {
    console.log(error.message);
    throw new Error(error.message);
  }
};
