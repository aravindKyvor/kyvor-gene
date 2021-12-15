
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams ,Link} from "react-router-dom";
import { toast } from "react-toastify";
import { baseURL, headers } from "../Headerssample";



import "react-toastify/dist/ReactToastify.css";

toast.configure();
export const Update = () => {
  const initialMenuState = {
    id: null,
    biosample_id: "",
    biosample_type: "",
    biosample_name: "",
    biosample_path: "",
    library_id: "",
    biosample_created_on: "",
    project_id: "",
  };

  let { id } = useParams();

  const [currentMenu, setCurrentMenu] = useState(initialMenuState);


  useEffect(() => {
    retrieveMenu();
  }, []);

  const handleMenuChange = (e) => {
    const { name, value } = e.target;
    setCurrentMenu({ ...currentMenu, [name]: value });
  };

  const retrieveMenu = () => {
    axios
      .get(`${baseURL}/biosamples/${id}/`, {
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

  const updateMenu = (e) => {
    e.preventDefault()
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
      .put(`${baseURL}/biosamples/${id}/`, data, {
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
        
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const newMenu = () => {
    setCurrentMenu(initialMenuState);
    toast.error('not updated')
  };



  return (
    <div>
      <div className="page-header">
        <h3 className="page-projectName"> Updating Biosample Form </h3>
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
            <div className="submit-form">
              
                <div>
                  <div className="form-group">
                    <label htmlFor="name">Biosample Id</label>
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
                    <label htmlFor="name">Biosample Type</label>
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
                    <label htmlFor="name">Biosample Name</label>
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
                    <label htmlFor="name">Biosample Path</label>
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
                    <label htmlFor="name">Biosample Created On</label>
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
                    <label htmlFor="name">Library Id</label>
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
                    <label htmlFor="name">Project Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Project Name"
                      required
                      value={currentMenu.project_id}
                      onChange={handleMenuChange}
                      name="project_id"
                    />
                  </div>
                  <div className="col text-center">
                  <button onClick={updateMenu} className="btn" style={{backgroundColor:'#fec107'}}> 
                    Update
                  </button>
                  <Link to='/basespace/biosample'><button className="btn" style={{backgroundColor:"#fec107"}}>
                    Back
                  </button></Link>
                  </div>
                </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Update;




// class Update extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       biosample_id: "",
//       biosample_type: "",
//       biosample_name: "",
//       biosample_path: "",
//       library_id: "",
//       biosample_created_on: "",
//       project_id: "",
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
//     fetch("http://127.0.0.1:8000/api/biosamples/" + id + "/", {
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
//     fetch("http://127.0.0.1:8000/api/biosamples/" + id)
//       .then((response) => response.json())
//       .then((data) => {
//         this.setState({
//             biosample_id: data.biosample_id,
//             biosample_type: data.biosample_type,
//             biosample_name:data.biosample_name ,
//             biosample_path:data.biosample_path ,
//             library_id: data.library_id,
//             biosample_created_on: data.biosample_created_on,
//             project_id: data.project_id,
//         });
//       });
//   }

//   componentDidMount() {
//     this.fetchData();
//   }

//   render() {
//     return (
//         <div>
//         <div className="page-header">
//           <h3 className="page-projectName"> Updating Biosample Form </h3>
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
//               <div className="submit-form">
                
//                   <div>
//                     <div className="form-group">
//                       <label htmlFor="name">Biosample Id</label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         id="name"
//                         required
//                         value={this.state.biosample_id}
//                         onChange={this.changeHandler} 
//                         name="biosample_id"
//                       />
//                     </div>
  
//                     <div className="form-group">
//                       <label htmlFor="name">Biosample Type</label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         id="name"
//                         required
//                         value={this.state.biosample_type}
//                         onChange={this.changeHandler} 
//                         name="biosample_type"
//                       />
//                     </div>
  
//                     <div className="form-group">
//                       <label htmlFor="name">Biosample Name</label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         id="name"
//                         required
//                         value={this.state.biosample_name}
//                         onChange={this.changeHandler} 
//                         name="biosample_name"
//                       />
//                     </div>
  
//                     <div className="form-group">
//                       <label htmlFor="name">Biosample Path</label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         id="name"
//                         required
//                         value={this.state.biosample_path}
//                         onChange={this.changeHandler} 
//                         name="biosample_path"
//                       />
//                     </div>
  
//                     <div className="form-group">
//                       <label htmlFor="name">Biosample Created On</label>
//                       <input
//                         type="date"
//                         className="form-control"
//                         id="name"
//                         required
//                         value={this.state.biosample_created_on}
//                         onChange={this.changeHandler} 
//                         name="biosample_created_on"
//                       />
//                     </div>
  
//                     <div className="form-group">
//                       <label htmlFor="name">Library Id</label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         id="name"
//                         required
//                         value={this.state.library_id}
//                         onChange={this.changeHandler} 
//                         name="library_id"
//                       />
//                     </div>
  
//                     <div className="form-group">
//                       <label htmlFor="name">Project Name</label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         id="name"
//                         placeholder="Project Name"
//                         required
//                         value={this.state.project_id}
//                         onChange={this.changeHandler} 
//                         name="project_id"
//                       />
//                     </div>
//                     <div className="col text-center">
//                     <button onClick={this.submitForm} className="btn" style={{backgroundColor:'#fec107'}}> 
//                       Update
//                     </button>
//                     <Link to='/basespace/biosample'><button className="btn" style={{backgroundColor:"#fec107"}}>
//                       Back
//                     </button></Link>
//                     </div>
//                   </div>
              
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Update;

