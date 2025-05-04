import { Container, Heading } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import NoteCard from '../Componenets/NoteCard';

function Home() {
    const[notes,setnotes] = useState([]);
    useEffect(()=>{
        fetch('https://jatin-4c4c1-default-rtdb.firebaseio.com/notes.json')
        .then((res) => res.json())
        .then((data) =>{
            const loaded = Object.keys(data || {}).map(id =>({
                id,
                ...data[id],
            }));
            setnotes(loaded);
        })
    },[])
    const deleteNote = (id) =>{
        fetch(`https://jatin-4c4c1-default-rtdb.firebaseio.com/notes/${id}.json`,{
            method:'DELETE',

        }).then(() => setnotes(prev => prev.filter(note => note.id!==id)))
    };
    console.log(notes)

  return (
   <Container>
    <Heading my={4}>Your Notes</Heading>
    
    {notes.map(note => (
        <NoteCard key={note.id} note={note} ondelete={deleteNote}/>
    ))}
   </Container>
  )
}

export default Home