/**
 * Created by sanjeevkumar on 27/12/18.
 */

import axios from 'axios';
const API_URL = 'http://192.168.1.3';
export class APIService{

    constructor(){
    }

    getPatient(name) {
        const url = 'http://192.168.1.3/api/clinic/patient/' + name;
        return axios.get(url).then(response => response.data);
    }

    createPatient(data){

        const url = 'http://192.168.1.3/api/clinic/patient/add/';
        return axios.post(url, data).then(resp => {return resp});
    }

    getnames() {
        const url = 'http://192.168.1.3/api/clinic/patients_relatives/names';
        return axios.get(url).then(response => response.data);
    }

    getSelectedPatientProfile(name) {
        const url = 'http://192.168.1.3/api/clinic/patient_profile';
        return axios.get(url).then(resp => resp.data);
    }

    getRelatives(name){
        const url = 'http://192.168.1.3/api/clinic/relatives/patient/' + name;
        return axios.get(url).then(response => response.data);
    }
}