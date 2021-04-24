import React, { useState } from 'react'
import '../css/AddNote.css'
import bgg from '../images/bgg2.mp4'

function AddNote() {
    const [entry, setEntry] = useState({title:'',note:''})
    const handleChangeTitle = (event)=>{
        setEntry((entry ) => ({...entry, title:event.target.value}))
        console.log(entry.title)
    }
    const handleChangeNotes = (event)=>{
        setEntry((entry)=>({...entry, note: event.target.value}))
    }
    return (
        <div className="add-note">
            <video autoplay="autoplay" muted loop="loop" id="myVideo">
                <source src={bgg} type="video/mp4"/>
            </video>
            <div >
            <form>
                <input type="text" placeholder="Enter title" value={entry.title} onChange={handleChangeTitle}/>
                <br/><br/><br/>
                <textarea rows="12" cols="80" value={entry.note} onChange={handleChangeNotes}></textarea>
                <br/><br/>
                <input type="submit" value="Add Note" className="submit-bt"/>
            </form>
        </div>
        </div>
       
    )
}

export default AddNote
