import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
class ProjectList extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  fetchData() {
    fetch("http://localhost:8000/api/project/")
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
    fetch("http://localhost:8000/api/project/" + id + "/", {
      method: "DELETE",
      body: JSON.stringify(this.state),
    })
      .then((response) => response)
      .then((data) => {
        if (data) {
          this.fetchData();
        }
      });
  }

  render() {
    const ProjectData = this.state.data;
    const rows = ProjectData.map((item) => (
      <tr key={item.id}>
        <td>{item.project_name}</td>
        <td>{item.bs_default_project}</td>
        <td>{item.bs_project_id}</td>
        <td>{item.project_type}</td>
        <td>{item.project_created_on}</td>
        <td>{item.bs_user_id}</td>

        <td>
          <Link to={"/project/update/" + item.id} >
         <EditIcon/>
          </Link>

          </td>
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
          <h3 className="page-title">Project Lists </h3>
        </div>

        <div className="row">
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
              <h4 className="card-header d-flex justify-content-between align-items-center">Project Lists
                
                <Link to='/basespace/projects/addproject' style={{textDecoration:'none'}}>
                  
                <Button
                     variant="outlined"
                     color="secondary"
                     startIcon={<AddIcon />}
                     
                     
                    >
                      Add Project
                    </Button>
                  
                  
                  </Link>
                
                </h4>

                {/* <div class="text-center">
                  <Link
                    to="/basespace/projects/addproject"
                    className="btn btn-secondary text-dark"
                    style={{ backgroundColor: "#fec107", }}
                  >
                    {" "}
                    ADD DETAILS
                  </Link>
                </div> */}
                <hr />

                <div className="table-responsive">
                  <table className="table table-bordered  table-hover">
                    <thead style={{ backgroundColor: "#fec107" }}>
                      <tr>
                        <th>
                          <strong> Project Name</strong>
                        </th>
                        <th>
                          {" "}
                          <strong> BS Default Project</strong>{" "}
                        </th>
                        <th>
                          {" "}
                          <strong>Bs Project ID</strong>{" "}
                        </th>
                        <th>
                          {" "}
                          <strong>Project Type</strong>{" "}
                        </th>
                        <th>
                          <strong> Project Created On</strong>{" "}
                        </th>
                        <th>
                          {" "}
                          <strong> Bs User Id</strong>{" "}
                        </th>
                        <th colSpan='2'>
                          {" "}
                          <strong>Actions</strong>{" "}
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

export default ProjectList;
