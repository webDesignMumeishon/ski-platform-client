import RestaurantIcon from '@mui/icons-material/Restaurant';
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
    {
        id: 3,
        Icon: <RestaurantIcon/>,
        label: 'Restaurants',
        route: 'restaurants'
    },
]




export default navbarItems