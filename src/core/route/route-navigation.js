import Auth from "../../page/auth/auth.component";
import {Route, Switch} from "react-router-dom";
import HomePage from "../../page/homePage/homePage.component";
import {Header} from "../../share/header/header.component";

export const RootNavigation = () => (
    <>
        <Header/>
        <Switch>
            <Route exact path={'/'} component={HomePage}/>
            <Route exact path={'/auth'} component={Auth}/>
        </Switch>
    </>
);
