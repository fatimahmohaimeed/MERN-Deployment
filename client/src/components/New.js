import React, { useState } from 'react'
import axios from 'axios';
import {useHistory} from 'react-router-dom'
import {Link} from "react-router-dom";


const New = () => {
    const [name, setName] = useState(""); 
    const [image, setImage] = useState(""); 
    const [chests,setNChests] = useState(); //number
    const [phrase, setPhrase] = useState(""); 
    const [position, setPosition] = useState(""); 
    const [leg, setLeg] = useState(true); 
    const [eye, setEye] = useState(true); 
    const [hand, setHand] = useState(true); 


    const[error, setError] = useState([])
    const [nameError, setNameError] = useState(""); 
    const [imageError, setImageError] = useState(""); 
    const [chestsError,setNChestsError] = useState(); //number
    const [phraseError,setPhraseError] = useState(""); //number
    const [positionError, setPositionError] = useState("");


    const history = useHistory();
    // const navigate = useNavigate();


    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/pirate/new', {
            name,
            image,
            chests,
            phrase,
            position,
            leg,
            eye,
            hand
        })

        .then(res=> history.push("/pirates"))
        // history.push("/author")
        .catch(err=> {
            const errorObj = err.response.data.errors
            let errArr = []
            for (const key of Object.keys(errorObj)){
                errArr.push(errorObj[key].message)
            }
            // navigate('/authors');
            setError(errArr)
        })
        // history.push("/author")
    }

    

    const handleName = (e) =>{
        if(e.target.value.length < 1){
            setNameError("name is required")
        }
        else if(e.target.value.length<3){
            setNameError("name has to be more than 3 characters")
        }
        else{
            setNameError("")
        }
        setName(e.target.value)
    }

    const handlePosition = (e) =>{
        if(e.target.value.length < 1){
            setPositionError("Image is required")
        }
        else if(e.target.value.length<3){
            setPositionError("Image has to be more than 3 characters")
        }
        else{
            setPositionError("")
        }
        setPosition(e.target.value)
    }

    const handleChests = (e) =>{
        if(e.target.value.length < 1){
            setNChestsError("Chests is required")
        }
        else if(e.target.value.length < 1){
            setNChestsError("Chests has to be more than 1 characters")
        }
        else{
            setNChestsError("")
        }
        setNChests(e.target.value)
    }
    
    const handleImage = (e) =>{
        if(e.target.value.length < 1){
            setImageError("image is required")
        }
        else if(e.target.value.length<3){
            setImageError("image has to be more than 3 characters")
        }
        else{
            setImageError("")
        }
        setImage(e.target.value)
    }
    

    const handlePhrase = (e) =>{
        if(e.target.value.length < 1){
            setPhraseError("Phrase is required")
        }
        else if(e.target.value.length<3){
            setPhraseError("Phrase has to be more than 3 characters")
        }
        else{
            setPhraseError("")
        }
        setPhrase(e.target.value)
    }






    return (
        <>
        <button><Link to={"/pirates"}>Crew Board</Link></button>

        <form onSubmit={onSubmitHandler}>
            {error.map((error,i) => <p key={i}>{error}</p>)}
            <p>
                <label>Pirate Name:</label><br/>
                <input type="text" onChange={handleName} value={name}/>
                {nameError}
            </p>
            <p>
                <label>Image URL:</label><br/>
                <input type="text" onChange={handleImage} value={image}/>
                {imageError}
            </p>
            <p>
                <label># of Treasure Chests:</label><br/>
                <input type="number" onChange={handleChests} value={chests}/>
                {chestsError}
            </p>
            <p>
                <label>Pirate Catch Phrase:</label><br/>
                <input type="text" onChange={handlePhrase} value={phrase}/>
                {phraseError}
            </p>
            <p>
            <select name="position" type="text" onChange={handlePosition} value={position}>
            <option >Select One</option>
            <option value="Captain">Captain</option>
            <option value="FirstMate">First Mate</option>
            <option value="Boatswain">Boatswain</option>
            <option value="PowderMonkey">Powder Monkey</option>
            </select><br />
                {positionError}
            </p>


            <p>
                <label>Peg Leg:</label><br/>
                <input type="checkbox" onChange={(e) => setLeg(e.target.checked)} checked={leg} /><br />
            </p>


            <p>
                <label>Eye Patch:</label><br/>
                <input type="checkbox" onChange={(e) => setEye(e.target.checked)} checked={eye}/>
            </p>

            <p>
                <label>Hook Hand:</label><br/>
                <input type="checkbox" onChange={(e) => setHand(e.target.checked)} checked={hand}/>
            </p>

            <input type="submit" value="Add Pirate" />
        </form>

        </>
    )
}

export default New;