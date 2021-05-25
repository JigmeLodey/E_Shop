import React from 'react'
import SignUp from './signUp/signUp.component'
import SignIn from "./signIn/signIn.component";
import {SignInAndSignUpContainer} from "./auth.style";

const Auth = () => {

    return (
        <SignInAndSignUpContainer>

            <SignIn/>
            <SignUp/>
        </SignInAndSignUpContainer>
    )
};
export default Auth;
