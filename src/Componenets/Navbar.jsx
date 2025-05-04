import React from 'react'
import { Button, Flex ,Box,useColorMode } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

function Navbar() {
    const {colorMode,toggleColorMode} = useColorMode();
  return (
    <Flex p={4} bg="teal.500" color="white">
        <Box>
            <Link to="/">Home</Link>
        </Box>
        <Box>
            <Link to="/new">New Note</Link>
        </Box>
        <Button ml = {4} onClick={toggleColorMode}>
            {colorMode === 'light' ? 'Dark' : 'Light'}Mode
        </Button>

    </Flex>
  )
}

export default Navbar