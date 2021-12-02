import React from 'react';
import { Link } from 'react-router-dom';

class Biosample extends React.Component{
    constructor(){
        super();
        this.state={
            data:[]
        };
    }

    fetchData(){
        fetch('http://localhost:8000/api/biosample/')
        .then(response=>response.json())
        .then((data)=>{
            this.setState({
                data:data
            });
        });
    }

    componentDidMount(){
        this.fetchData();
    }

    deleteData(id){
        fetch('http://localhost:8000/api/biosample/'+id+'/',{
            method:'DELETE',
            body:JSON.stringify(this.state),
        })
        .then(response=>response)
        .then((data)=>{
            if(data){
                this.fetchData();
            }
        });
    }

    render(){
        const BiosampleData=this.state.data;
        const rows=BiosampleData.map((item)=>
            <tr key={item.id}>
                <td>{item.biosample_id}</td>
                <td>{item.biosample_type}</td>
                <td>{item.biosample_name}</td>
                <td>{item.biosample_path}</td>
                <td>{item.library_id}</td>
                <td>{item.biosample_created_on}</td>
             
                <td>
                     <Link to={'/update/'+item.id} className="btn btn-info mr-2">Update</Link> 
                    <button onClick={()=>this.deleteData(item.id)} className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
        return (
            <table className="table table-bordered">
                <Link to='/basespace/addbiosample'><button>Add</button></Link>
                <thead>
                    <tr>
                        <th>BioSampleId</th>
                        <th>BioSmapleType</th>
                        <th>BioSampleName</th>
                        <th>BioSamplePath</th>
                        <th>LibraryId</th>
                        <th>Created On</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
    
}

export default Biosample;