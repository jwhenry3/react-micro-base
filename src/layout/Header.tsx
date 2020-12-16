import {AppBar, IconButton, Toolbar, Typography} from "@material-ui/core";
import {House, Person}                           from "@material-ui/icons";
import React, {FC, useState}                     from "react";
import "./Header.scss";
import AccountMenu                               from "./AccountMenu";
import Nav                                       from "./Nav";

const Header: FC<any> = (props: { withNav?: boolean }) => {
  const [accountOpen, setAccountOpen]             = useState<boolean>(false);
  const [accountMenuAnchor, setAccountMenuAnchor] = useState<HTMLElement | null>(null);
  return (
    <AppBar position="static">
      <Toolbar>
        <div className="wrapper">
          <House/>
          <Typography variant="h6" className="title">React Micro</Typography>
          <div className="stretch"/>
          <IconButton color="inherit" ref={setAccountMenuAnchor} onClick={() => setAccountOpen(true)}>
            <Person/>
          </IconButton>
        </div>
      </Toolbar>
      {accountMenuAnchor !== null
       ? <AccountMenu anchorEl={accountMenuAnchor}
                      open={accountOpen}
                      onClose={() => setAccountOpen(false)}/>
       : ''}
      {props.withNav ? <Nav/> : ''}
    </AppBar>
  );
};

export default Header;
