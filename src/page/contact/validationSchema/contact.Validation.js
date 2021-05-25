import * as yup from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
export const ContactSchema = yup.object().shape({
   email: yup.string().email('Invalid email').required('Email is Required'),
    username: yup.string().min(3, 'Too short').required('Username Required'),
    phone: yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Phone number is required'),
    message: yup.string().min(50, 'Too short').required('Message is required')
});
