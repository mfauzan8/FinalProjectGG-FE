import React from 'react'
import { InputGroup, Input, InputLeftElement, Textarea, FormControl, Button } from '@chakra-ui/react'
import { FaUserAlt } from 'react-icons/fa'

const InputComment = ({ handleSubmit, handleInputChange, formData }) => {

    return (
        <FormControl>
            <InputGroup my={3}>
                <InputLeftElement pointerEvents='none'>
                    <FaUserAlt />
                </InputLeftElement>
                <Input
                    type='text'
                    placeholder='Username'
                    name='username'
                    value={formData.username}
                    onChange={(e) => handleInputChange(e)}
                />
            </InputGroup>
            <Textarea
                mb={2}
                placeholder='Enter Comment'
                name='comment'
                value={formData.comment}
                onChange={(e) => handleInputChange(e)}
            />
            <Button onClick={handleSubmit}>Submit Comment</Button>
        </FormControl >
    )
}

export default InputComment