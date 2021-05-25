import React from 'react';
import { withRouter } from 'react-router-dom';
import {
    BackgroundImageContainer,
    MenuItemContainer,
    ContentContainer,
    ContentTitle,
    ContentSubtitle
} from "./menu-item.style";
const MenuItem = ({title, size, history, imageUrl, linkUrl, match}) => {
    return(
    <MenuItemContainer
        size = {size}
        onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <BackgroundImageContainer  imageUrl={imageUrl}/>
        <ContentContainer className='content'>
            <ContentTitle>{title.toUpperCase()}</ContentTitle>
            <ContentSubtitle>SHOP NOW</ContentSubtitle>
        </ContentContainer>
    </MenuItemContainer>
)};

export default withRouter(MenuItem);
