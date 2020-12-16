import {Menu, MenuItem} from "@material-ui/core";
import {Link}           from "react-router-dom";

const AccountMenu = ({anchorEl, open, onClose}: { anchorEl: HTMLElement, open: boolean, onClose: () => void }) => {
  return (<Menu
    anchorEl={anchorEl}
    anchorOrigin={{vertical: 'top', horizontal: 'right'}}
    id="account-menu"
    keepMounted
    transformOrigin={{vertical: 'top', horizontal: 'right'}}
    open={open}
    onClose={onClose}
  >
    <MenuItem onClick={onClose} component={Link} to="/app/profile">Profile</MenuItem>
    <MenuItem onClick={onClose} component={Link} to="/app/account">My account</MenuItem>
    <MenuItem onClick={onClose} component={Link} to="/auth/logout">Logout</MenuItem>
  </Menu>);
};

export default AccountMenu;
