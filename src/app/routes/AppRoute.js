import {useSelector} from "react-redux";
import {Redirect, Route, Switch} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Main from "../pages/Main/Main";
import Registry from "../pages/Registry/Registry";
import Login from "../pages/Login/Login";

const AppRoute = () => {
    const token = useSelector(store => store.token);

    return (
        <Switch>
            <Route exact path={'/login'} render={() => token ? <Redirect to={'/collection'}/> : <Login/>}/>
            <Route exact path={'/registration'} render={() => token ? <Redirect to={'/collection'}/> : <Registry/>}/>
            <ProtectedRoute exact path="/" render={() => <Redirect to="/login"/>}/>
            <ProtectedRoute exact path="/collection" component={Main}/>
            <Route exact path={'*'} render={() => <Redirect to="/login"/>}/>

        </Switch>
    )
}

export default AppRoute;


