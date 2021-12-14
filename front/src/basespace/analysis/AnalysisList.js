import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { ToastContainer, toast } from "react-toastify";
class AnalysisList extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  fetchData() {
    fetch("http://localhost:8000/api/analysis/")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          data: data,
        });
      });
  }

  componentDidMount() {
    this.fetchData();
  }

  deleteData(id) {
    if(window.confirm('Are you sure want to delete the Analysis')){
      fetch("http://localhost:8000/api/analysis/" + id + "/", {
        method: "DELETE",
        body: JSON.stringify(this.state),
      })
        .then((response) => response)
        .then((data) => {
          if (data) {
            this.fetchData(
             
            );
          }
        }).catch((err) => {
          console.log("Error", err);
          if (err) {
            toast.error("!Application list was not deleted", {
              position: "top-right",
              autoClose: 2000,
            });
          }
        });

    }
    
  }
  render() {
    const Analysis = this.state.data;
    const rows = Analysis.map((analysis) => (
      <tr key={analysis.id}>
        <td>{analysis.analysis_type}</td>
        <td>{analysis.analysis_ref_id}</td>
        <td>{analysis.analysis_status}</td>
        <td>{analysis.analysis_description}</td>
        <td>{analysis.analysis_timestamp}</td>
        <td>{analysis.bs_analysis_id}</td>
        <td>{analysis.bs_analysis_status}</td>
        <td>{analysis.bs_analysis_name}</td>

        <td>
          <Link to={"/analysis/update/" + analysis.id}>
            
            <EditIcon/>
            
            </Link>
        </td>
        <td>
           
          <DeleteIcon
            onClick={() => this.deleteData(analysis.id)}
            
          />
          
          
        </td>
      </tr>
    ));

    return (
      <div>
        <div className="page-header">
          <h3 className="page-title">Analysis Lists </h3>
        </div>

        <div className="row">
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-header d-flex justify-content-between align-items-center">
                  Analysis list
                  <Link
                    to="/basespace/projects/analysis/add"
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      variant="outlined"
                      color="secondary"
                      startIcon={<AddIcon />}
                    >
                      Add Analyis
                    </Button>
                  </Link>
                </h4>

                <hr />

                <div className="table-responsive">
                  <table className="table table-bordered  table-hover">
                    <thead style={{ backgroundColor: "#fec107" }}>
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
                          <strong> analysis_status</strong>{" "}
                        </th>
                        <th>
                          {" "}
                          <strong> analysis_description</strong>{" "}
                        </th>
                        <th>
                          <strong> analysis_timestamp</strong>{" "}
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
                        <th colSpan='2'>
                          {" "}
                          <strong> Actions</strong>{" "}
                        </th>
                      </tr>
                    </thead>
                    <tbody>{rows}</tbody>
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

export default AnalysisList;
