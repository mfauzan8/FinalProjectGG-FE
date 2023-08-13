import React from 'react'
import { Grid, Card, Image, Stack, Text } from '@chakra-ui/react'

const Product = ({ item }) => {
    return (
        <Card w='23vh' h='100%' >
            <Image
                borderTopRadius='8px'
                objectFit='fill'
                src={item.link_product}
                alt='product'
                minH='10vh'
            />
            <Stack px={2} py={1}>
                <Text
                    fontSize={12}
                    fontWeight={600}
                    lineHeight={1}
                    noOfLines={2}
                >
                    {item.title}
                </Text>
                <Text
                    fontSize={10}
                    fontWeight={800}
                    color='#525867'
                >
                    {item.price_product.toLocaleString('id-ID',
                        {
                            currency: 'IDR',
                            style: 'currency',
                            minimumFractionDigits: 0
                        })}
                </Text>
            </Stack>
        </Card >
    )
}

export default Product