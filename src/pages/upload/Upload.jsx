import React, { useState } from "react";
import MainContainer from "../../components/shared/MainContainer";
import {
  Breadcrumb,
  BreadcrumbItem,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import DatePicker from "react-datepicker";
import AttachmentIcon from "@material-ui/icons/Attachment";
//import { Label, Room } from "@material-ui/icons";

import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

function Upload() {
  const [startDate, setStartDate] = useState(new Date());
  const [attachmentFile, setAttachmentFile] = useState(null);
  const [openTagInput, setOpenTagInput] = useState(false);
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [department, setDepartment] = useState("");
  const [institute, setInstitute] = useState("");
  const [academiclevel, setAcademiclevel] = useState("");
  const [under, setUnder] = useState("");
  const [year, setYear] = useState("");
  const [date, setDate] = useState("");

  async function handleFormSubmittion(e) {
    e.preventDefault();

    let data = new FormData();
    data.append("status",40);
    data.append("file", attachmentFile);
    data.append("title", title)
    await axios.post(
      "http://localhost:8000/upload/upload/" + 
      //JSON.parse(localStorage.getItem("user")).username,
     "PP",
      data,
      {
        
        headers: {
          "x-access-token": JSON.parse(localStorage.getItem("uploads")).token,

          "Content-Type": 'multipart/form-data'
        },
      }
    );

    // do something
    console.log("Form submitted");
  }

  function handleAttachmentFile(e) {
    setAttachmentFile(e.target.files[0]);
  }
  function handleDescription(e) {
    setDescription(e.target.value);
  }
  function handleTitle(e) {
    setTitle(e.target.value);
  }
  function handleDepartment(e) {
    setDepartment(e.target.value);
  }
  function handleAcademiclevel(e) {
    setAcademiclevel(e.target.value);
  }
  function handleInstitute(e) {
    setInstitute(e.target.value);
  }
  function handleUnder(e) {
    setUnder(e.target.value);
  }

  function handleYear(e) {
    setYear(e.target.value);
  }

  return (
    <MainContainer>
      <Form
        encType="multipart/form-data"
        onSubmit={handleFormSubmittion}
        id="form"
      >
        <h3>Upload</h3>
        <div className="mt-4">
          <Row>
            
            <Input
              type="textarea"
              name="description"
              rows="10"
              value={description}
              onChange={handleDescription}
              placeholder="Description..."
            />
          </Row>
          <Row className="mt-4">
            <div className="shareOption">
              <label
                htmlFor="attachment"
                style={{
                  cursor: "pointer",
                  fontSize: "20px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <AttachmentIcon
                  htmlColor="tomato"
                  className="shareIcon"
                  style={{ fontSize: "40px" }}
                />
                File
              </label>
              <input
                type="file"
                name="attachmentFile"
                onChange={handleAttachmentFile}
              />
            </div>
          </Row>

          <Row className="mt-4" xs="1" md="3">
            <Col className="mb-2">
              <FormGroup>
                <Label htmlFor="exampleEmail">Title</Label>
                <Input
                  type="text"
                  name="title"
                  value={title}
                  onChange={handleTitle}
                  required
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label htmlFor="exampleEmail">Department</Label>
                <Input
                  type="text"
                  name="department"
                  value={department}

onChange={handleDepartment}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label htmlFor="exampleEmail">Institute</Label>
                <Input
                  type="text"
                  name="institute"
                  value={institute}
                  onChange={handleInstitute}
                ></Input>
              </FormGroup>
            </Col>
          </Row>

          <Row className="mt-4" xs="1" md="3">
            <Col className="mb-2">
              <FormGroup>
                <Label htmlFor="exampleEmail">Academic Level</Label>
                <Input
                  type="text"
                  name="academiclevel"
                  value={academiclevel}
                  onChange={handleAcademiclevel}
                ></Input>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label htmlFor="exampleEmail">Year</Label>
                <Input
                  type="number"
                  maxLength={4}
                  name="year"
                  value={year}
                  onChange={handleYear}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label htmlFor="exampleEmail">Date</Label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className="form-control"
                />
              </FormGroup>
            </Col>
          </Row>

          <div className="mt-5 d-flex justify-content-end">
            <Button
              variant="contained"
              onClick={handleFormSubmittion}
              component={Link}
              to="/"
            >
              Submit
            </Button>
          </div>
        </div>
      </Form>
    </MainContainer>
  );
}

export default Upload;