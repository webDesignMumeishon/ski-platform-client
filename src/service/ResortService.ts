import { AxiosResponse } from 'axios';

import {ResortRequest} from '../request/Resort'
import ServerFacade from "../network/ServerFacade";
import {IResort, IResortReport} from '../interfaces/resort'

class ResortService {

    // GET
    static async getResortReport(state : string, town: string) : Promise<AxiosResponse<IResortReport>> {
        const request = new ResortRequest(state, town)
        return ServerFacade.getResortReport<IResortReport>(request);
    }

    // GET
    static async getResort(state : string, town: string) : Promise<AxiosResponse<IResort>> {
        const request = new ResortRequest(state, town)
        return ServerFacade.getResort<IResort>(request);
    }
}


export default ResortService