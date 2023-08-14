import React from 'react'
import { Button, Flex, Text } from '@chakra-ui/react'
import { ImNotification } from 'react-icons/im'
import { IoCaretBackSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <Flex
            justifyContent='center'
            alignItems='center'
            flexDirection='column'
            height='100vh'
            gap={4}
        >
            <Text fontSize='6xl' fontWeight='800'>404</Text>
            <Text letterSpacing='5px' fontSize='5xl' >Page Not Found</Text>
            <ImNotification size='80px' />
            <Link to='/'>
                <Button colorScheme='facebook'><IoCaretBackSharp /> Back To Home</Button>
            </Link>
        </Flex >
    )
}

export default NotFound