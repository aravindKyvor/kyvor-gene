import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
// import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from '@material-ui/icons/Delete';
// import EditIcon from '@material-ui/icons/Edit';
import {  toast } from "react-toastify";
import {getAnalysis} from '../../actions/basespace'
import {connect} from 'react-redux'
class AnalysisList extends React.Component {


  componentDidMount() {
    this.props.getAnalysis();
  }

  
  deleteData(id) {
  
    if (window.confirm("Are you sure want to delete the Analysis")) {
      fetch("http://localhost:8000/api/analysis/" + id + "/", {
        method: "DELETE",
        body: JSON.stringify(this.state),
      })
       
        .then((response) => response)
        .then((data) => {
          if (data.status === 500) {
            console.log(data.status === 500);

            toast.error(
              "Analysis not deleted Plz check the server"
            );
          } else {
            console.log(data);
            toast.success("Analysis successfully deleted");
          }
       
          
          if (data) {
            this.props.getAnalysis();
          }
        });
       
    }
  
  
}
  render() {
    const {analysis} = this.props;
    const rows = analysis.map((item) => (
      <tr key={item.id}>
        <td>{item.analysis_type}</td>
        <td>{item.analysis_ref_id}</td>
        <td>{item.analysis_status}</td>
        <td>{item.analysis_description}</td>
        <td>{item.analysis_timestamp}</td>
        <td>{item.bs_analysis_id}</td>
        <td>{item.bs_analysis_status}</td>
        <td>{item.bs_analysis_name}</td>


        <td>
           
          <DeleteIcon
            onClick={() => this.deleteData(item.id)}
            
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
                  {/* <Link
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
                  </Link> */}
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
                        <th >
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
const mapStateToProps = state => ({
	analysis: state.analysis.analysis
});
export default connect(mapStateToProps,{getAnalysis}) (AnalysisList);
