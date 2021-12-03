import React from 'react';
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
class UpdateProject extends React.Component{
    constructor(){
        super();
        this.state={
            project_name:'',
            bs_default_project:'',
            bs_project_id:'',
            project_type:'',
            project_created_on:'',
            bs_user_id:'',
        }
        this.changeHandler=this.changeHandler.bind(this);
        this.submitForm=this.submitForm.bind(this);
    }

    // Input Change Handler
    changeHandler(event){
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    // Submit Form
    submitForm(){
        var id=this.props.match.params.id;
        fetch('http://127.0.0.1:8000/api/project/'+id+'/',{
            method:'PUT',
            body:JSON.stringify(this.state),
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(response=>response.json())
        .then((data)=>console.log(data));
    }

    fetchData(){
        var id=this.props.match.params.id;
        fetch('http://127.0.0.1:8000/api/project/'+id)
        .then(response=>response.json())
        .then((data)=>{
            this.setState({
                project_name:data.project_name,
                bs_default_project:data.bs_default_project,
                bs_project_id:data.bs_project_id,
                project_type:data.project_type,
                project_created_on:data.project_created_on,
                bs_user_id:data.bs_user_id,
            });
        });
    }

    componentDidMount(){
        this.fetchData();
    }

    render(){
        return (
            <div>
                <div className="page-header">
          <h3 className="page-projectName"> Updating Project Form </h3>
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
                  <label htmlFor="exampleInputUsername1">Project Name</label>
                  <Form.Control
                    type="text"
                    id="exampleInputUsername1"
                    placeholder="project Name"
                    size="lg"
                    value={this.state.project_name}
                    name="project_name"
                    onChange={this.changeHandler}
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
                    value={this.state.bs_default_project}
                    name="bs_default_project"
                    onChange={this.changeHandler}
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
                    value={this.state.bs_project_id}
                    name="bs_project_id"
                    onChange={this.changeHandler}
                  />
                </Form.Group>
                <Form.Group>
                  <label id="inputGroupFile02">Project Type</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputGroupFile02"
                    value={this.state.project_type}
                    name="project_type"
                    onChange={this.changeHandler}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <label id="inputGroupFile03">Project Created On</label>
                  <input
                    type="date"
                    className="form-control"
                    id="inputGroupFile03"
                    value={this.state.project_created_on}
                    name="project_created_on"
                    onChange={this.changeHandler}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <label id="inputGroupFile04">Basespace User Id</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputGroupFile04"
                    value={this.state.bs_user_id}
                    name="bs_user_id"
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

export default UpdateProject;