import {withUser}                            from "./lib/UserProvider";
import firebase                              from "firebase";
import {HashRouter, Redirect, Route, Switch} from "react-router-dom";
import React                                 from "react";
import Header                                from "./layout/Header";
import {env}                                 from "./lib/environment";
import {MicroApp}                            from "@jwhenry/react-micro/dist";
import {nameConvention}                      from "./config/name-convention";

const BUNDLE_URL               = (process.env.REACT_APP_BUNDLE_URL || 'http://localhost:5000/apps');
const MicroClient              = (props: { label: string, baseRoute?: string } & any) => {
  if (process.env.NODE_ENV === 'development') {
    return <MicroApp lazyLoad={() => import(`./apps/${props.label}/index`)}
                     name={nameConvention(props.label)} {...props}/>;
  }
  return <MicroApp jsFile={`${BUNDLE_URL}/${props.label}/main.js`}
                   cssFile={`${BUNDLE_URL}/${props.label}/main.css`}
                   name={nameConvention(props.label)} {...props}/>;
};
const AppRouter: React.FC<any> = (props: { user?: firebase.User }) => {

  if (!props.user)
    return (
      <div className="app">
        <HashRouter>
          <Switch>
            <Route path={env.baseRoute + "/auth"}
                   render={() => <MicroClient label="auth" baseRoute={env.baseRoute}/>}/>
            <Route path="*" render={() => <Redirect to={env.baseRoute + "/auth"}/>}/>
          </Switch>
        </HashRouter>
      </div>);

  return (
    <div className="app">
      <HashRouter>
        <Route path="*" render={() => <Header withNav={true}/>}/>
        <div className="wrapper vertical content">
          <Switch>
            <Route path={env.baseRoute + "/:app"}
                   render={(props) => <MicroClient label={props.match.params['app']} baseRoute={env.baseRoute}/>}/>
            <Route path="*" render={() => <Redirect to={env.baseRoute + "/dashboard"}/>}/>
          </Switch>
        </div>
      </HashRouter>
    </div>
  );
};

export default withUser(AppRouter);
