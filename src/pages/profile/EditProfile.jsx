import React, { useState } from "react";
import MainContainer from "../../components/shared/MainContainer";
import {
  Breadcrumb,
  BreadcrumbItem,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { CameraAlt } from "@material-ui/icons";
import "./EditProfile.css";

function EditProfile() {
  const history = useHistory();
  const [coverPhoto, setCoverPhoto] = useState("/assets/post/1.jpeg");
  const [profilePhoto, setProfilePhoto] = useState("/assets/person/1.jpeg");

  return (
    <MainContainer>
      <Breadcrumb>
        <BreadcrumbItem
          onClick={() => history.push("/profile")}
          style={{ cursor: "pointer" }}
        >
          Profile
        </BreadcrumbItem>
        <BreadcrumbItem active>Edit</BreadcrumbItem>
      </Breadcrumb>
      <h3>Edit Profile</h3>
      <div className="mt-4">
        <div className="cover">
          <div className="cover__section">
            <img src={coverPhoto} alt="" className="cover__img" />
            <div className="cover__img__cam">
              <label htmlFor="upload-cover">
                <CameraAlt style={{ cursor: "pointer" }} />
              </label>
              <input
                type="file"
                name="photo"
                id="upload-cover"
                onChange={(e) =>
                  setCoverPhoto(URL.createObjectURL(e.target.files[0]))
                }
              />
            </div>
          </div>
          <div className="profile__pic__section">
            <div className="profile__pic__section--inner">
              <img src={profilePhoto} alt="" className="profile__pic" />
              <div className="profile__pic__cam">
                <label htmlFor="upload-photo">
                  <CameraAlt style={{ cursor: "pointer" }} />
                </label>
                <input
                  type="file"
                  name="photo"
                  id="upload-photo"
                  onChange={(e) =>
                    setProfilePhoto(URL.createObjectURL(e.target.files[0]))
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <Row xs="1" md="3">
          <Col className="mb-2">
            <FormGroup>
              <Label htmlFor="exampleEmail">First Name</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail1"
                value="Betsu"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label htmlFor="exampleEmail">Last Name</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail2"
                value="Addis Ababa"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label htmlFor="exampleEmail">Gender</Label>
              <Input type="select" name="select" id="exampleSelect">
                <option>Female</option>
                <option>Male</option>
                <option>Others</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Row className="mt-4" xs="1" md="3">
          <Col className="mb-2">
            <FormGroup>
              <Label htmlFor="exampleEmail">Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail1"
                value="Betsu"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label htmlFor="exampleEmail">Phone Number</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail2"
                value="Addis Ababa"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label htmlFor="exampleEmail">Department</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail2"
                value="Addis Ababa"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row className="mt-4" xs="1" md="3">
          <Col className="mb-2">
            <FormGroup>
              <Label htmlFor="exampleEmail">Academic Level</Label>
              <Input type="select" name="select" id="exampleSelect">
                <option>Bachelor</option>
                <option>Masters</option>
                <option>PhD</option>
              </Input>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label htmlFor="exampleEmail">Year</Label>
              <Input type="number" maxLength={4} />
            </FormGroup>
          </Col>
          <Col></Col>
        </Row>

        <div className="mt-5 d-flex justify-content-end">
          <Button variant="contained">Submit</Button>
        </div>
      </div>
    </MainContainer>
  );
}

export default EditProfile;
