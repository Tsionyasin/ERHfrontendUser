import React, { useState } from "react";
import "./share.css";
import { Label, Room } from "@material-ui/icons";
import AttachmentIcon from "@material-ui/icons/Attachment";
import Select from "react-select";

export default function Share() {
    const options = [
        { value: "addis ababa university", label: "Addis Ababa University" },
    ];
    const [openTagInput, setOpenTagInput] = useState(false);
    const [attachmentFile, setAttachmentFile] = useState("");

    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img
                        className="shareProfileImg"
                        src="/assets/person/1.jpeg"
                        alt=""
                    />
                    <input placeholder="Upload a post" className="shareInput" />
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <AttachmentIcon
                                htmlColor="tomato"
                                className="shareIcon"
                            />
                            <label
                                className="shareOptionText"
                                htmlFor="attachment"
                                style={{ cursor: "pointer" }}
                            >
                                File
                            </label>
                            <input
                                type="file"
                                name="photo"
                                id="attachment"
                                onChange={(e) =>
                                    setAttachmentFile(e.target.files[0].name)
                                }
                            />
                        </div>
                        <div
                            style={{
                                marginRight: "10px",
                                display: "grid",
                                placeItems: "center",
                            }}
                        >
                            {attachmentFile}
                        </div>
                        <div
                            className="shareOption"
                            onClick={() => setOpenTagInput(!openTagInput)}
                        >
                            <Label htmlColor="blue" className="shareIcon" />
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div style={{ display: openTagInput ? "" : "none" }}>
                            <Select
                                className="tagInput"
                                options={options}
                                isMulti
                            />
                        </div>
                        <div className="shareOption">
                            <Room htmlColor="green" className="shareIcon" />
                            <span className="shareOptionText">Location</span>
                        </div>
                    </div>
                    <button className="shareButton">Share</button>
                </div>
            </div>
        </div>
    );
}
