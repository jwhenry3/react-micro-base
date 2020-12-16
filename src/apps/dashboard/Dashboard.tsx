import './Dashboard.scss';
import React        from "react";
import UserProvider from "../../lib/UserProvider";

function Dashboard() {
    return (<UserProvider>
        <div className="dashboard">
            Loaded Dashboard!
        </div>
    </UserProvider>);
}

export default Dashboard;
