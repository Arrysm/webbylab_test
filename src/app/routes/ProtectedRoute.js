import {Redirect, Route} from "react-router-dom";
import {useSelector} from "react-redux";

const ProtectedRoute = (props) => {
    const token = useSelector(store => store.token);
    return token ? <Route {...props} /> : <Redirect to="/login"/>;
};

export default ProtectedRoute;