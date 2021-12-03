import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

import axios from "axios";

const Addproject = () => {
  let history = useHistory();

  const [project_name, setproject_name] = useState(null);
  const [bs_default_project, setbs_default_project] = useState(null);
  const [bs_project_id, setbs_project_id] = useState(null);
  const [project_type, setproject_type] = useState(null);
  const [project_created_on, setproject_created_on] = useState(null);
  const [bs_user_id, setbs_user_id] = useState(null);

  const addNewProject = async () => {
    let formField = new FormData();
    formField.append("project_name", project_name);
    formField.append("bs_default_project", bs_default_project);
    formField.append("bs_project_id", bs_project_id);
    formField.append("project_type", project_type);
    formField.append("project_created_on", project_created_on);
    formField.append("bs_user_id", bs_user_id);

    await axios({
      method: "post",
      url: "http://127.0.0.1:8000/api/project/",
      data: formField,
    }).then((response) => {
      console.log(response.data);
      history.push("/");
    });
  };

  return (
    <div>
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
            <form className="forms-sample" onClick={addNewProject}>
              <Form.Group>
                <label htmlFor="exampleInputUsername1">Project Name</label>
                <Form.Control
                  type="text"
                  id="exampleInputUsername1"
                  placeholder="project Name"
                  size="lg"
                  value={project_name}
                  name="project_name"
                  onChange={(e) => setproject_name(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group>
                <label htmlFor="exampleInputUsername1">
                  Basespace Default Project
                </label>
                <Form.Control
                  type="text"
                  id="exampleInputUsername1"
                  placeholder="project Name"
                  size="lg"
                  value={bs_default_project}
                  name="bs_default_project"
                  onChange={(e) => setbs_default_project(e.target.value)}
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
                  value={bs_project_id}
                  name="bs_project_id"
                  onChange={(e) => setbs_project_id(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <label id="inputGroupFile02">Project Type</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputGroupFile02"
                  value={project_type}
                  name="project_type"
                  onChange={(e) => setproject_type(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group>
                <label id="inputGroupFile03">Project Created On</label>
                <input
                  type="date"
                  className="form-control"
                  id="inputGroupFile03"
                  value={project_created_on}
                  name="project_created_on"
                  onChange={(e) => setproject_created_on(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group>
                <label id="inputGroupFile04">Basespace User Id</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputGroupFile04"
                  value={bs_user_id}
                  name="bs_user_id"
                  onChange={(e) => setbs_user_id(e.target.value)}
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
};

export default Addproject;
