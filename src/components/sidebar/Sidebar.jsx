import "./sidebar.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PersonIcon from "@material-ui/icons/Person";
import { NavLink } from "react-router-dom";
import { Home } from "@material-ui/icons";

export default function Sidebar({ isOpen, toggle }) {
    return (
        <div className={`${isOpen ? "sidebar is-open" : "sidebar"}`}>
            <img
                src="assets/logo/erhLogo2.jpeg"
                alt=""
                className="sidebar__logo"
            />
            <div>
                <ul className="sidebarList">
                    <NavLink
                        as="li"
                        to="/"
                        exact
                        className="sidebarListItem"
                        activeClassName="active"
                    >
                        <Home className="sidebarIcon" />
                        <span className="sidebarListItemText">Home</span>
                    </NavLink>
                    <NavLink
                        as="li"
                        to="/profile"
                        className="sidebarListItem"
                        activeClassName="active"
                    >
                        <PersonIcon className="sidebarIcon" />
                        <span className="sidebarListItemText">Profile</span>
                    </NavLink>

                    <li className="sidebarListItem">
                        <ExitToAppIcon className="sidebarIcon" />
                        <span className="sidebarListItemText">Logout</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}
