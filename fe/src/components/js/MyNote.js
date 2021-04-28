import React,{useEffect,useState} from 'react'
import axios from 'axios'
import '../css/MyNote.css'
import bgg from '../images/ezgif.mp4'


function MyNote() {
    const [notes,setNotes] = useState([])
    useEffect(() => {
     axios
    .get('http://localhost:3004/getNotes')
        .then((res) => 
        {
            const data = res.data
            setNotes(data)
            console.log(notes)
        })
        .catch((err) => 
        {
            console.log(err)
        }) 
    },[])  
    return (
        <div className="mn-top">
            <div className="mn-container">
                {notes.map((item)=>{
                    return(
                        <div className="item1">
                            <h2>{item.title}</h2>
                            <textarea readOnly>{item.note}</textarea>
                        </div>
                    )
                })}
            </div>
        </div> 
    )
}

export default MyNote
