import React from 'react'
import './HomeComponent.css'


function HomeComponent() {
    // const [notes, setNote] = useState([])

    // useEffect(()=>{
    //     async function getNotes() {
    //         const response = await axios.get('http://localhost:8000/api/notes/')
    //         setNote(response.data)
    //     }
    //     getNotes();
    // }, [])
  return (
    <div className='home-div'>
        <div className='container-note'>
            <h1>Welcome</h1>
            <h2>Hey Welcome to Homepage</h2>
            {/* <div className='note-contain' style={{display:"flex", flexWrap:"wrap"}}>
                {notes.map((note) => (
                    <div className="single-note">
                        <p className='title'>{note.title}</p>
                        <p>{note.description}</p>
                        
                        <p className='rating-no'>Rating: {note.rating}<AiFillStar/></p>
                    </div>
                ))}
            </div> */}
            
        </div>
    </div>
  )
}

export default HomeComponent