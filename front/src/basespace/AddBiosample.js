import React,{useState} from "react";
import { Form } from "react-bootstrap";
import { Link ,useHistory} from "react-router-dom";

import axios from 'axios'


const AddBiosample = () => {

    let history = useHistory();

        const [biosample_id, setbiosample_id] = useState(null)
        const [biosample_type,setbiosample_type ] = useState(null)
        const [biosample_name,setbiosample_name ] = useState(null)
        const [biosample_path,setbiosample_path ] = useState(null)
        const [library_id, setlibrary_id] = useState(null)
        const [biosample_created_on,setbiosample_created_on ] = useState(null)
        const [project_id, setproject_id ] = useState(null)



        const addNewSample = async () => {
            let formField = new FormData()
            formField.append('biosample_id',biosample_id)
            formField.append('biosample_type',biosample_type)
            formField.append('biosample_name',biosample_name)
            formField.append('biosample_path',biosample_path)
            formField.append('library_id',library_id)
            formField.append('biosample_created_on',biosample_created_on)
            formField.append('project_id',project_id)
    
         
    
            await axios({
              method: 'post',
              url:'http://127.0.0.1:8000/api/biosample/',
              data: formField
            }).then(response=>{
              console.log(response.data);
              history.push('/')
            })
        }
    





  

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
              <form className="forms-sample" onClick={addNewSample}>
                <Form.Group>
                  <label htmlFor="exampleInputUsername1">BioSample Id</label>
                  <Form.Control
                    type="text"
                    id="exampleInputUsername1"
                    placeholder="project Name"
                    size="lg"
                    value={biosample_id}
                    name="biosample_id"
                    onChange={(e) => setbiosample_id(e.target.value)}
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
                    value={biosample_type}
                    name="biosample_type"
                    onChange={(e) => setbiosample_type(e.target.value)}
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
                    value={biosample_name}
                    name="biosample_name"
                    onChange={(e) => setbiosample_name(e.target.value)}
                  />
                </Form.Group>
                <Form.Group>
                  <label id="inputGroupFile02">BioSample Path</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputGroupFile02"
                    value={biosample_path}
                    name="biosample_path"
                    onChange={(e) => setbiosample_path(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <label id="inputGroupFile03">Library Id</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputGroupFile03"
                    value={library_id}
                    name="library_id"
                    onChange={(e) => setlibrary_id(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <label id="inputGroupFile04">BioSample Created On</label>
                  <input
                    type="date"
                    className="form-control"
                    id="inputGroupFile04"
                    value={biosample_created_on}
                    name="biosample_created_on"
                    onChange={(e) => setbiosample_created_on(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group>
                  <label id="inputGroupFile04">Project Id</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputGroupFile04"
                    value={project_id}
                    name="project_id"
                    onChange={(e) => setproject_id(e.target.value)}
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


export default AddBiosample;
