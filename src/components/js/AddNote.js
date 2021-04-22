import React from 'react'
import '../css/AddNote.css'

function AddNote() {
    return (
        <div className="add-note">
            <form>
                <input type="text" placeholder="Enter title"/>
                <br/><br/><br/>
                <textarea rows="12" cols="80"></textarea>
                <br/><br/>
                <input type="submit" value="Add Note" className="submit-bt"/>
            </form>
        </div>
    )
}

export default AddNote
