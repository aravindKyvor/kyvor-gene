import React from 'react';
class AddBiosample extends React.Component{
    constructor(){
        super();
        this.state={
            biosample_id:'',
            biosample_type:'',
            biosample_name:'',
            biosample_path:'',
            library_id:'',
            biosample_created_on:'',
            project_id:''
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
        fetch('http://127.0.0.1:8000/api/biosample/',{
            method:'POST',
            body:JSON.stringify(this.state),
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(response=>response.json())
        .then((data)=>console.log(data));

        this.setState({
            biosample_id:'',
            biosample_type:'',
            biosample_name:'',
            biosample_path:'',
            library_id:'',
            biosample_created_on:'',
            project_id:''
        });
    }

    render(){
        return (
            <table className="table table-bordered">
                <tbody>
                    <tr>
                        <th>BioSample Id</th>
                        <td>
                            <input value={this.state.biosample_id} name="biosample_id" onChange={this.changeHandler} type="text" className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <th>BioSample Type</th>
                        <td>
                            <input value={this.state.biosample_type} name="biosample_type" onChange={this.changeHandler} type="text" className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <th>BioSample Name</th>
                        <td>
                            <input value={this.state.biosample_name} name="biosample_name" onChange={this.changeHandler} type="text" className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <th>BioSample Path</th>
                        <td>
                            <input value={this.state.biosample_path} name="biosample_path" onChange={this.changeHandler} type="text" className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <th>Library Id</th>
                        <td>
                            <input value={this.state.library_id} name="library_id" onChange={this.changeHandler} type="text" className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <th>BioSample Created On</th>
                        <td>
                            <input value={this.state.biosample_created_on} name="biosample_created_on" onChange={this.changeHandler} type="text" className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <th>Project Id</th>
                        <td>
                            <input value={this.state.project_id} name="project_id" onChange={this.changeHandler} type="text" className="form-control" />
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

export default AddBiosample;