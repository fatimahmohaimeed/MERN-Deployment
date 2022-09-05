import React from 'react'
import {Link} from "react-router-dom";
import axios from 'axios'

const List = (props) => {

    const handleDelete = (id) =>{
        axios.delete("http://localhost:8000/api/delete/"+id)
        .then(res => console.log(res.data))
        .catch(err => console.error(err))
    }

    return (
        <>
        <table>
            <td>Name</td>
            <td>View</td>
            <td>Action</td>
            {props.pirates.map((pirate,i) =>
            <tr key={i}>
                <td>
                <p><img src={pirate.image}  alt={`pirate picture`} width="150" height="150"/></p>
                </td>
                <td>
                {pirate.name}
                </td>
                <td>
                <button><Link to={"/pirate/"+pirate._id}>View</Link></button>
                </td>
                <td>
                {/* <Link to={"/edit/"+pirate._id}>Edit</Link> */}
                <button onClick={()=>{handleDelete(pirate._id)}}>Delete</button>
                </td>
            </tr>
            )}
            </table>
            <button><Link to={"/new"}>New</Link></button>

        </>
    )
}
export default List;