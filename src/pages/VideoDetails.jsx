import React from 'react'
import { useParams, useHistory } from "react-router-dom";
import { IconButton, Grid, GridItem } from '@chakra-ui/react';
import { IoArrowBackSharp } from 'react-icons/io5'

const VideoDetails = () => {
    let history = useHistory();
    let { id } = useParams();
    console.log(id)

    const handleButtonBack = () => {
        history.push('/')

    }

    return (
        <Grid
            templateAreas={`"header header"
                  "main nav"
                  "footer nav"`}
            gridTemplateRows={'8vh 1fr 20vh'}
            gridTemplateColumns={'1fr 18vw'}
            h='100vh'
            gap='1'
            color='blackAlpha.700'
            fontWeight='bold'
        >
            <GridItem p='3' area={'header'}>
                <IconButton
                    isRound={true}
                    variant='solid'
                    colorScheme='whiteAlpha'
                    aria-label='Done'
                    fontSize='20px'
                    icon={<IoArrowBackSharp />}
                    onClick={handleButtonBack}
                />
            </GridItem>
            <GridItem pl='2' area={'nav'}>
                Nav
            </GridItem>
            <GridItem pl='2' area={'main'}>
                Main
            </GridItem>
            <GridItem pl='2' area={'footer'}>
                Footer
            </GridItem>
        </Grid>
    )
}

export default VideoDetails