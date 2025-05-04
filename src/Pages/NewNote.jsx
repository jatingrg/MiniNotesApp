import { Button, Container, Input, Textarea } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function NewNote() {
    const[title,setTitle] = useState(' ');
    const[content,setContent] = useState(' ');
    const navigate = useNavigate();

    const submitNote = () =>{
        const  note = {title,content};
        fetch('https://jatin-4c4c1-default-rtdb.firebaseio.com/notes.json',{
            method:'POST',
            body:JSON.stringify(note),
        }).then(()=> navigate('/'));
    };

  return (
    <>
    <Container>
        <Input 
            placeholder='Enter The Title'
            mb={3}
            value={title}
            onChange={e => setTitle(e.target.value)}
            />
        <Textarea 
        placeholder='Enter The Content'
        mb={3}
        value={content}
        onChange={e => setContent(e.target.value)}
        />
        <Button onClick={submitNote} colorScheme='teal'> Add Note</Button>    
    </Container>
    </>
  )
}

export default NewNote