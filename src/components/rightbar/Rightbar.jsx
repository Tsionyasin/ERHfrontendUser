import "./rightbar.css";
export default function Rightbar({ profile }) {
  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">About</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Email</span>
            <span className="rightbarInfoValue">{profile.email}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Contact</span>
            <span className="rightbarInfoValue">{profile.phone}</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <ProfileRightbar />
      </div>
    </div>
  );
}
