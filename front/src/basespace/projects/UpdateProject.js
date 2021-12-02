import React from 'react';
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
            <table className="table table-bordered">
                <tbody>
                    <tr>
                        <th>Project Name</th>
                        <td>
                            <input value={this.state.project_name} name="project_name" onChange={this.changeHandler} type="text" className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <th>Basespace Default Project</th>
                        <td>
                            <input value={this.state.bs_default_project} name="bs_default_project" onChange={this.changeHandler} type="text" className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <th>Basespace Project Id</th>
                        <td>
                            <input value={this.state.bs_project_id} name="bs_project_id" onChange={this.changeHandler} type="text" className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <th>Project Type</th>
                        <td>
                            <input value={this.state.project_type} name="project_type" onChange={this.changeHandler} type="text" className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <th>Project Created On</th>
                        <td>
                            <input value={this.state.project_created_on} name="project_created_on" onChange={this.changeHandler} type="text" className="form-control" />
                        </td>
                    </tr>
                   
                    <tr>
                        <th>Basespace User Id</th>
                        <td>
                            <input value={this.state.bs_user_id} name="bs_user_id" onChange={this.changeHandler} type="text" className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <input type="submit" onClick={this.submitForm} className="btn btn-dark" />
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default UpdateProject;