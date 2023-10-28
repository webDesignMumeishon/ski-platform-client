import React from 'react';
import { Grid } from "@mui/material"
import { Box } from "@mui/system"

import Status from "./Status"

interface Description<T> {
    title: string
    value: T
}

interface ResortReportProps{
    trails: Description<string>
    area: Description<string>
    lift: Description<string>
    condition: Description<string>
    status: Description<boolean>
}

type ResortReportPropsKeys = keyof ResortReportProps;

const ResortReport = React.memo((props: ResortReportProps) => {

    const reportElements = Object.keys(props) as unknown as ResortReportPropsKeys[];

    return (
        <div>
            <Grid container alignItems={'center'}>
                <h2>Resort Report</h2>
                <Status status={props.status.value}/>
            </Grid>

            <Box className='report-wrapper'>
                <Grid container md={12} flexWrap='nowrap' style={{padding: '20px'}}>
                {reportElements.map((key : ResortReportPropsKeys, index: number) => {
                    if(key === 'status'){
                        return null
                    }
                    return (
                        <Grid 
                            container 
                            flexDirection={'column'} 
                            className='resort-report-child-status'
                            alignItems={'center'}
                            key={index}
                        >
                            <Grid item>
                                <span className="report-title">{props[key].title}</span>
                            </Grid>
                            <Grid item>
                                <span>{props[key].value}</span>
                            </Grid>
                        </Grid>
                    )
                })}
                </Grid>
            </Box>
        </div>
    )
})

export default ResortReport