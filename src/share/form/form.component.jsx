import React from 'react'
import {GroupContainer, FormInputContainer, FormInputLabel} from "./form.style";

const FormInput = ({handleChane, label, ...props}) => {
    return(
    <GroupContainer>
        <FormInputContainer onChange={handleChane}{...props}/>
        {
            label? (
                <FormInputLabel className={props.value.length ? 'shrink' : ''}>
                    {label}
                </FormInputLabel>
            ): null
        }
    </GroupContainer>
)};
export default FormInput;
