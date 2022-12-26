import axios, { AxiosResponse } from "axios";

import {IPost} from '../interfaces/post'

class ServerCommunicator {
	static baseURL = 'http://localhost:4000';
	
	static async doGetRequest<T>(extension: string, queryParams : Object = {}): Promise<AxiosResponse<T>> {

        const requestURL = `${this.baseURL}/${extension}`
        
        const response = await axios.get<T>(requestURL,
            { 
                params: queryParams,
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json'
                }
            },
        )
        return response
	}
}




export default ServerCommunicator;
