import Auth from "../../page/auth/auth.component";
import {Route, Switch} from "react-router-dom";
import HomePage from "../../page/homePage/homePage.component";
import {Header} from "../../share/header/header.component";
import Contact from "../../page/contact/contact.component";

export const RootNavigation = () => (
    <>
        <Header/>
        <Switch>
            <Route exact path={'/'} component={HomePage}/>
            <Route exact path={'/contact'} component={Contact}/>
            <Route exact path={'/auth'} component={Auth}/>
        </Switch>
    </>
);
