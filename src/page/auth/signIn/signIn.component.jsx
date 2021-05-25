import {ButtonsBarContainer, Error, SignInContainer, SignInTitle} from "./signIn.Style";
import {Formik} from "formik";
import FormInput from "../../../share/form/form.component";
import CustomButton from "../../../share/button/button.component";
import {SignInSchema} from "../validationSchema/authValidationSchema";
import React from "react";

const SignIn = () => {
    const initialValue = {
      email: '',
      password: ''
    };
    return (
        <SignInContainer>
            <SignInTitle>
                I already have an account
            </SignInTitle>
            <span>Sign in with your email and password</span>
            <Formik initialValues={{...initialValue}}
                    validationSchema={SignInSchema}
                    onSubmit={(value) => console.log(value)}>
                {({handleChange,handleBlur, handleSubmit, errors, touched, values}) => (
                    <>
                        <FormInput
                            name="email"
                            type="email"
                            required
                            onBlur={handleBlur}
                            value={values.email}
                            onChange={handleChange}
                            label="Email"
                        />

                        <Error>
                            {errors.email && touched.email ? (
                                <>{errors.email}</>
                            ): null}
                        </Error>
                        <FormInput
                            name="password"
                            value={values.password}
                            type="password"
                            required
                            onBlur={handleBlur}
                            onChange={handleChange}
                            label="Password"
                        />
                        {errors.password && touched.password ? (
                            <Error>
                                {errors.password}
                            </Error>
                        ) : null}
                        <ButtonsBarContainer>
                            <CustomButton type='button' onClick={handleSubmit}>Sign in</CustomButton>
                            <CustomButton type='button' isGoogleSignIn>Using google</CustomButton>
                        </ButtonsBarContainer>
                    </>
                )}
            </Formik>
        </SignInContainer>
    )
};
export default SignIn;
