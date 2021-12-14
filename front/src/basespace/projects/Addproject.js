import React, { Component, Fragment } from "react";

import { Form } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

import { addBasespace } from "../../actions/basespace";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

toast.configure();

function validate(project_name) {
  const errors = [];

  if (project_name === "") {
    errors.push("please enter you project Name");
  }
  return errors;
}

export class Add extends Component {
  state = {
    project_name: "",
    bs_default_project: "",
    bs_project_id: "",
    project_type: "",
    project_created_on: "",
  };
  static propTypes = {
    addBasespace: PropTypes.func.isRequired,
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
      project_name,
      bs_default_project,
      bs_project_id,
      project_type,
      project_created_on,
    } = this.state;
    const basespace = {
      project_name,
      bs_default_project,
      bs_project_id,
      project_type,
      project_created_on,
    };
    const errors = validate(project_name);
    if (errors.length > 0) {
      this.setState({
        errors,
      });

      return;
    } else if (errors.length === 0) {
      toast.success("Project was added successfully");
    }
    this.props.addBasespace(basespace, errors);

    this.setState({
      project_name: "",
      bs_default_project: "",
      bs_project_id: "",
      project_type: "",
      project_created_on: "",
    });

    this.props.history.push("/basespace/projects/list");
  };

  render() {
    const {
      errors,
      project_name,
      bs_default_project,
      bs_project_id,
      project_type,
      project_created_on,
    } = this.state;
    return (
      <div>
        <Fragment>
          <div className="page-header">
            <h3 className="page-projectName"> Adding Project Form </h3>
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
                      <div class="alert alert-danger alert-dismissible"  role="alert" key={error}>
                        
                        <strong>Error: {error}</strong>
                      </div>
                    ))}
                  <Form.Group>
                    <label htmlFor="exampleInputUsername1">Project Name</label>
                    <Form.Control
                      type="text"
                      id="exampleInputUsername1"
                      placeholder="project Name"
                      size="lg"
                      value={project_name}
                      name="project_name"
                      onChange={this.onChange}
                      // required
                    />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleInputUsername1">
                      Basespace Default Project
                    </label>
                    <Form.Control
                      type="text"
                      id="exampleInputUsername1"
                      placeholder="Basespace Default Project"
                      size="lg"
                      value={bs_default_project}
                      name="bs_default_project"
                      onChange={this.onChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group>
                    <label id="inputGroupFile01">Basespace Project Id</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputGroupFile01"
                      required
                      placeholder="Basespace Project Id"
                      value={bs_project_id}
                      name="bs_project_id"
                      onChange={this.onChange}
                    />
                  </Form.Group>
                  <Form.Group>
                    <label id="inputGroupFile02">Project Type</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Project Type"
                      id="inputGroupFile02"
                      value={project_type}
                      name="project_type"
                      onChange={this.onChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group>
                    <label id="inputGroupFile03">Project Created On</label>
                    <input
                      type="date"
                      className="form-control"
                      id="inputGroupFile03"
                      placeholder="Project Created On"
                      value={project_created_on}
                      name="project_created_on"
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
                        <button className="btn btn-light btn-sm">
                          {" "}
                          Cancel
                        </button>
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      </div>
    );
  }
}

export default connect(null, { addBasespace })(Add);
