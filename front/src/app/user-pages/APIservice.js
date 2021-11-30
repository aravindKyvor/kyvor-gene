import { tokenHeader } from '../../headersauth';

import axios from 'axios';
const API_URL = 'http://localhost:8000';


export default class APIservice{
	
	
	getDATAS() {
		const url = `${API_URL}/api/project/`;
		return axios.get(url,tokenHeader()).then(response => response.data);
	}



	getDATAById(id) {
		const url = `${API_URL}/api/project/?id=${id}`;
		return axios.get(url,tokenHeader()).then(response => response.data);
	}

	deleteDATA(id){
		const url = `${API_URL}/api/project/?id=${id}`;
		return axios.delete(url,tokenHeader()).then(response => response.data);
	}

	createDATA(project){
		const url = `${API_URL}/api/project/`;
		return axios.post(url,project,tokenHeader());
	}

	updateDATA(project){
		const url = `${API_URL}/api/project/`;
		return axios.put(url,project,tokenHeader()).then(response => response.data);
	}
}