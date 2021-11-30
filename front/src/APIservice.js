import axios from "axios";

export default class ProductService {
  getProducts() {
    const url = `http://localhost:8000/api/project/`;
    return axios.get(url).then((response) => response.data);
  }

  getProductById(id) {
    const url = `http://localhost:8000/api/project/?id=${id}`;
    return axios.get(url).then((response) => response.data);
  }

  deleteProduct(id) {
    const url = `http://localhost:8000/api/project/?id=${id}`;
    return axios.delete(url).then((response) => response.data);
  }

  createProduct(project) {
    const url = `http://localhost:8000/api/project/`;
    return axios.post(url, project);
  }

  updateProduct(project) {
    const url = `http://localhost:8000/api/project/`;
    return axios.put(url, project).then((response) => response.data);
  }
}
