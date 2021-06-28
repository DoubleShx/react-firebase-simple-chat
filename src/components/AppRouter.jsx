import { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Context } from "..";
import { privateRoutes, publicRoutes } from "../routes";
import { CHAT_ROUTE, LOGIN_ROUTE } from "../utils/consts";
import {useAuthState} from 'react-firebase-hooks/auth'


const AppRouter = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)

    console.log(user)
    return user ? 
    ( 
        <Switch>
            {privateRoutes.map(({path, Component}) => 
                <Route path={path} component={Component} exact={true} /> 
            )}
            <Redirect to={CHAT_ROUTE} />
        </Switch>
    ) :
    (
        <Switch>
            {publicRoutes.map(({path, Component}) =>
                <Route path={path} component={Component} exact={true} />
            )}
            <Redirect to={LOGIN_ROUTE} />
        </Switch>
    )

}

export default AppRouter;