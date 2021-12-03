import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
class AddBiosample extends React.Component {
  constructor() {
    super();
    this.state = {
      biosample_id: "",
      biosample_type: "",
      biosample_name: "",
      biosample_path: "",
      library_id: "",
      biosample_created_on: "",
      project_id: "",
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  // Input Change Handler
  changeHandler(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  // Submit Form
  submitForm() {
    fetch("http://127.0.0.1:8000/api/biosample/", {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));

    this.setState({
      biosample_id: "",
      biosample_type: "",
      biosample_name: "",
      biosample_path: "",
      library_id: "",
      biosample_created_on: "",
      project_id: "",
    });
  }

  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-projectName"> Adding BioSample Form </h3>
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
              <form className="forms-sample" onClick={this.submitForm}>
                <Form.Group>
                  <label htmlFor="exampleInputUsername1">BioSample Id</label>
                  <Form.Control
                    type="text"
                    id="exampleInputUsername1"
                    placeholder="project Name"
                    size="lg"
                    value={this.state.biosample_id}
                    name="biosample_id"
                    onChange={this.changeHandler}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <label htmlFor="exampleInputUsername1">BioSample Type</label>
                  <Form.Control
                    type="text"
                    id="exampleInputUsername1"
                    placeholder="project Name"
                    size="lg"
                    value={this.state.biosample_type}
                    name="biosample_type"
                    onChange={this.changeHandler}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <label id="inputGroupFile01">BioSample Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputGroupFile01"
                    required
                    value={this.state.biosample_name}
                    name="biosample_name"
                    onChange={this.changeHandler}
                  />
                </Form.Group>
                <Form.Group>
                  <label id="inputGroupFile02">BioSample Path</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputGroupFile02"
                    value={this.state.biosample_path}
                    name="biosample_path"
                    onChange={this.changeHandler}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <label id="inputGroupFile03">Library Id</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputGroupFile03"
                    value={this.state.library_id}
                    name="library_id"
                    onChange={this.changeHandler}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <label id="inputGroupFile04">BioSample Created On</label>
                  <input
                    type="date"
                    className="form-control"
                    id="inputGroupFile04"
                    value={this.state.biosample_created_on}
                    name="biosample_created_on"
                    onChange={this.changeHandler}
                    required
                  />
                </Form.Group>

                <Form.Group>
                  <label id="inputGroupFile04">Project Id</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputGroupFile04"
                    value={this.state.project_id}
                    name="project_id"
                    onChange={this.changeHandler}
                    required
                  />
                </Form.Group>

                <div className="col text-center">
                  <button
                    type="submit"
                    className="btn  mr-2 btn-sm"
                    style={{ backgroundColor: "#fec107" }}
                  >
                    Submit
                  </button>
                </div>
              </form>
              <div className="border border-light p-3 mb-4">
                <div className="text-center">
                  <span>
                    <Link to="/basic-ui/Basespace">
                      <button className="btn btn-light btn-sm"> Cancel</button>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddBiosample;
