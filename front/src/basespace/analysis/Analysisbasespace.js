import Form from "react-bootstrap/Form";
import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
const WhoAmI = () => {
  let [applications, setApplications] = useState([]);

  useEffect(() => {
    getApplications();
  }, []);

  let getApplications = async () => {
    let response = await fetch("http://127.0.0.1:8000/api/analysis/");
    let data = await response.json();

    let new_data = data;
    // console.log(data)
    console.log(new_data);
    setApplications(new_data);
  };
  return (
 
   
      <div>
        <div className="page-header">
          <h3 className="page-title">Analysis Lists </h3>
        </div>

        <div className="row">
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
              <h4 className="card-header d-flex justify-content-between align-items-center">Analysis list
                
                <Link to='/basespace/projects/addproject' style={{textDecoration:'none'}}><button type="button" className="btn btn-sm" style={{backgroundColor:'#fec107'}}>Add </button></Link>
                
                </h4>

              
                <hr />

                <div className="table-responsive">
                  <table className="table table-bordered  table-hover">
                    <thead>
                      <tr>
                        <th>
                          <strong> analysis_type</strong>
                        </th>
                        <th>
                          {" "}
                          <strong> analysis_ref_id</strong>{" "}
                        </th>
                        <th>
                          {" "}
                          <strong>  analysis_status</strong>{" "}
                        </th>
                        <th>
                          {" "}
                          <strong> analysis_description</strong>{" "}
                        </th>
                        <th>
                          <strong>  analysis_timestamp</strong>{" "}
                        </th>
                        <th>
                          {" "}
                          <strong> bs_analysis_id</strong>{" "}
                        </th>
                        <th>
                          {" "}
                          <strong> bs_analysis_status</strong>{" "}
                        </th>
                        <th>
                          {" "}
                          <strong> bs_analysis_name</strong>{" "}
                        </th>
                      </tr>
                    </thead>
                    <tbody>

                    {applications.map((analysis) => {
                      return (

                        <tr key={analysis.id}>
                        <td>{analysis.analysis_type}</td>
                        <td>{analysis.analysis_ref_id}</td>
                        <td>{analysis.analysis_status}</td>
                        <td>{analysis.analysis_description}</td>
                        <td>{analysis.analysis_timestamp}</td>
                        <td>{analysis.bs_analysis_id}</td>
                        <td>{analysis.bs_analysis_status}</td>
                        <td>{analysis.bs_analysis_name}</td>
                        </tr>
                                  )

                      })}
                      
                        

                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>






















  );
};

export default WhoAmI;

