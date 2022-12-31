import ForumIcon from '@mui/icons-material/Forum';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SummarizeIcon from '@mui/icons-material/Summarize';
import {IListItem} from '../../interfaces/list'

const navbarItems : IListItem[] = [
    {
        id: 0,
        Icon: <SummarizeIcon/>,
        label: 'Report',
        route: 'report'
    },
    {
        id: 1,
        Icon: <ForumIcon/>,
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