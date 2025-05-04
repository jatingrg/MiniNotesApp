import { Button, Text,Box } from '@chakra-ui/react'
import React from 'react'

function NoteCard({note,ondelete}) {
    console.log(note)
  return (
    <>
    <Box borderWidth="1px" borderRadius="lg" p={4} mb={4}>
        <Text fontWeight="bold">{note.title}</Text>
        <Text>{note.content}</Text>
        <Button mt={2} colorScheme='red' onClick={()=> ondelete(note.id)}>
            Delete
        </Button>
    </Box>
    </>
  )
}

export default NoteCard