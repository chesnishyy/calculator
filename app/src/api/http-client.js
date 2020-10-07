import axios from 'axios';
import { get } from 'lodash';

const processError = ({ response }) => {
  const message = get(response, 'data.message', null)
  const data = get(response, 'data', null)
  const status = get(response, 'status', null);
  const statusText = get(response, 'statusText', 'Unknown Error!')
  console.error('error  ====', { response,  status, statusText})

  return { message: message || statusText, status, data };
}


const HttpClient = axios.create({
    headers: {
      'Content-Type': 'application/json'
    },
    crossDomain: true,
    responseType: 'json'
  });

  HttpClient.interceptors.response.use(
    response => {
      console.log(response)
      return response.data
    },
    (error) => Promise.reject(processError(error))
  );


  export default HttpClient;