import { useEffect, useState } from "react"
import { Box } from "@mui/system"

import ResortReport from './ResortReport'
import {IResortReport} from '../interfaces/resort'
import ResortInfo from './ResortInfo'
import Loader from "./Loader";
import {useAppSelector} from '../redux/hooks'

const Report = () => {
    const resort = useAppSelector(((state) => state.resortReducer))
    const [loading, setLoading] = useState<boolean>(true)

    const [report, setReport] = useState<IResortReport>({
        id: 0,
        city: '',
        state: '',
        openLifts: '',
        openTerrain: '',
        openTrails: '',
        snowConditions: '',
        status: true
    })

    useEffect(() => {
        setReport(resort)
        setLoading(false)
    }, [resort])

    return (
        <Loader isLoading={loading} >
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
        </Loader>
    )
}

export default Report