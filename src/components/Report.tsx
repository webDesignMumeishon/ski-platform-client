import { useEffect, useState } from "react"
import { Box } from "@mui/system"
import { useParams } from "react-router-dom";

import ResortReport from './ResortReport'
import ResortService from "../service/ResortService"
import {IResortReport} from '../interfaces/resort'

const Report = () => {
    const { state, center } = useParams();

    const [report, setReport] = useState<IResortReport>({
        openLifts: '',
        openTerrain: '',
        openTrails: '',
        snowConditions: ''
    })

    useEffect(() => {
        const fetchData = async () : Promise<void> => {
            if(state !== undefined && center !== undefined){
                const response = await ResortService.getResortReport(state, center)
                setReport(response.data)
            }
        }
        fetchData()
    }, [])

    return (
        <Box>
            <ResortReport 
                area={{title: 'Area Open', value: report.openTerrain}} 
                trails={{title: 'Trails Open', value: report.openTrails}}
                lift={{title: 'Lifts Open', value: report.openLifts}}
                condition={{title: 'Conditions', value: report.snowConditions}}
            />
        </Box>
    )
}

export default Report