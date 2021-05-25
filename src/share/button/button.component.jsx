import React from 'react';
import {CustomButtonContainer} from "./button.style";

const CustomButton = ({ children, ...props }) => (
    <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;
