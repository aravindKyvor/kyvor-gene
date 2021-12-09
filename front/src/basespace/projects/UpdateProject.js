import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { baseURL, headers } from "../biosample/Headerssample";

const UpdateProject = () => {
  const initialMenuState = {
    id: null,
    project_name: "",
    bs_default_project: "",
    bs_project_id: "",
    project_type: "",
    project_created_on: "",
    bs_user_id: "",
  };

  let { id } = useParams();

  const [currentMenu, setCurrentMenu] = useState(initialMenuState);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    retrieveMenu();
  }, []);

  const handleMenuChange = (e) => {
    const { name, value } = e.target;
    setCurrentMenu({ ...currentMenu, [name]: value });
  };

  const retrieveMenu = () => {
    axios
      .get(`${baseURL}/project/${id}/`, {
        headers: {
          headers,
        },
      })
      .then((response) => {
        setCurrentMenu({
          id: response.data.id,
          project_name: response.data.project_name,
          bs_default_project: response.data.bs_default_project,
          bs_project_id: response.data.bs_project_id,
          project_type: response.data.project_type,
          project_created_on: response.data.project_created_on,
          bs_user_id: response.data.bs_user_id,
        });
        console.log(currentMenu);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const updateMenu = () => {
    let data = {
      project_name: currentMenu.project_name,
      bs_default_project: currentMenu.bs_default_project,
      bs_project_id: currentMenu.bs_project_id,
      project_type: currentMenu.project_type,
      project_created_on: currentMenu.project_created_on,
      bs_user_id: currentMenu.bs_user_id,
    };

    axios
      .put(`${baseURL}/project/${id}/`, data, {
        headers: {
          headers,
        },
      })
      .then((response) => {
        setCurrentMenu({
          id: response.data.id,
          project_name: response.data.project_name,
          bs_default_project: response.data.bs_default_project,
          bs_project_id: response.data.bs_project_id,
          project_type: response.data.project_type,
          project_created_on: response.data.project_created_on,
          bs_user_id: response.data.bs_user_id,
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const newMenu = () => {
    setCurrentMenu(initialMenuState);
    setSubmitted(false);
  };

  return (
    <div>

    <div className="page-header">
          <h3 className="page-projectName"> Updating Project Form </h3>
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
          <div className="submit-form">
            {submitted ? (
              <div>
                <div
                  className="alert alert-success alert-dismissible fade show"
                  role="alert"
                >
                  Project Updated!
                </div>
                <Link to="/basespace/projects/list">
                  {" "}
                  <button
                    className="btn"
                    style={{ backgroundColor: "#fec107" }}
                  >
                    Back
                  </button>
                </Link>
              </div>
            ) : (
              <div>
                <div className="form-group">
                  <label htmlFor="name">project_name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    required
                    value={currentMenu.project_name}
                    onChange={handleMenuChange}
                    name="project_name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="name">bs_default_project</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    required
                    value={currentMenu.bs_default_project}
                    onChange={handleMenuChange}
                    name="bs_default_project"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="name">bs_project_id</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    required
                    value={currentMenu.bs_project_id}
                    onChange={handleMenuChange}
                    name="bs_project_id"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="name">project_type</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    required
                    value={currentMenu.project_type}
                    onChange={handleMenuChange}
                    name="project_type"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="name">project_created_on</label>
                  <input
                    type="date"
                    className="form-control"
                    id="name"
                    required
                    value={currentMenu.project_created_on}
                    onChange={handleMenuChange}
                    name="project_created_on"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="name">bs_user_id</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    required
                    value={currentMenu.bs_user_id}
                    onChange={handleMenuChange}
                    name="bs_user_id"
                  />
                </div>

                <button
                  onClick={updateMenu}
                  className="btn"
                  style={{ backgroundColor: "#fec107" }}
                >
                  Update
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>

    </div>

  );
};

export default UpdateProject;
