import {Link, withRouter}   from "react-router-dom";
import {Tab, Tabs, Toolbar} from "@material-ui/core";
import {
  Dashboard,
  Settings,
}                           from "@material-ui/icons";
import {FC}                 from "react";
import {withUser}           from "../lib/UserProvider";
import firebase             from "firebase";
import React                from "react";
import withMobile           from "../lib/withMobile";
import "./Nav.scss";
import {env}                from "../lib/environment";

const mobileTabProps  = {className: "stretch"};
const desktopTabProps = {
  variant     : "scrollable",
  "aria-label": "scrollable force tabs",
};
const desktopTabs     = [
  {label: "Dashboard"},
  {label: "Settings"},
];
const mobileTabs      = [
  {icon: <Dashboard/>},
  {icon: <Settings/>},
];
const values          = [
  'dashboard',
  'settings'
];
const Nav: FC<any>    = (props: { location: any, mobile: boolean, user?: firebase.User }) => {
  const tabsProps: any = props.mobile ? mobileTabProps : desktopTabProps;
  const tabProps       = props.mobile ? mobileTabs : desktopTabs;
  const route          = props.location.pathname.replace(env.baseRoute, '');
  const value          = route.split("/")[1];
  if (!values.includes(value))
    return <></>;
  return (
    <Toolbar className="nav">
      <div className="wrapper">
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          {...tabsProps}
        >
          {values.map((value, i) => <Tab {...tabProps[i]}
                                         key={i}
                                         value={value}
                                         component={Link}
                                         to={env.baseRoute + "/" + value}/>)}
        </Tabs>
      </div>
    </Toolbar>
  );
};

export default withMobile(withUser(withRouter(Nav)));
