import axios from 'axios';
import { get } from 'lodash';

const baseUrl = `http://${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}`;

const processError = ({ response }) => {
  const message = get(response, 'data.message', null)
  const data = get(response, 'data', null)
  const status = get(response, 'status', null);
  const statusText = get(response, 'statusText', 'Unknown Error!')
  console.error('error  ====', { response,  status, statusText})

  return { message: message || statusText, status, data };
}


const HttpClient = axios.create({
    // baseURL: baseUrl,
    headers: {
      'Content-Type': 'application/json'
    },
    crossDomain: true,
    responseType: 'json',
    // proxy: {
    //     host: process.env.REACT_APP_API_HOST,
    //     port: process.env.REACT_APP_API_PORT
    // }
  });

  HttpClient.interceptors.response.use(
    response => {
      console.log(response)
      return response.data
    },
    (error) => Promise.reject(processError(error))
  );


  export default HttpClient;