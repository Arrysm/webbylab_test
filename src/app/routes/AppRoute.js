import {useDispatch, useSelector} from "react-redux";
import {Redirect, Route, Switch} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Main from "../pages/Main/Main";
import Registry from "../pages/Registry/Registry";
import Login from "../pages/Login/Login";
import {useEffect} from "react";
import {setToken} from "../store/actions/tokenActions";
import Loader from "../components/Loader/Loader";

const AppRoute = () => {
    const dispatch = useDispatch();
    const token = useSelector(store => store.token);
    const isLoading = useSelector(store => store.isLoading);

    useEffect(() => {
        const storageToken = sessionStorage.getItem('webbyUser') || 'DAS';
        dispatch(setToken(storageToken));
    }, [dispatch])

    if (isLoading) return <Loader />


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


