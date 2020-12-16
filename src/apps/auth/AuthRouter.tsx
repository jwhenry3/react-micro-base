import {FC}                                  from "react";
import {HashRouter, Redirect, Route, Switch} from "react-router-dom";
import Login                                 from "./Login";
import Register                              from "./Register";
import Logout                                from "./Logout";
import {withUser}                            from "../../lib/UserProvider";
import firebase                              from "firebase";

const AuthRouter: FC<any> = (props: { baseRoute: string, user?: firebase.User }) => {
  if (props.user) {
    return (<HashRouter>
      <Switch>
        <Route path={props.baseRoute + "/auth/logout"} component={Logout}/>
        <Route path={props.baseRoute + "/auth/*"}>
          <Redirect to={props.baseRoute + "/"}/>
        </Route>
      </Switch>
    </HashRouter>);
  }
  return (<HashRouter>
    <Switch>
      <Route path={props.baseRoute + "/auth/login"} component={Login}/>
      <Route path={props.baseRoute + "/auth/register"} component={Register}/>
      <Route path="*">
        <Redirect to={props.baseRoute + "/auth/login"}/>
      </Route>
    </Switch>
  </HashRouter>);
};


export default withUser(AuthRouter);
