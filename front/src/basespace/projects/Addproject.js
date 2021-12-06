import React ,{Component}from 'react';

import { Form } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

import { addBasespace } from '../../actions/basespace';

import { connect } from "react-redux";
import PropTypes from "prop-types";

function validate(project_name) {
  
  const errors = []

if(project_name ===''){
  errors.push("please enter you project Name");
}
return errors


 

}




export class Add extends Component {
    
        state={
            project_name:'',
            bs_default_project:'',
            bs_project_id:'',
            project_type:'',
            project_created_on:'',
            bs_user_id:''

        }
        static propTypes = {
          addBasespace: PropTypes.func.isRequired,
          };

    // Input Change Handler
    changeHandler(event){
        this.setState({
            [event.target.name]:event.target.value
        });
    }


    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  
    onSubmit = (e) => {
      e.preventDefault();
      const {project_name , bs_default_project, bs_project_id,project_type,project_created_on, bs_user_id} = this.state;
      const basespace = { project_name , bs_default_project, bs_project_id,project_type,project_created_on, bs_user_id };
      const errors = validate(project_name);
      if (errors.length > 0) {
        this.setState({ errors });
          return
        
        }
      this.props.addBasespace(basespace,errors);
      this.setState({
        project_name:'',
        bs_default_project:'',
        bs_project_id:'',
        project_type:'',
        project_created_on:'',
        bs_user_id:''
      });
      this.props.history.push('/basespace/biosample')
    }

    

    render(){
        const {errors,project_name , bs_default_project, bs_project_id,project_type,project_created_on, bs_user_id} = this.state;
        return (
            <div>
            <div className="page-header">
              <h3 className="page-projectName"> Adding Project Form </h3>
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
                  <form className="forms-sample" onSubmit={this.onSubmit} >
                  {errors&&errors.map(error => (
          <p  className="alert alert-danger" role="alert" key={error}>Error: {error}  </p>
        ))}
                    <Form.Group>
                      <label htmlFor="exampleInputUsername1">Project Name</label>
                      <Form.Control
                        type="text"
                        id="exampleInputUsername1"
                        placeholder="project Name"
                        size="lg"
                        value={project_name}
                        name="project_name"
                        onChange={this.onChange}
                        required
                      />
                    </Form.Group>
                    <Form.Group>
                      <label htmlFor="exampleInputUsername1">
                        Basespace Default Project
                      </label>
                      <Form.Control
                        type="text"
                        id="exampleInputUsername1"
                        placeholder="project Name"
                        size="lg"
                        value={bs_default_project}
                        name="bs_default_project"
                        onChange={this.onChange}
                        required
                      />
                    </Form.Group>
                    <Form.Group>
                      <label id="inputGroupFile01">Basespace Project Id</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputGroupFile01"
                        required
                        value={bs_project_id}
                        name="bs_project_id"
                        onChange={this.onChange}
                      />
                    </Form.Group>
                    <Form.Group>
                      <label id="inputGroupFile02">Project Type</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputGroupFile02"
                        value={project_type}
                        name="project_type"
                        onChange={this.onChange}
                        required
                      />
                    </Form.Group>
                    <Form.Group>
                      <label id="inputGroupFile03">Project Created On</label>
                      <input
                        type="date"
                        className="form-control"
                        id="inputGroupFile03"
                        value={project_created_on}
                        name="project_created_on"
                        onChange={this.onChange}
                        required
                      />
                    </Form.Group>
                    <Form.Group>
                      <label id="inputGroupFile04">Basespace User Id</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputGroupFile04"
                        value={bs_user_id}
                        name="bs_user_id"
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

export default connect(null, { addBasespace }) (Add);