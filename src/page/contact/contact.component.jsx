import React from 'react';
import {Formik} from "formik";
import axios from 'axios';
import {ContactContainer, ContactContain, ContactTitle, ButtonsBarContainer, Error} from "./contact.style";
import FormInput from "../../share/form/form.component";
import CustomButton from "../../share/button/button.component";
import {ContactSchema} from "./validationSchema/contact.Validation";

const Contact = () => {
    const initialValue = {
      email: '',
      username: '',
      phone: '',
      message: ''
    };
    return (
        <ContactContainer>
            <ContactContain>
                <ContactTitle>
                    Contact Us
                </ContactTitle>
                <Formik initialValues={initialValue} validationSchema={ContactSchema} onSubmit={(value) => axios.post('https://jsonplaceholder.typicode.com/posts', {value}).then(res => {
                    console.log(res)
                })}>
                        {({values, handleChange, handleBlur, handleSubmit, errors, touched}) => (
                            <>
                                <FormInput
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    name='username'
                                    type='text'
                                    label='Username'
                                    value={values.username}
                                    textarea={false}
                                />
                                {errors.username && touched.username ? (
                                    <Error>
                                        {errors.username}
                                    </Error>
                                ): null}
                                <FormInput
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    name='email'
                                    type='email'
                                    label='Email'
                                    value={values.email}
                                    textarea={false}
                                />
                                {errors.email && touched.email ? (
                                    <Error>
                                        {errors.email}
                                    </Error>
                                ): null}
                                <FormInput
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    name='phone'
                                    type='text'
                                    label='Phone'
                                    value={values.phone}
                                    textarea={false}

                                />
                                {errors.phone && touched.phone ? (
                                    <Error>
                                        {errors.phone}
                                    </Error>
                                ): null}
                                <FormInput
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    name='message'
                                    type='text'
                                    label='Message'
                                    value={values.message}
                                    textarea={true}
                                />
                                {errors.message && touched.message ? (
                                    <Error>
                                        {errors.message}
                                    </Error>
                                ): null}
                                <ButtonsBarContainer>
                                    <CustomButton onClick={handleSubmit}>Send</CustomButton>
                                </ButtonsBarContainer>
                            </>
                        )}
                </Formik>
            </ContactContain>
        </ContactContainer>
    )
};
export default Contact;
