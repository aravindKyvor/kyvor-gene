import React from "react";
import { Link } from "react-router-dom";

class Biosample extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  fetchData() {
    fetch("http://localhost:8000/api/biosample/")
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
    fetch("http://localhost:8000/api/biosample/" + id + "/", {
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
    const BiosampleData = this.state.data;
    const rows = BiosampleData.map((item) => (
      <tr key={item.id}>
        <td>{item.biosample_id}</td>
        <td>{item.biosample_type}</td>
        <td>{item.biosample_name}</td>
        <td>{item.biosample_path}</td>
        <td>{item.library_id}</td>
        <td>{item.biosample_created_on}</td>

        <td>
          <Link to={"/update/" + item.id} className="btn btn-info mr-2">
            Update
          </Link>
          <button
            onClick={() => this.deleteData(item.id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    ));
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title">BioSampleLists </h3>
        </div>

        <div className="row">
          <div className="col-12 grid-margin">
            <div className="card">

           
              <div className="card-body">
              

                <div class="text-center">
                  <Link
                    to="/basespace/addbiosample"
                    className="btn btn-secondary text-dark"
                    style={{ backgroundColor: "#fec107" }}
                  >
                    {" "}
                    ADD DETAILS
                  </Link>
                </div>
                <hr />

                <div className="table-responsive">
                  <table className="table table-bordered  table-hover">
                    <thead>
                      <tr>
                        <th>
                          <strong> BioSampleId</strong>
                        </th>
                        <th>
                          {" "}
                          <strong> BioSmapleType</strong>{" "}
                        </th>
                        <th>
                          {" "}
                          <strong>BioSampleName</strong>{" "}
                        </th>
                        <th>
                          {" "}
                          <strong>BioSamplePath</strong>{" "}
                        </th>
                        <th>
                          <strong>LibraryId</strong>{" "}
                        </th>
                        <th>
                          {" "}
                          <strong> Created On</strong>{" "}
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

export default Biosample;
