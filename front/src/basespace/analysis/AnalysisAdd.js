import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { addAnalysis } from "../../actions/basespace";
import { toast } from "react-toastify";


import "react-toastify/dist/ReactToastify.css";

toast.configure();
function validate(analysis_type) {
  const errors = [];

  if (analysis_type === "") {
    errors.push("please enter your Analysis_type");
  }
  return errors;
}
export class AnalysisAdd extends Component {
  state = {
    analysis_type: "",
    analysis_ref_id: "",
    analysis_status: "",
    analysis_description: "",
    analysis_timestamp: "",
    bs_analysis_id: "",
    bs_analysis_status: "",
    bs_analysis_name: "",
  };
  static propTypes = {
    addAnalysis: PropTypes.func.isRequired,
  };

  // Input Change Handler
  changeHandler(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const {
      analysis_type,
      analysis_ref_id,
      analysis_status,
      analysis_description,
      analysis_timestamp,
      bs_analysis_id,
      bs_analysis_status,
      bs_analysis_name,
    } = this.state;

    const analysis = {
      analysis_type,
      analysis_ref_id,
      analysis_status,
      analysis_description,
      analysis_timestamp,
      bs_analysis_id,
      bs_analysis_status,
      bs_analysis_name,
    };
    const errors = validate(analysis_type);
    if (errors.length > 0) {
      this.setState({ errors });
      return;
    }else if(errors.length === 0){
      toast.success('Analysis was added successfully')
    }

    this.props.addAnalysis(analysis, errors);
    this.setState({
      analysis_type: "",
      analysis_ref_id: "",
      analysis_status: "",
      analysis_description: "",
      analysis_timestamp: "",
      bs_analysis_id: "",
      bs_analysis_status: "",
      bs_analysis_name: "",
    });
    this.props.history.push("/basespace/analysis");
  };

  render() {
    const {
      errors,
      analysis_type,
      analysis_ref_id,
      analysis_status,
      analysis_description,
      analysis_timestamp,
      bs_analysis_id,
      bs_analysis_status,
      bs_analysis_name,
    } = this.state;
    return (
      <div>
        <div className="page-header">
          <h3 className="page-projectName"> Adding Analysis Form </h3>
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
              <form className="forms-sample" onSubmit={this.onSubmit}>
              {errors &&
                    errors.map((error) => (
                      <div class="alert alert-danger alert-dismissible"  role="alert" key={error}>
                        
                        <strong>Error: {error}</strong>
                      </div>
                    ))}
                <Form.Group>
                  <label htmlFor="exampleInputUsername1">Analysis Type</label>
                  <Form.Control
                    type="text"
                    id="exampleInputUsername1"
                    placeholder="Analysis Type"
                    size="lg"
                    value={analysis_type}
                    name="analysis_type"
                    onChange={this.onChange}
                  
                  />
                </Form.Group>
                <Form.Group>
                  <label htmlFor="exampleInputUsername1">Analysis Ref Id</label>
                  <Form.Control
                    type="text"
                    id="exampleInputUsername1"
                    placeholder="Analysis ref id"
                    size="lg"
                    value={analysis_ref_id}
                    name="analysis_ref_id"
                    onChange={this.onChange}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <label id="inputGroupFile01">Analysis Status</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputGroupFile01"
                    placeholder='Analysis Status'
                    value={analysis_status}
                    name="analysis_status"
                    onChange={this.onChange}
                  />
                </Form.Group>
                <Form.Group>
                  <label id="inputGroupFile02">Analysis Description</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputGroupFile02"
                    placeholder='Analysis Description'
                    value={analysis_description}
                    name="analysis_description"
                    onChange={this.onChange}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <label id="inputGroupFile03">Analysis Timestamp</label>
                  <input
                    type="date"
                    className="form-control"
                    id="inputGroupFile03"
                    placeholder='Analysis Timestamp'
                    value={analysis_timestamp}
                    name="analysis_timestamp"
                    onChange={this.onChange}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <label id="inputGroupFile04">Bs Analysis Id</label>
                  <input
                    type="text"
                    placeholder='Bs Analysis Id'
                    className="form-control"
                    id="inputGroupFile04"
                    value={bs_analysis_id}
                    name="bs_analysis_id"
                    onChange={this.onChange}
                    required
                  />
                </Form.Group>

                <Form.Group>
                  <label id="inputGroupFile04">Bs Analysis Status</label>
                  <input
                    type="text"
                    placeholder='Bs Analysis Status'
                    className="form-control"
                    id="inputGroupFile04"
                    value={bs_analysis_status}
                    name="bs_analysis_status"
                    onChange={this.onChange}
                    required
                  />
                </Form.Group>

                <Form.Group>
                  <label id="inputGroupFile04">Bs Analysis Name</label>
                  <input
                    type="text"
                    placeholder='Bs Analysis Name'
                    className="form-control"
                    id="inputGroupFile04"
                    value={bs_analysis_name}
                    name="bs_analysis_name"
                    onChange={this.onChange}
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

export default connect(null, { addAnalysis })(AnalysisAdd);
