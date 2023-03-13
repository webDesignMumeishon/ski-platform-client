import { Grid } from "@mui/material"

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
        
            <Grid container md={12} style={{border: 'red solid 2px'}} flexWrap='nowrap'>
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
                            <span>{props[key].title}</span>
                        </Grid>
                        <Grid item>
                            <span>{props[key].value}</span>
                        </Grid>
                    </Grid>
                )
            })}
            </Grid>
        </div>
    )
}

export default ResortReport