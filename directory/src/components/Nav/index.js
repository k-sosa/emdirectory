import React,{useContext} from 'react';
import { Link } from 'react-router-dom'
import LocationContext,{name} from "../../utils/locationContext"

// contenxt={
//     name:"Chicago"
// }

export default function Nav() {
const {name}= useContext(LocationContext)
    return (
        <div >
            <a href="/" >
            {name}
            </a>
        </div>


    )
}