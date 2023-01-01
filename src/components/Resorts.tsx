import axios from "axios"
import { Link, useLoaderData } from "react-router-dom";

export async function loader() : Promise<any> {
    const result = await axios.get('http://localhost:4000/resort/resorts',
        { 
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
    return result.data;
}

const Resorts = () => {
    const list = (useLoaderData() as any);


    return (
        <div style={{zIndex: '1000000'}}>
            <h1>Resorts</h1>
            {list.map((resort : any)=> {
                return (<Link to={`/${resort.state}/${resort.city}`}>
                    {resort.city}, {resort.state}
                </Link>)
            })}
        </div>
    )
}

export default Resorts