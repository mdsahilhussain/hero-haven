/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState} from 'react';
import axios, { AxiosRequestConfig } from 'axios';

axios.defaults.baseURL = "http://localhost:8080";

export const useAxios = () => {
    const [response, setResponse] = useState<any>(undefined);
    const [error, setError] = useState<string | unknown>('');
    const [loading, setLoading] = useState<boolean>(false);

    const request = async (params: AxiosRequestConfig<any>) => {
      try {
      setLoading(true)
       const result = await axios.request(params);
       console.log(result, "111111111");
       setResponse(result.data);
       } catch( error:any ) {
         setError(error?.response?.data);
       } finally {
         setLoading(false);
       }
    };

    return { response, error, loading, request };
  }