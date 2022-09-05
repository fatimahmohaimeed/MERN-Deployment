import React from 'react'
import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'

const Details = () => {
    const [pirate, setPirate] = useState([])
    const {id} = useParams()
    useEffect( ()=>   {
        axios.get("http://localhost:8000/api/pirate/"+id) //findOneSingleAuthor from routes 
        .then(res => setPirate(res.data))
        .catch(err => console.error(err))
    },[id])


    return (
        <>
        <h1>About</h1>
        <p>Name: {pirate.name}</p>
        <img src={pirate.image} altt={`pirate img`} width="150" height="150"/>
        <p>" {pirate.phrase} "</p>
        <p>Treasures: {pirate.chests}</p>
        <p>position: {pirate.position}</p>

        <p>Peg Leg: {pirate.leg ? "Yes" : "No"}  <button>{!pirate.leg ? 'Yes' : 'No'}</button></p>
        <p>Eye Patch: {pirate.eye ? "Yes" : "No"} <button>{!pirate.eye ? 'Yes' : 'No'}</button></p>
        <p>Hook Hand: {pirate.hand ? "Yes" : "No"}<button>{!pirate.hand ? 'Yes' : 'No'}</button></p>




        </>
    );
}
export default Details;