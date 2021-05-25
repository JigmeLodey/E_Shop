import React from 'react';
import {HeaderContainer, LogoContainer, OptionLink, OptionsContainer} from './header.style';
import {ReactComponent as Logo} from '../../assest/image/crown.svg';

export const Header = () => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo/>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/'>HOME</OptionLink>
            <OptionLink to='/shop'>SHOP</OptionLink>
            <OptionLink to='/contact'>CONTACT</OptionLink>
            <OptionLink  to='/auth'>LOGIN</OptionLink>

        </OptionsContainer>
    </HeaderContainer>
);
