import { Grid } from "@mui/material"
import { Box } from "@mui/system"

interface Description {
    title: string
    value: string
}

interface ResortReportProps{
    trails: Description
    area: Description
    lift: Description
    condition: Description
}

type ResortReportPropsKeys = keyof ResortReportProps;

const ResortReport = (props: ResortReportProps) => {

    const reportElements = Object.keys(props) as unknown as ResortReportPropsKeys[];

    return (
        <div>
            <h2>Resort Report</h2>

            <Box className='report-wrapper'>
                <Grid container md={12} flexWrap='nowrap' style={{padding: '20px'}}>
                {reportElements.map((key : ResortReportPropsKeys, index: number) => {
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
}

export default ResortReport