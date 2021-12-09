import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { baseURL ,headers} from "../Headerssample";

const UpdateAnalysis = () => {
  const initialMenuState = {
    id: null,
    analysis_type: "",
    analysis_ref_id: "",
    analysis_status: "",
    analysis_description: "",
    analysis_timestamp: "",
    bs_analysis_id: "",
    bs_analysis_status: "",
    bs_analysis_name: "",
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
      .get(`${baseURL}/analysis/${id}/`, {
        headers: {
          headers,
        },
      })
      .then((response) => {
        setCurrentMenu({
          id: response.data.id,

          analysis_type:  response.data.analysis_type,
    analysis_ref_id:  response.data.analysis_ref_id,
    analysis_status: response.data.analysis_status ,
    analysis_description: response.data.analysis_description ,
    analysis_timestamp:  response.data.analysis_timestamp,
    bs_analysis_id: response.data.bs_analysis_id ,
    bs_analysis_status: response.data.bs_analysis_status ,
    bs_analysis_name: response.data.bs_analysis_name,
        
        });
        console.log(currentMenu);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const updateMenu = () => {
    let data = {
      analysis_type:  currentMenu.analysis_type,
      analysis_ref_id: currentMenu.analysis_ref_id,
      analysis_status: currentMenu.analysis_status ,
      analysis_description: currentMenu.analysis_description ,
      analysis_timestamp: currentMenu.analysis_timestamp,
      bs_analysis_id: currentMenu.bs_analysis_id ,
      bs_analysis_status: currentMenu.bs_analysis_status ,
      bs_analysis_name: currentMenu.bs_analysis_name,
    };

    axios
      .put(`${baseURL}/analysis/${id}/`, data, {
        headers: {
          headers,
        },
      })
      .then((response) => {
        setCurrentMenu({
          id: response.data.id,
          analysis_type:  response.data.analysis_type,
          analysis_ref_id:  response.data.analysis_ref_id,
          analysis_status: response.data.analysis_status ,
          analysis_description: response.data.analysis_description ,
          analysis_timestamp:  response.data.analysis_timestamp,
          bs_analysis_id: response.data.bs_analysis_id ,
          bs_analysis_status: response.data.bs_analysis_status ,
          bs_analysis_name: response.data.bs_analysis_name,
         
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
                <Link to='/basespace/analysis'><button className="btn" style={{backgroundColor:"#fec107"}}>
                  Back
                </button></Link>
              </div>
            ) : (
              <div>
                <div className="form-group">
                  <label htmlFor="name">Analysis Type</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    required
                    value={currentMenu.analysis_type}
                    onChange={handleMenuChange}
                    name="analysis_type"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="name">Analysis Ref Id</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    required
                    value={currentMenu.analysis_ref_id}
                    onChange={handleMenuChange}
                    name="analysis_ref_id"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="name">Analysis Status</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    required
                    value={currentMenu.analysis_status}
                    onChange={handleMenuChange}
                    name="analysis_status"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="name">Analysis Description</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    required
                    value={currentMenu.analysis_description}
                    onChange={handleMenuChange}
                    name="analysis_description"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="name">Analysis Timestamp</label>
                  <input
                    type="date"
                    className="form-control"
                    id="name"
                    required
                    value={currentMenu.analysis_timestamp}
                    onChange={handleMenuChange}
                    name="analysis_timestamp"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="name">Bs Analysis Id</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    required
                    value={currentMenu.bs_analysis_id}
                    onChange={handleMenuChange}
                    name="bs_analysis_id"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="name">Bs Analysis Status</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    required
                    value={currentMenu.bs_analysis_status}
                    onChange={handleMenuChange}
                    name="bs_analysis_status"
                  />
                </div>


                <div className="form-group">
                  <label htmlFor="name">Bs Analysis Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    required
                    value={currentMenu.bs_analysis_name}
                    onChange={handleMenuChange}
                    name="bs_analysis_name"
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

export default UpdateAnalysis;
