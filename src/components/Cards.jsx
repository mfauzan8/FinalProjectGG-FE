import React from 'react'
import { Box, Text, Image } from '@chakra-ui/react'

const Cards = ({ item }) => {
  return (
    <Box
      h="300px"
      w="410px"
      borderRadius="md"
      overflow="hidden"
      position="relative"
    >
      <Image
        src={item.image} // Ganti URL gambar sesuai kebutuhan Anda
        alt="tumbnail"
        objectFit="cover"
        w="100%"
        h="100%"
        position="absolute"
        zIndex={-1}
      />
      <Box
        p="6px"
        color="white"
        position="absolute"
        bottom="0"
        w="100%"
        bg="rgba(0, 0, 0, 0.3)"
      >
        <Text fontSize="sm">{item.title}</Text>
      </Box>
    </Box>

  )
}

export default Cards