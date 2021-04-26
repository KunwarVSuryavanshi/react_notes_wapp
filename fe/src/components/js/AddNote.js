import React, { useState } from 'react'
import '../css/AddNote.css'
import bgg from '../images/ezgif.mp4'
import axios from 'axios'
function AddNote() {
    const [entry, setEntry] = useState({title:'',note:''})
    const handleChangeTitle = (event)=>{
        setEntry((entry ) => ({...entry, title:event.target.value}))
    }
    const handleChangeNotes = (event)=>{
        setEntry((entry)=>({...entry, note: event.target.value}))
    }
    const handleSubmit = ()=>{
       entry.preventDefault();
        console.log(entry.title)
        axios
        .post('http://localhost:3001/add',)
        .then()
        .catch()
    }
    return (
        <div className="add-note">
            <video autoPlay="autoplay" muted loop="loop" id="myVideo">
                <source src={bgg} type="video/mp4"/>
            </video>
            <div >
            <form onSubmit={handleSubmit}>
                <input className="inp1" type="text" placeholder="Enter title" value={entry.title} onChange={handleChangeTitle}/>
                <br/><br/><br/>
                <textarea className="inp2" rows="12" cols="80" value={entry.note} onChange={handleChangeNotes}></textarea>
                <br/><br/>
                <input type="submit" value="Add Note" className="submit-bt"/>
            </form>
        </div>
        </div>
       
    )
}

export default AddNote
