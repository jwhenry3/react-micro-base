import firebase                   from "firebase";
import "./Auth.scss";
import {FC}                       from "react";
import {Button}                   from "@material-ui/core";
import {ReactComponent as Google} from "./google.svg";
import AuthRouter                 from "./AuthRouter";
import {env}                      from "../../lib/environment";
import UserProvider               from "../../lib/UserProvider";

const Auth: FC<any> = (props: { baseRoute?: string }) => {
  env.baseRoute            = props.baseRoute || '';
  const onSignInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('email');
    await firebase.auth().signInWithPopup(provider);
  };
  const googleProps: any   = {className: 'google-icon'};
  return (<UserProvider>
    <div className="auth">
      <div className="login">
        <h2>React Micro</h2>
        <AuthRouter baseRoute={props.baseRoute || ''}/>
        <div className="form-field sso">
          <Button variant="contained" color="primary"
                  type="button"
                  className="google-button"
                  onClick={onSignInWithGoogle}>
            <Google {...googleProps}/>
            Login with Google
          </Button>
        </div>
      </div>
    </div>
  </UserProvider>);
};
export default Auth;
