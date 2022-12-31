import SummarizeIcon from '@mui/icons-material/Summarize';
import FeedIcon from '@mui/icons-material/Feed';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { ReactElement } from "react";

interface NavBarItems {
    id: number,
    Icon: ReactElement,
    label: string,
    route: string
}

const navbarItems : NavBarItems[] = [
    {
        id: 0,
        Icon: <SummarizeIcon/>,
        label: 'Report',
        route: 'report'
    },
    {
        id: 1,
        Icon: <FeedIcon/>,
        label: 'Post',
        route: 'post'
    },
    {
        id: 2,
        Icon: <StorefrontIcon/>,
        label: 'Market',
        route: 'market'
    },
]




export default navbarItems