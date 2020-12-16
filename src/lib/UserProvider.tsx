import {useState, useEffect, createContext, ReactNode, FC, Component} from "react";
import firebase                                                       from "firebase";

export const UserContext = createContext<any>(null);

export const withUser = (Comp: typeof Component | FC) => {
  return (props: any) => <UserContext.Consumer>
    {(contexts) => <Comp {...props} {...contexts} />}
  </UserContext.Consumer>;
};
const UserProvider    = (props: { children: ReactNode }) => {
  const auth              = firebase.auth();
  const [state, setState] = useState<{ loaded: boolean, user: firebase.User | null }>({
    loaded: false,
    user  : auth.currentUser
  });
  useEffect(() => {
    return auth.onAuthStateChanged((user) => setState({
      loaded: true,
      user  : user || null
    }));
  }, [auth, setState]);
  if (!state.loaded) {
    return <div>Loading...</div>;
  }
  return (
    <UserContext.Provider value={{user: state.user}}> {props.children} </UserContext.Provider>
  );
};
export default UserProvider;
