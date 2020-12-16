import {useEffect, useState} from "react";
import firebase              from "firebase";
import {Redirect}            from "react-router-dom";
import {withBaseRoute}       from "../../lib/with-base-route";

const Logout = (props: { baseRoute?: string }) => {
  const [doRedirect, setDoRedirect] = useState(false);
  useEffect(() => {
    firebase.auth().signOut().then(() => {
      setDoRedirect(true);
    });
  }, [setDoRedirect]);
  if (doRedirect) {
    return <Redirect to={props.baseRoute + "/auth/login"}/>;
  }
  return <div>Logging Out...</div>;
};

export default withBaseRoute(Logout);
