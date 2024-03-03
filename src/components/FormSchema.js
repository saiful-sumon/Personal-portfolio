import * as Yup from 'yup';

export const FromSchema = Yup.object({
    name:Yup.string().min(3, 'Too short').max(20, 'Too long').required('Name is required'),
    email:Yup.string().email('Invalid email address').required('Email is required'),
    phone:Yup.string().matches(/^(01|8801|\+8801)[0-9]{9}$/, 'Invalid phone number').required('Phone is required'),
    message:Yup.string().required('Message is required'),
});