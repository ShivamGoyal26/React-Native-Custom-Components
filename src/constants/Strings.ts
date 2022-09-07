export default {
  name: {
    errorMessage: 'Please enter valid name',
    placeholder: 'Demo',
    label: 'Name',
    fieldName: 'name',
    required: 'Name is required',
  },
  email: {
    errorMessage: 'Please enter the correct mail',
    placeholder: 'abc@demo.com',
    label: 'Email',
    fieldName: 'email',
    required: 'Email is required',
  },
  password: {
    errorMessage: 'Password is too short & weak',
    placeholder: '********',
    label: 'Password',
    fieldName: 'password',
    required: 'Password is required',
  },
  confirmPassword: {
    errorMessage: 'Confirm Password & Password not matching',
    placeholder: '********',
    label: 'Confirm Password',
    fieldName: 'confirmpassword',
    required: 'Confirm Password is required',
  },
  phone: {
    errorMessage: 'Please enter a valid phone number',
    placeholder: '1111-11111',
    label: 'phone',
    fieldName: 'phone',
    required: 'Phone is required',
  },
  formTypes: {
    default: 'default',
    email: 'email',
    password: 'password',
    phone: 'phone',
  },
};
