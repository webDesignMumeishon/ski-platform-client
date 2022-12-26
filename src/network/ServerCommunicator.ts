import axios, { AxiosResponse } from "axios";

class ServerCommunicator {
	static baseURL = 'http://localhost:4000';
	
	static async doGetRequest<T>(extension: string, queryParams : Object = {}): Promise<AxiosResponse<T>> {

        const requestURL = `${this.baseURL}/${extension}`
        
        return await axios.get<T>(requestURL,
            { 
                params: queryParams,
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json'
                }
            },
        )
	}

    static async doPostRequest<T, BodyType>(extension : string, body : BodyType) : Promise<AxiosResponse<T>> {

        const requestURL = `${this.baseURL}/${extension}` 

        return await axios.post<T>(requestURL,
            body,
            {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
    }
}




export default ServerCommunicator;
