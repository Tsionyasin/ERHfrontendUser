import "./profile.css";
import Rightbar from "../../components/rightbar/Rightbar";
import EditIcon from "@material-ui/icons/Edit";
import { useHistory } from "react-router-dom";
import ProfileFeed from "../../components/feed/ProfileFeed";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Profile() {
  const history = useHistory();
  const [attachmentFile, setAttachmentFile] = useState(null); 
  const [openTagInput, setOpenTagInput] = useState(false);
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [department, setDepartment] = useState("");
  const [institute, setInstitute] = useState("");
  const [academiclevel, setAcademiclevel] = useState("");
  const [under, setUnder] = useState("");
  const [year, setYear] = useState("");
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/admin/profiles")
      .then((res) => {
        setProfile(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

    
  return (
    <div className="profile">
      <div className="profile__header">
        <div className="profile__cover">
          <img className="profile__coverImg" src="assets/post/1.jpeg" alt="" />
          <div className="profile__photo">
            <div className="profile__photo--relative">
              <img
                className="profi  le__photoImg"
                src={"http://localhost:8000/resource/profilePicture-1631798696664.png"}
                alt=""
              />
              <div
                className="profile__photo__editIcon"
                onClick={() => history.push("/profile/edit")}
              >
                <EditIcon />
                <span>Edit</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="profileInfo">
        <h4 className="profileInfoName"></h4>
        <span className="profileInfoDesc"></span>
      </div>
      <div className="profileRightBottom">
        <ProfileFeed />
        {/* <Rightbar profile={userProfile} /> */}
      </div>
    </div>
  );
}

/* <div className="profileRight">
    <div className="profileRightTop">
        <div className="profileCover">
            <img className="profileCoverImg" src="assets/post/8.jpeg" alt="" />
            <div className="profileUser">
                <img
                    className="profileUserImg"
                    src="assets/person/6.jpeg"
                    alt=""
                />
                <div className="profileRightItem">
                    <EditIcon className="profileRightIcon" />
                    <span className="profileRightIconText">Edit</span>
                </div>
            </div>
        </div>
        <div className="profileInfo">
            <h4 className="profileInfoName">
                Addis Ababa Institute of Technology
            </h4>
            <span className="profileInfoDesc">
                Seek Wisdom, Elevate Your Intellect and Serve Humanity.
            </span>
        </div>
    </div>
    <div className="profileRightBottom">
        <Feed />
        <Rightbar />
    </div>
</div>; */
