import { Box } from "@mui/system"
import ResortReport from './ResortReport'

const Report = () => {
    return (
        <Box>
            <ResortReport area={{title: 'Area Open', value: '88%'}} trails={{title: 'Trails Open', value: '67 of 76'}}/>
        </Box>
    )
}

export default Report