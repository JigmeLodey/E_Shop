import React from 'react'
import {GroupContainer, FormInputContainer, FormInputLabel, Textarea} from "./form.style";

const FormInput = ({handleChane, textarea, label, ...props}) => {
    return(
    <GroupContainer>
        {
            textarea ? (
                <Textarea onChange={handleChane}{...props}/>
            ): (
                <FormInputContainer onChange={handleChane}{...props}/>
            )
        }
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
