import React from 'react'
import {createStructuredSelector} from 'reselect';
import {connect} from "react-redux";
import {selectDirectorySections} from "../../state/redux/directory/directory.selector";
import {DirectoryMenuContainer} from "./directory.style";
import MenuItem from "../menu-item/menu-item.component";

const Directory = ({sections}) => (
    <DirectoryMenuContainer>
        {sections.map(({id, ...otherSectionsProps}) => (
            <MenuItem key={id} {...otherSectionsProps}/>
        ))}
    </DirectoryMenuContainer>
);
const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});
export default connect(mapStateToProps)(Directory);
