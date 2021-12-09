// import React from "react";
// import { Form } from "react-bootstrap";
// import { Link } from "react-router-dom";
// class Update extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       biosample_id:'' ,
//       biosample_type: '' ,
//       biosample_name:''  ,
//       biosample_path:  '',
//       library_id: '',
//       biosample_created_on: '' ,
//       project_id: '',
//     };
//     this.changeHandler = this.changeHandler.bind(this);
//     this.submitForm = this.submitForm.bind(this);
//   }

//   // Input Change Handler
//   changeHandler(event) {
//     this.setState({
//       [event.target.name]: event.target.value,
//     });
//   }

//   // Submit Form
//   submitForm() {
//     var id = this.props.match.params.id;
//     fetch("http://127.0.0.1:8000/api/biosample/" + id + "/", {
//       method: "PUT",
//       body: JSON.stringify(this.state),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => console.log(data));
//   }

//   fetchData() {
//     var id = this.props.match.params.id;
//     fetch("http://127.0.0.1:8000/api/biosample/" + id)
//       .then((response) => response.json())
//       .then((data) => {
//         this.setState({
//           biosample_id: data.biosample_id,
//           biosample_type: data.biosample_type,
//           biosample_name: data.biosample_name,
//           biosample_path: data.biosample_path,
//           library_id: data.library_id,
//           biosample_created_on: data.biosample_created_on,
//           project_id: data.project_id,
//         });
//       });
//   }

//   componentDidMount() {
//     this.fetchData();
//   }

//   render() {
//     return (
//       <div>
//         <div className="page-header">
//           <h3 className="page-projectName"> Adding BioSample Form </h3>
//           <nav aria-label="breadcrumb">
//             <ol className="breadcrumb">
//               <li className="breadcrumb-item">
//                 <a href="!#" onClick={(event) => event.preventDefault()}></a>
//               </li>
//             </ol>
//           </nav>
//         </div>

//         <div className=" col-11 grid-margin stretch-card-1 ">
//           <div className="card">
//             <div className="card-body">
//               <form className="forms-sample" onClick={this.submitForm}>
//                 <Form.Group>
//                   <label htmlFor="exampleInputUsername1">BioSample Id</label>
//                   <Form.Control
//                     type="text"
//                     id="exampleInputUsername1"
//                     placeholder="project Name"
//                     size="lg"
//                     value={this.state.biosample_id}
//                     name="biosample_id"
//                     onChange={this.changeHandler}
//                     required
//                   />
//                 </Form.Group>
//                 <Form.Group>
//                   <label htmlFor="exampleInputUsername1">BioSample Type</label>
//                   <Form.Control
//                     type="text"
//                     id="exampleInputUsername1"
//                     placeholder="project Name"
//                     size="lg"
//                     value={this.state.biosample_type}
//                     name="biosample_type"
//                     onChange={this.changeHandler}
//                     required
//                   />
//                 </Form.Group>
//                 <Form.Group>
//                   <label id="inputGroupFile01">BioSample Name</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="inputGroupFile01"
//                     required
//                     value={this.state.biosample_name}
//                     name="biosample_name"
//                     onChange={this.changeHandler}
//                   />
//                 </Form.Group>
//                 <Form.Group>
//                   <label id="inputGroupFile02">BioSample Path</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="inputGroupFile02"
//                     value={this.state.biosample_path}
//                     name="biosample_path"
//                     onChange={this.changeHandler}
//                     required
//                   />
//                 </Form.Group>
//                 <Form.Group>
//                   <label id="inputGroupFile03">Library Id</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="inputGroupFile03"
//                     value={this.state.library_id}
//                     name="library_id"
//                     onChange={this.changeHandler}
//                     required
//                   />
//                 </Form.Group>
//                 <Form.Group>
//                   <label id="inputGroupFile04">BioSample Created On</label>
//                   <input
//                     type="date"
//                     className="form-control"
//                     id="inputGroupFile04"
//                     value={this.state.biosample_created_on}
//                     name="biosample_created_on"
//                     onChange={this.changeHandler}
//                     required
//                   />
//                 </Form.Group>

//                 <Form.Group>
//                   <label id="inputGroupFile04">Project Id</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="inputGroupFile04"
//                     value={this.state.project_id}
//                     name="project_id"
//                     onChange={this.changeHandler}
//                     required
//                   />
//                 </Form.Group>

//                 <div className="col text-center">
//                   <button
//                     type="submit"
//                     className="btn  mr-2 btn-sm"
//                     style={{ backgroundColor: "#fec107" }}
//                   >
//                     Submit
//                   </button>
//                 </div>
//               </form>

              








//               <div className="border border-light p-3 mb-4">
//                 <div className="text-center">
//                   <span>
//                     <Link to="/basic-ui/Basespace">
//                       <button className="btn btn-light btn-sm"> Cancel</button>
//                     </Link>
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Update;





import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { baseURL, headers } from "./Headerssample";

export const Update= () => {
  const initialMenuState = {
    id: null,
    biosample_id:'' ,
    biosample_type: '' ,
    biosample_name:''  ,
    biosample_path:  '',
    library_id: '',
    biosample_created_on: '' ,
    project_id: '',
   
  };

  let { id } = useParams();

  const [currentMenu, setCurrentMenu] = useState(initialMenuState);
  const [submitted, setSubmitted] = useState(false);
 

  useEffect(() => {
    retrieveMenu();
  }, []);

  const handleMenuChange = (e) => {
    const { name, value } = e.target;
    setCurrentMenu({ ...currentMenu, [name]: value });
  };

  const retrieveMenu = () => {
    axios
    .get(`${baseURL}/biosample/${id}/`, {
        headers: {
          headers,
        },
      })
      .then((response) => {
        setCurrentMenu({
          id: response.data.id,
          biosample_id: response.data.biosample_id,
          biosample_type: response.data.biosample_type,
          biosample_name: response.data.biosample_name,
          biosample_path: response.data.biosample_path,
          library_id: response.data.library_id,
          biosample_created_on: response.data.biosample_created_on,
          project_id: response.data.project_id,
        });
        console.log(currentMenu);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const updateMenu = () => {
    let data = {
        biosample_id: currentMenu.biosample_id,
        biosample_type: currentMenu.biosample_type,
        biosample_name: currentMenu.biosample_name,
        biosample_path: currentMenu.biosample_path,
        library_id: currentMenu.library_id,
        biosample_created_on: currentMenu.biosample_created_on,
        project_id: currentMenu.project_id,
    };

    axios
      .put(`${baseURL}/biosample/${id}/`, data, {
        headers: {
          headers,
        },
      })
      .then((response) => {
        setCurrentMenu({
          id: response.data.id,
          biosample_id: response.data.biosample_id,
          biosample_type: response.data.biosample_type,
          biosample_name: response.data.biosample_name,
          biosample_path: response.data.biosample_path,
          library_id: response.data.library_id,
          biosample_created_on: response.data.biosample_created_on,
          project_id: response.data.project_id,
        
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const newMenu = () => {
    setCurrentMenu(initialMenuState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <div
            className="alert alert-success alert-dismissible fade show"
            role="alert"
          >
            Menu Updated!
            <button
              type="button"
              className="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <button className="btn btn-success" onClick={newMenu}>
            Update
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="name">biosample_id</label>
            <input
              type="text"
              className="form-control"
              id="name"
              required
              value={currentMenu.biosample_id}
              onChange={handleMenuChange}
              name="biosample_id"
            />
          </div>

          <div className="form-group">
            <label htmlFor="name">biosample_type</label>
            <input
              type="text"
              className="form-control"
              id="name"
              required
              value={currentMenu.biosample_type}
              onChange={handleMenuChange}
              name="biosample_type"
            />
          </div>

          <div className="form-group">
            <label htmlFor="name">biosample_name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              required
              value={currentMenu.biosample_name}
              onChange={handleMenuChange}
              name="biosample_name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="name">biosample_path</label>
            <input
              type="text"
              className="form-control"
              id="name"
              required
              value={currentMenu.biosample_path}
              onChange={handleMenuChange}
              name="biosample_path"
            />
          </div>

          <div className="form-group">
            <label htmlFor="name">biosample_created_on</label>
            <input
              type="date"
              className="form-control"
              id="name"
              required
              value={currentMenu.biosample_created_on}
              onChange={handleMenuChange}
              name="biosample_created_on"
            />
          </div>


          <div className="form-group">
            <label htmlFor="name">library_id</label>
            <input
              type="text"
              className="form-control"
              id="name"
              required
              value={currentMenu.library_id}
              onChange={handleMenuChange}
              name="library_id"
            />
          </div>


          <div className="form-group">
            <label htmlFor="name">project_id</label>
            <input
              type="text"
              className="form-control"
              id="name"
              required
              value={currentMenu.project_id}
              onChange={handleMenuChange}
              name="project_id"
            />
          </div>



          

          

          <button onClick={updateMenu} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};
export default Update
