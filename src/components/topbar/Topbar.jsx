import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MenuIcon from "@material-ui/icons/MenuOutlined";
import Badge from "@material-ui/core/Badge";
import { UncontrolledPopover, PopoverHeader, PopoverBody } from "reactstrap";
import "./topbar.css";

export default function Topbar({ toggleSidebar }) {
  return (
    <div className="topbarContainer">
      <div
        style={{ cursor: "pointer", marginRight: "auto" }}
        onClick={toggleSidebar}
      >
        <MenuIcon />
      </div>
      <div className="searchbar">
        <SearchIcon className="searchIcon" />
        <input className="searchInput" />
      </div>
      {/* <Badge badgeContent={4} color="secondary" id="UncontrolledPopover">
        <NotificationsIcon />
      </Badge>
      <UncontrolledPopover placement="bottom" target="UncontrolledPopover">
        <PopoverHeader>Notifications</PopoverHeader>
        <PopoverBody>
          <ul style={{ listStyle: "none", padding: "0" }}>
            <li className="mb-2">Notification 1</li>
            <li className="mb-2">Notification 1</li>
            <li className="mb-2">Notification 1</li>
          </ul>
        </PopoverBody>
      </UncontrolledPopover> */}
    </div>
  );
}
