import React, { Component } from "react";
import MainContainer from "../../components/shared/MainContainer";
import axios from "axios";
import {
  Breadcrumb,
  BreadcrumbItem,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Form,
} from "reactstrap";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { CameraAlt } from "@material-ui/icons";
// import "./EditProfile.css";

class CompleteProfile extends Component {
  //const history = useHistory();
  // const [coverPhoto, setCoverPhoto] = useState(
  //   "/assets/person/placeholder.jpeg"
  // );
  // const [profilePhoto, setProfilePhoto] = useState(
  //   "/assets/person/cameraplaceholder.jpeg"
  // );

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      gender: "",
      email: "",
      phone: "",
      department: "",
      academiclevel: "",
      year: "",
    };
  }

  // componentDidMount() {
  //   axios
  //     .get(
  //       "http://localhost:8000/student/getStudent/" +
  //         JSON.parse(localStorage.getItem("user")).username
  //     )
  //     .then((res) => {
  //       console.log(this.props);
  //       if (!res.data.changeProfile) {
  //         this.props.history.push("/");
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: this.state.name,
      gender: this.state.gender,
      email: this.state.email,
      phone: this.state.phone,
      department: this.state.department,
      academiclevel: this.state.academiclevel,
      year: this.state.year,
    };
    //this.props.history.push("/completeprofile");
    console.log(data);

    axios
      .post(
        "http://localhost:8000/student/add-profile/" +
          JSON.parse(localStorage.getItem("user")).username,
        data,
        {
          headers: {
            "x-access-token": JSON.parse(localStorage.getItem("user")).token,
          },
        }
      )
      .then((res) => {
        this.setState({
          name: "",
          gender: "",
          email: "",
          phone: "",
          academiclevel: "",
          year: "",
        });
        console.log(res.data);
        this.props.history.push("/");
      });
    // const handlePasswordChange = (prop) => (event) => {
    //   setValues({ ...values, [prop]: event.target.value });
    // };
  };

  render() {
    return (
      <MainContainer>
        <h3>Complete Profile </h3>
        {/* <div className="mt-4">
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
        </div> */}
        <div className="mt-4">
          <Form onSubmit={this.onSubmit}>
            <Row xs="1" md="3">
              <Col className="mb-2">
                <FormGroup>
                  <Label htmlFor="exampleEmail">First Name</Label>
                  <Input
                    type="text"
                    name="name"
                    value={this.state.username}
                    onChange={this.onChange}
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label htmlFor="exampleEmail">Last Name</Label>
                  <Input
                    type="text"
                    name="name"
                    value={this.state.username}
                    onChange={this.onChange}
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label htmlFor="exampleEmail">Gender</Label>
                  <Input
                    type="select"
                    name="gender"
                    value={this.state.gender}
                    onChange={this.onChange}
                    id="exampleSelect"
                  >
                    <option>Female</option>
                    <option>Male</option>
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
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label htmlFor="exampleEmail">Phone Number</Label>
                  <Input
                    type="phone"
                    name="phone"
                    value={this.state.phone}
                    onChange={this.onChange}
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label htmlFor="exampleEmail">Department</Label>
                  <Input
                    type="text"
                    name="department"
                    value={this.state.department}
                    onChange={this.onChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row className="mt-4" xs="1" md="3">
              <Col className="mb-2">
                <FormGroup>
                  <Label htmlFor="exampleEmail">Academic Level</Label>
                  <Input
                    type="select"
                    name="academiclevel"
                    value={this.state.academiclevel}
                    onChange={this.onChange}
                    id="exampleSelect"
                  >
                    <option>Bachelor</option>
                    <option>Masters</option>
                    <option>PhD</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label htmlFor="exampleEmail">Year</Label>
                  <Input
                    type="number"
                    name="year"
                    value={this.state.year}
                    onChange={this.onChange}
                    maxLength={4}
                  />
                </FormGroup>
              </Col>
              <Col></Col>
            </Row>

            <div className="mt-5 d-flex justify-content-end">
              <Button type="submit" variant="contained">
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </MainContainer>
    );
  }
}

export default CompleteProfile;
