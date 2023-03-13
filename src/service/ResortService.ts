import { AxiosResponse } from 'axios';

import {ResortReportRequest} from '../request/Resort'
import ServerFacade from "../network/ServerFacade";
import {IResortReport} from '../interfaces/resort'

class ResortService {

    // GET
    static async getResortReport(state : string, town: string) : Promise<AxiosResponse<IResortReport>> {
            const request = new ResortReportRequest(state, town)
            return await ServerFacade.getResortReport<IResortReport>(request);
    }
}


export default ResortService