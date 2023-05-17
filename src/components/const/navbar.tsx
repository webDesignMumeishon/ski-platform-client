import { MdOutlineForum, MdOutlineLocalGroceryStore } from 'react-icons/md';
import { IoRestaurantOutline } from 'react-icons/io5';
import { TiWeatherSnow } from 'react-icons/ti';
import { FaUserFriends } from 'react-icons/fa';


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
    {
        id: 4,
        Icon: <FaUserFriends/>,
        label: 'Buddy Riding',
        route: 'buddy-riding'
    },
]




export default navbarItems