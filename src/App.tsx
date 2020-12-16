import React, {useEffect, useState} from 'react';
import firebase                     from "firebase";
import {initializeFirebase}         from "./lib/firebase";
import AppRouter                    from "./AppRouter";
import UserProvider                 from "./lib/UserProvider";

const App = () => {
  const [app, setApp] = useState<firebase.app.App | null>(null);
  useEffect(() => {
    if (app === null) {
      setApp(initializeFirebase());
    }
  }, [app, setApp]);
  if (!app)
    return <div>Loading...</div>;
  return <UserProvider><AppRouter/></UserProvider>;
};

export default App;
