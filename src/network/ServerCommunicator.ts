import axios, { AxiosResponse } from "axios";

class ServerCommunicator {
	static baseURL = 'http://localhost:4000';
	
	static async doGetRequest<ResponseType, RequestBody = object>(extension: string, queryParams? : RequestBody): Promise<AxiosResponse<ResponseType>> {

        const requestURL = `${this.baseURL}/${extension}`
        
        return axios.get<ResponseType>(requestURL,
            { 
                params: queryParams,
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json'
                }
            },
        )
	}

    static async doPostRequest<RequestType, ResponseType>(extension : string, body : RequestType) : Promise<AxiosResponse<ResponseType>> {
        const requestURL = `${this.baseURL}/${extension}` 
        return axios.post<ResponseType>(requestURL,
            body,
            {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
    }

    static async doDeleteRequest<T>(extension : string) : Promise<AxiosResponse<T>> {

        const requestURL = `${this.baseURL}/${extension}` 

        return axios.delete<T>(requestURL,
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
