import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import List from './List'


const Main = () =>{
    const [pirates, setPirates] = useState([])
    useEffect( ()=>   {
        axios.get("http://localhost:8000/api/pirates")// findAllAuthor from  router
        .then(res => setPirates(res.data))
        .catch(err => console.error(err))
    },[pirates])

    return (
        <>
        <List pirates={pirates} />
        </>
    );
}
export default Main;