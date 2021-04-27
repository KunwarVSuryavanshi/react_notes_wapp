import React,{useEffect,useState} from 'react'
import axios from 'axios'

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
        <div>
            My notes
            {notes.map((item)=>{
                return(
                    <ol key={item.id}>
                        <li>{item.title}</li>
                        <li>{item.note}</li>
                    </ol>
                )
            })}
        </div> 
    )
}

export default MyNote
