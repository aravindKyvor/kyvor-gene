import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { baseURL, headers } from "./Headerssample";
import { Link } from "react-router-dom";
export const Update = () => {
  const initialMenuState = {
    id: null,
    biosample_id: "",
    biosample_type: "",
    biosample_name: "",
    biosample_path: "",
    library_id: "",
    biosample_created_on: "",
    project_id: "",
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
      .get(`${baseURL}/biosample/${id}/`, {
        headers: {
          headers,
        },
      })
      .then((response) => {
        setCurrentMenu({
          id: response.data.id,
          biosample_id: response.data.biosample_id,
          biosample_type: response.data.biosample_type,
          biosample_name: response.data.biosample_name,
          biosample_path: response.data.biosample_path,
          library_id: response.data.library_id,
          biosample_created_on: response.data.biosample_created_on,
          project_id: response.data.project_id,
        });
        console.log(currentMenu);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const updateMenu = () => {
    let data = {
      biosample_id: currentMenu.biosample_id,
      biosample_type: currentMenu.biosample_type,
      biosample_name: currentMenu.biosample_name,
      biosample_path: currentMenu.biosample_path,
      library_id: currentMenu.library_id,
      biosample_created_on: currentMenu.biosample_created_on,
      project_id: currentMenu.project_id,
    };

    axios
      .put(`${baseURL}/biosample/${id}/`, data, {
        headers: {
          headers,
        },
      })
      .then((response) => {
        setCurrentMenu({
          id: response.data.id,
          biosample_id: response.data.biosample_id,
          biosample_type: response.data.biosample_type,
          biosample_name: response.data.biosample_name,
          biosample_path: response.data.biosample_path,
          library_id: response.data.library_id,
          biosample_created_on: response.data.biosample_created_on,
          project_id: response.data.project_id,
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
        <h3 className="page-projectName"> Updating Biosample Form </h3>
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
                    Biosamples Updated!
                  </div>
                  <Link to='/basespace/biosample'><button className="btn" style={{backgroundColor:"#fec107"}}>
                    Back
                  </button></Link>
                </div>
              ) : (
                <div>
                  <div className="form-group">
                    <label htmlFor="name">biosample_id</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      required
                      value={currentMenu.biosample_id}
                      onChange={handleMenuChange}
                      name="biosample_id"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="name">biosample_type</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      required
                      value={currentMenu.biosample_type}
                      onChange={handleMenuChange}
                      name="biosample_type"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="name">biosample_name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      required
                      value={currentMenu.biosample_name}
                      onChange={handleMenuChange}
                      name="biosample_name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="name">biosample_path</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      required
                      value={currentMenu.biosample_path}
                      onChange={handleMenuChange}
                      name="biosample_path"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="name">biosample_created_on</label>
                    <input
                      type="date"
                      className="form-control"
                      id="name"
                      required
                      value={currentMenu.biosample_created_on}
                      onChange={handleMenuChange}
                      name="biosample_created_on"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="name">library_id</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      required
                      value={currentMenu.library_id}
                      onChange={handleMenuChange}
                      name="library_id"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="name">project_id</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      required
                      value={currentMenu.project_id}
                      onChange={handleMenuChange}
                      name="project_id"
                    />
                  </div>

                  <button onClick={updateMenu} className="btn" style={{backgroundColor:'#fec107'}}> 
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
export default Update;
