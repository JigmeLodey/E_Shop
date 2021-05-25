import * as yup from 'yup';
export const SignInSchema = yup.object().shape({
   email: yup.string().email('Invalid email').required('Email Required'),
   password: yup.string().min(3, 'Too short').required('Password Required')
});
export const SignUpSchema = yup.object().shape({
   email: yup.string().email('Invalid email').required('Email Required'),
   password: yup.string().min(3, 'Too short').required('Password Required'),
   username: yup.string().min(3, 'Too Short').required('Username is required'),
   confirmPassword: yup.string().required('password must match').oneOf([yup.ref('password'), null], 'Password must match')
});
