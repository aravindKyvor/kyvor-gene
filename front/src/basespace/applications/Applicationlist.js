import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
const ApplicationList = (props) => {
  let [applications, setApplications] = useState([]);

  useEffect(() => {
    getApplications();
  }, []);

  let getApplications = async () => {
    let response = await fetch("http://127.0.0.1:8000/api/applications/");
    let data = await response.json();
    console.log(data.Response.Items);
    let new_data = data.Response.Items;
    // console.log(data)
    console.log(new_data);
    setApplications(new_data);
  };
  return (
    <div>
      <div className="page-header">
        <h3 className="page-title">Application Lists </h3>
      </div>
      <br />
      <Table responsive>
        <thead style={{ backgroundColor: "#fec107" }}>
          <tr>
            <th>
              <strong>ApplicationId</strong>
            </th>
            <th>
              <strong>ApplicationName</strong>
            </th>
            <th>
              <strong>CompanyName</strong>
            </th>
            <th>
              <strong>ApplicationHref</strong>
            </th>
          </tr>
        </thead>
        <tbody>
          {applications.map((application, index) => {
            return (
              <tr key={index}>
                <td>
                  {" "}
                  <Link
                    to={{
                      pathname: `/view/${application.Id}`,
                      state: { applications: application },
                    }}
                    className="btn btn-link"
                    style={{ textDecoration: "none" }}
                  >
                    {application.Id}
                  </Link>
                </td>
                <td> {application.Name}</td>
                <td> {application.CompanyName}</td>
                <td> {application.Href}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default ApplicationList;
