import React from "react";
import { Link } from "react-router-dom";

import logo2 from "../../assets/images/dashboard/circle.svg";
import logo3 from "../../assets/images/dashboard/circle.svg";

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title">
            <span className="page-title-icon bg-gradient-primary text-white mr-2">
              <i className="mdi mdi-home"></i>
            </span>{" "}
            Dashboard{" "}
          </h3>
          <nav aria-label="breadcrumb">
            <ul className="breadcrumb">
              <li className="breadcrumb-data active" aria-current="page">
                <span></span>Overview{" "}
                <i className="mdi mdi-alert-circle-outline icon-sm text-primary align-middle"></i>
              </li>
            </ul>
          </nav>
        </div>
        <div className="row">
          <div className="col-md-4 stretch-card grid-margin">
            <div
              className="card  card-img-holder text-black"
              style={{ backgroundColor: "#fec107" }}
            >
              <Link
                to="/basic-ui/Analysis"
                style={{ color: "black", textDecoration: "none" }}
              >
                <div className="card-body">
                  <img src={logo3} className="card-img-absolute" alt="circle" />
                  <h4 className="font-weight-normal mb-3 text-center">
                    Link To Analysis{" "}
                    <i className="mdi mdi-file-find mdi-36px float-right"></i>
                  </h4>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-md-4 stretch-card grid-margin">
            <div
              className="card card-img-holder text-black"
              style={{ backgroundColor: "#fec107" }}
            >
              <div className="card-body">
                <img src={logo2} className="card-img-absolute" alt="circle" />
                <h4 className="font-weight-normal mb-3 text-center">
                  Link To Reports{" "}
                  <i className="mdi mdi-information mdi-36px float-right"></i>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-md-4 stretch-card grid-margin">
            <div
              className="card  card-img-holder text-black"
              style={{ backgroundColor: "#fec107" }}
            >
              <div className="card-body">
                <img src={logo3} className="card-img-absolute" alt="circle" />
                <h4 className="font-weight-normal mb-3 text-center">
                  Link To Patient Portal{" "}
                  <i className="mdi mdi-seat-individual-suite mdi-36px float-right"></i>
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Patient Details </h4>
                <hr />
                <div class="text-center"></div>
                <hr />

                <div className="table-responsive">
                  <table className="table table-bordered  table-hover">
                    <thead>
                      <tr>
                        <th>
                          <strong> Project Name</strong>
                        </th>
                        <th>
                          {" "}
                          <strong> Cancer Type</strong>{" "}
                        </th>
                        <th>
                          {" "}
                          <strong>Status</strong>{" "}
                        </th>
                        <th>
                          {" "}
                          <strong>BioSample TumorFile 1</strong>{" "}
                        </th>
                        <th>
                          <strong> BioSample TumorFile 2</strong>{" "}
                        </th>
                        <th>
                          {" "}
                          <strong> BioSample TumorFile 3</strong>{" "}
                        </th>
                        <th>
                          {" "}
                          <strong>BioSample TumorFile 4</strong>{" "}
                        </th>
                        <th>
                          {" "}
                          <strong>Action</strong>{" "}
                        </th>
                      </tr>
                    </thead>
                    <tbody></tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
