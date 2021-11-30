import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import "../tables.css";
class Projectform extends Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-projectName"> Project Form </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="!#" onClick={(event) => event.preventDefault()}>
                  TO Pipeline
                </a>
              </li>
            </ol>
          </nav>
        </div>

        <div className=" col-11 grid-margin stretch-card-1 ">
          <div className="card">
            <div className="card-body">
              <form className="forms-sample">
                <Form.Group>
                  <label htmlFor="exampleInputUsername1">Project Name</label>
                  <Form.Control
                    type="text"
                    id="exampleInputUsername1"
                    placeholder="project Name"
                    size="lg"
                    name="projectName"
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <label htmlFor="exampleInputCancerType">Cancer Type</label>

                  <select className="form-control" required>
                    <option>------ NONE ------</option>
                    <option>Well differentiated Lung Adenocarcinoma</option>
                    <option>Uterine Leiomyosarcoma</option>
                    <option>Urothelial Carcinoma</option>
                    <option>Triple Negative Metastatic Breast Cancer</option>
                    <option>Triple Negative Breast Cancer</option>
                    <option>Thyroid Cancer</option>
                    <option>Thymoma and Thymic Carcinoma</option>
                    <option>Synovial Sarcoma</option>
                    <option>Stomach Cancer</option>
                    <option>Serous Adenocarcinoma Ovary</option>
                    <option>
                      Second Primary Ca Stomach (First Primary Ca Breast )
                    </option>
                    <option>Sebaceous Carcinoma</option>
                    <option>Sarcoma</option>
                    <option>Rhabdomyosarcoma</option>
                    <option>Renal Carcinoma (RCC)</option>
                    <option>Recurrent Synovial Sarcoma</option>
                    <option>Recurrent Sacral Chordoma</option>
                    <option>Recurrent Chordoma</option>
                    <option>Recurrent Carcinoma Thyroid</option>
                    <option>
                      RECURRENT CARCINOMA STOMACH WITH LIVER METASTASIS
                    </option>
                    <option>Recurrent Carcinoma Right Lung</option>
                    <option>Recurrent Carcinoma Ovary</option>
                    <option>Recurrent Anaplastic Hemangiopericytoma</option>
                    <option>Rectal Cancer</option>
                    <option>Prostate Cancer</option>
                    <option>
                      Poorly Differentiated Metastatic Lung carcinoma
                    </option>
                    <option>Poorly differentiated Leiomyosarcoma</option>
                    <option>
                      POORLY DIFFERENTIATED ADENOCARCINOMA OF THE COLON
                    </option>
                    <option>
                      Pleomorphic Liposarcoma With Local Recurrence
                    </option>
                    <option>Penile Cancer</option>
                    <option>Papillary Carcinoma Lung</option>
                    <option>Pancreatic Cancer</option>
                    <option>Pancreatic Adenocarcinoma</option>
                    <option>Ovarian Cancer</option>
                    <option>Osteosarcoma Left Ilium</option>
                    <option>Oropharyngeal Cancer</option>
                    <option>Non-Small Cell Lung Carcinoma</option>
                    <option>Neuroendocrine Tumor Duodenum</option>
                    <option>Myelodysplastic Syndrome</option>
                    <option>
                      MUCINOUS ADENOCARCINOMA RECTO SIGMOID COLON WITH LIVER
                      METASTASES AND OMENTUM
                    </option>
                    <option>Mucinous Adenocarcinoma of Appendix</option>
                    <option>
                      Moderately differentiated Squamous carcinoma of Tongue
                    </option>
                    <option>
                      Moderately Differentiated Adenocarcinoma Lung
                    </option>
                    <option>
                      Moderately Differentiated Carcinoma of Sigmoid and Rectum
                    </option>
                    <option>Metastatic Urothelial Carcinoma</option>
                    <option>Metastatic Renal Cell Carcinoma</option>
                    <option>Metastatic Pulmonary Adenocarcinoma</option>
                    <option>Metastatic Pancreatic Adenocarcinoma</option>
                    <option>Metastatic Lung Carcinoma</option>
                    <option>Metastatic Lung Adenocarcinoma</option>
                    <option>Metastatic Left Renal Cell Carcinoma</option>
                    <option>
                      Metastatic Large Cell Neuroendocrine Carcinoma
                    </option>
                    <option>Metastatic High Grade Osteosarcoma</option>
                    <option>Metastatic Ewings Sarcoma Left Humerus</option>
                    <option>METASTATIC CARCINOMA OF LEFT BREAST</option>
                    <option>METASTATIC CARCINOMA OF BREAST</option>
                    <option>Metastatic Carcinoma Lung</option>
                    <option>Metastatic Carcinoma Left Kidney</option>
                    <option>Metastatic Carcinoma Glottis</option>
                    <option>Metastatic Carcinoma Breast</option>
                    <option>Metastatic Carcinoma Colon</option>
                    <option>Metastatic Bifrontal Leiomyosarcoma</option>
                    <option>Metastatic Adenosquamous Carcinoma lung</option>
                    <option>Metastatic Adenocarcinoma Stomach</option>
                    <option>Metastatic Adenocarcinoma of Stomach</option>
                  </select>
                </Form.Group>
                <Form.Group>
                  <label id="inputGroupFile01">BioSample TumorFile 1</label>
                  <input
                    type="file"
                    className="form-control"
                    id="inputGroupFile01"
                    required
                    name="biosampleTumorfile1"
                  />
                </Form.Group>
                <Form.Group>
                  <label id="inputGroupFile02">BioSample TumorFile 2</label>
                  <input
                    type="file"
                    className="form-control"
                    id="inputGroupFile02"
                    name="biosampleTumorfile2"
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <label id="inputGroupFile03">BioSample TumorFile 3</label>
                  <input
                    type="file"
                    className="form-control"
                    id="inputGroupFile03"
                    name="biosampleTumorfile3"
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <label id="inputGroupFile04">BioSample TumorFile 4</label>
                  <input
                    type="file"
                    className="form-control"
                    id="inputGroupFile04"
                    name="biosampleTumorfile4"
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <label id="inputGroupFile05">Project Rerun</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputGroupFile05"
                    name="Project Rerun"
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
                    <Link to="/basic-ui/Analysis">
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

export default Projectform;
