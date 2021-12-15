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
    let response = await fetch("http://127.0.0.1:8000/api/credits/");
    let data = await response.json();

    let new_data = data.Wallet;
    // console.log(data)
    console.log(new_data);
    setApplications(new_data);
  };
  return (
    <div>
      <div style={{ maxWidth: "90%", margin: "5vh auto" }}>
        <div className="page-header">
          <h3 className="page-title">
            <span className="page-title-icon bg-gradient-primary text-white mr-2">
              <i
                className="mdi mdi-credit-card "
                style={{ color: "black" }}
              ></i>
            </span>{" "}
            Credits Remaning{" "}
          </h3>
          <br />
        </div>
      </div>

      <Form>
        <div className="row justify-content-center">
          <div className="col-8 justify-content-center">
            <div className="card">
              <div className="card-body">
                <h4 className="card-header d-flex justify-content-between align-items-center">
                  Credits
                  <Link
                    to="/basic-ui/Basespace"
                    style={{ textDecoration: "none" }}
                  >
                    <button
                      type="button"
                      className="btn btn-sm"
                      style={{ backgroundColor: "#fec107" }}
                    >
                      Back{" "}
                    </button>
                  </Link>
                </h4>

                <div className="table-responsive">
                  <table className="table table-bordered  table-hover">
                    <tbody>
                      <tr>
                        <th>ICreditBalance</th>
                        <td>{applications.ICreditBalance}</td>
                      </tr>
                      <tr>
                        <th>ICreditUsage</th>
                        <td>{applications.ICreditUsage}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default WhoAmI;
