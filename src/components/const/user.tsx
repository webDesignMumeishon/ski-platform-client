import { FiSettings } from 'react-icons/fi';

import {IListItem} from '../../interfaces/list'


const userItems : IListItem[] = [
    {
        id: 0,
        Icon: <FiSettings/>,
        label: 'Settings',
        route: 'settings'
    },
]




export default userItems