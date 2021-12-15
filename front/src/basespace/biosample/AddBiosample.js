import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { addBiosample } from "../../actions/basespace";
import { toast } from "react-toastify";
import Multi from "../projects/ProjectId";

import "react-toastify/dist/ReactToastify.css";

toast.configure();
function validate(biosample_name) {
  const errors = [];

  if (biosample_name === "") {
    errors.push("please enter you biosample Name");
    
  }
  return errors;
}
export class AddBiosample extends Component {
  state = {
    biosample_id: "",
    biosample_type: "",
    biosample_name: "",
    biosample_path: "",
    library_id: "",
    biosample_created_on: "",
    project_id: "",
  };
  static propTypes = {
    addBiosample: PropTypes.func.isRequired,
  };

  // Input Change Handler
  changeHandler(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const {
      biosample_id,
      biosample_type,
      biosample_name,
      biosample_path,
      library_id,
      biosample_created_on,
      project_id,
    } = this.state;
    const biosample = {
      biosample_id,
      biosample_type,
      biosample_name,
      biosample_path,
      library_id,
      biosample_created_on,
      project_id,
    };
    const errors = validate(biosample_name);
    if (errors.length > 0) {
      this.setState({ errors });
      return;
    } else if (errors.length === 0) {
      toast.success("Required Fields Are Entered Correctly");
    }
    
    this.props.addBiosample(biosample, errors);

    this.setState({
      biosample_id: "",
      biosample_type: "",
      biosample_name: "",
      biosample_path: "",
      library_id: "",
      biosample_created_on: "",
      project_id: "",
    });
    this.props.history.push("/basespace/biosample");
  };

  render() {
    const {
      errors,
      biosample_id,
      biosample_type,
      biosample_name,
      biosample_path,
      library_id,
      biosample_created_on,
      project_id,
    } = this.state;

    return (
      <div>
        <div className="page-header">
          <h3 className="page-projectName"> Adding BioSample Form </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="!#" onClick={(event) => event.preventDefault()}></a>
              </li>
            </ol>
          </nav>
        </div>

        <div className=" col-11 grid-margin stretch-card-1 ">
          <div className="card">
            <div className="card-body">
              <form className="forms-sample" onSubmit={this.onSubmit}>
                {errors &&
                  errors.map((error) => (
                    <div
                      class="alert alert-danger alert-dismissible"
                      role="alert"
                      key={error}
                    >
                      <strong>Error: {error}</strong>
                    </div>
                  ))}
                <Form.Group>
                  <label htmlFor="exampleInputUsername1">BioSample Id</label>
                  <Form.Control
                    type="text"
                    id="exampleInputUsername1"
                    placeholder="BioSample Id"
                    size="lg"
                    value={biosample_id}
                    name="biosample_id"
                    onChange={this.onChange}
                  />
                </Form.Group>
                <Form.Group>
                  <label htmlFor="exampleInputUsername1">BioSample Type</label>
                  <Form.Control
                    type="text"
                    id="exampleInputUsername1"
                    placeholder="BioSample Type"
                    size="lg"
                    value={biosample_type}
                    name="biosample_type"
                    onChange={this.onChange}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <label id="inputGroupFile01">BioSample Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputGroupFile01"
                    placeholder="BioSample Name"
                    value={biosample_name}
                    name="biosample_name"
                    onChange={this.onChange}
                  />
                </Form.Group>
                <Form.Group>
                  <label id="inputGroupFile02">BioSample Path</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="BioSample Path"
                    id="inputGroupFile02"
                    value={biosample_path}
                    name="biosample_path"
                    onChange={this.onChange}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <label id="inputGroupFile03">Library Id</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputGroupFile03"
                    placeholder="Library Id"
                    value={library_id}
                    name="library_id"
                    onChange={this.onChange}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <label id="inputGroupFile04">BioSample Created On</label>
                  <input
                    type="date"
                    className="form-control"
                    id="inputGroupFile04"
                    value={biosample_created_on}
                    name="biosample_created_on"
                    placeholder="BioSample Created On"
                    onChange={this.onChange}
                    required
                  />
                </Form.Group>
                {/* <FormControl
                  name="project_id"
                  componentClass="select"
                  onChange={this.on}
                >
                  {userlist.map((r, i) => (
                    <option key={i} value={r.id}>
                      {r.name}
                    </option>
                  ))}
                </FormControl> */}
                <Form.Group>
                  <label id="inputGroupFile05">Project Name</label>
                  <input
                    id="inputGroupFile05"
                    type="text"
                    placeholder="Project Name"
                    className="form-control"
                    value={project_id}
                    name="project_id"
                    onChange={this.onChange}
                    required
                  />
                </Form.Group>

                <div className="col text-center">
                  <button
                    type="submit"
                    className="btn  mr-2 btn-sm"
                    style={{ backgroundColor: "#fec107" }}
                  >
                    Submit
                  </button>
                </div>
              </form>
              <div className="border border-light p-3 mb-4">
                <div className="text-center">
                  <span>
                    <Link to="/basic-ui/Basespace">
                      <button className="btn btn-light btn-sm"> Cancel</button>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { addBiosample })(AddBiosample);
