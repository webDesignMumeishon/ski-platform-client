import { useEffect, useState } from "react"
import { Box } from "@mui/system"
import { useParams } from "react-router-dom";

import ResortReport from './ResortReport'
import ResortService from "../service/ResortService"
import {IResortReport} from '../interfaces/resort'
import ResortInfo from './ResortInfo'

const Report = () => {
    const { state, center } = useParams();

    const [report, setReport] = useState<IResortReport>({
        openLifts: '',
        openTerrain: '',
        openTrails: '',
        snowConditions: '',
        status: true
    })

    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const fetchData = async () : Promise<void> => {
            if(state !== undefined && center !== undefined){
                const response = await ResortService.getResortReport(state, center)
                setReport(response.data)
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    if(loading){
        return (<div>loading</div>)
    }
    else{
       return (
       <Box>
            <ResortReport 
                area={{title: 'Area Open', value: report.openTerrain}} 
                trails={{title: 'Trails Open', value: report.openTrails}}
                lift={{title: 'Lifts Open', value: report.openLifts}}
                condition={{title: 'Conditions', value: report.snowConditions}}
                status={{title: 'Status', value: report.status}}
            />
            <ResortInfo/>
        </Box>
        )
    }
}

export default Report