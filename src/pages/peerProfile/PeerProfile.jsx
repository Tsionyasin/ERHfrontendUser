import "../profile/profile.css";
import Rightbar from "../../components/rightbar/Rightbar";
import EditIcon from "@material-ui/icons/Edit";
import { useHistory } from "react-router-dom";
import ProfileFeed from "../../components/feed/ProfileFeed";
import { Button } from "reactstrap";

export default function PeerProfile() {
  const history = useHistory();

  return (
    <div className="profile">
      <div className="profile__header">
        <div className="profile__cover">
          <img className="profile__coverImg" src="assets/post/1.jpeg" alt="" />
          <div className="profile__photo">
            <div className="profile__photo--relative">
              <img
                className="profile__photoImg"
                src="assets/person/1.jpeg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="profileInfo">
        <h4 className="profileInfoName">Betsu</h4>
        <span className="profileInfoDesc">Love For All</span>
        <Button className="mt-2">Follow</Button>
      </div>
      <div className="profileRightBottom">
        <ProfileFeed />
        <Rightbar />
      </div>
    </div>
  );
}
