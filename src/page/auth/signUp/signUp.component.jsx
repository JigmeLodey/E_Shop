import {ButtonContainer, SignUpContainer, SignUpTitle} from "./signUp.style";
import FormInput from "../../../share/form/form.component";
import {Formik} from "formik";
import React from "react";
import CustomButton from "../../../share/button/button.component";
import {SignUpSchema} from "../validationSchema/authValidationSchema";
import {Error} from "../signIn/signIn.Style";

const SignUp = () => (
    <SignUpContainer>
        <SignUpTitle>I do not have a account</SignUpTitle>
        <span>Sign up with your email and password</span>
        <Formik initialValues={{email: '', password: '', username: '', confirmPassword: ''}}
                validationSchema={SignUpSchema}
                onSubmit={value => (console.log(value))}>
            {({values, handleChange, handleSubmit, handleBlur, errors, touched}) => (
                <>
                    <FormInput
                        onChange = {handleChange}
                        name='username'
                        type='text'
                        label='Username'
                        onBlur = {handleBlur}
                        value={values.username}
                    />
                    <Error>
                        {errors.username && touched.username ? (
                            <>{errors.username}</>
                        ): null}
                    </Error>

                    <FormInput
                        onChange = {handleChange}
                        name='email'
                        type='email'
                        label='Email'
                        value={values.email}
                        onBlur = {handleBlur}
                    />
                    <Error>
                        {errors.email && touched.email ? (
                            <>{errors.email}</>
                        ): null}
                    </Error>
                    <FormInput
                        onChange = {handleChange}
                        name='password'
                        type='password'
                        label='Password'
                        value={values.password}
                        onBlur = {handleBlur}
                    />
                    <Error>
                    {errors.password && touched.password ? (
                        <>{errors.password}</>
                    ): null}
                    </Error>
                    <FormInput
                        onChange = {handleChange}
                        name='confirmPassword'
                        type='password'
                        label='Confirm Password'
                        value={values.confirmPassword}
                        onBlur = {handleBlur}
                    />
                    <Error>
                    {errors.confirmPassword && touched.confirmPassword ? (
                        <>{errors.confirmPassword}</>
                    ): null}
                    </Error>
                    <ButtonContainer>
                        <CustomButton type='button' onClick={handleSubmit}>Sign Up </CustomButton>
                    </ButtonContainer>
                    </>
            )}
        </Formik>
    </SignUpContainer>
);
export default SignUp;
