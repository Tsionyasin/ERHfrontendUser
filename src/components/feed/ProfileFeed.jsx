import Post from "../post/Post";
import "./feed.css";
import { PersonalFeed } from "../../dummyData";

export default function ProfileFeed() {
    return (
        <div className="feed">
            <div className="feedWrapper">
                {PersonalFeed.map((p) => (
                    <Post key={p.id} post={p} />
                ))}
            </div>
        </div>
    );
}
