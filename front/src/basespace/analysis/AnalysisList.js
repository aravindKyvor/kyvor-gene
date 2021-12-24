import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
const ApplicationList = (props) => {
  let [analysis, setanalysis] = useState([]);

  useEffect(() => {
    setInterval(function () {
      getanalysis();
    }, 60000);
  }, []);

  let getanalysis = async () => {
    let response = await fetch("http://127.0.0.1:8000/api/analysis/");
    let data = await response.json();

    let new_data = data.Response.Items;
    // console.log(data)
    console.log(new_data);
    setanalysis(new_data);
  };
  return (
    <div>
      <div className="page-header">
        <h3 className="page-title">Analysis Lists </h3>
      </div>
      <br />
      <Table responsive>
        <thead style={{ backgroundColor: "#fec107" }}>
          <tr>
            <th>
              <strong>Analysis Id</strong>
            </th>
            <th>
              <strong>Analysis Name</strong>
            </th>
            <th>
              <strong>Status</strong>
            </th>
          </tr>
        </thead>
        <tbody>
          {analysis.map((application, index) => {
            let color =
              application.Status === "Incomplete"
                ? "red"
                : application.Status === "Running"
                ? "yellow"
                : "green";
            return (
              <tr key={index}>
                <td> {application.Id}</td>
                <td> {application.Name}</td>
                <td style={{ color: color }}> {application.Status}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default ApplicationList;

