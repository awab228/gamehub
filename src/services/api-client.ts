import axios from "axios";

export interface FetchResponse<T> {
    count: number;
    results: T[];
  }
  
export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key:'fb45e0e3a5cc4d89b422b785951f5da3'
    }
})