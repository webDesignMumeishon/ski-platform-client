import { MdOutlineForum } from 'react-icons/md';
import { MdOutlineLocalGroceryStore } from 'react-icons/md';
import { IoRestaurantOutline } from 'react-icons/io5';
import { TiWeatherSnow } from 'react-icons/ti';


import {IListItem} from '../../interfaces/list'

const navbarItems : IListItem[] = [
    {
        id: 0,
        Icon: <TiWeatherSnow/>,
        label: 'Report',
        route: 'report'
    },
    {
        id: 1,
        Icon: <MdOutlineForum/>,
        label: 'Post',
        route: 'post'
    },
    {
        id: 2,
        Icon: <MdOutlineLocalGroceryStore/>,
        label: 'Market',
        route: 'market'
    },
    {
        id: 3,
        Icon: <IoRestaurantOutline/>,
        label: 'Restaurants',
        route: 'restaurants'
    },
]




export default navbarItems