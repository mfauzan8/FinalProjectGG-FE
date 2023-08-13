import React, { useEffect, useState } from 'react'
import { AxiosInstance } from '../config/AxiosInstance';
import { Grid, GridItem, Button, ButtonGroup, Flex } from '@chakra-ui/react';
import Cards from '../components/Cards';
import { Link } from 'react-router-dom';

const Home = () => {
    const [dataVideo, setDataVideo] = useState([])
    const [tab, setTab] = useState([
        { name: 'Explore', isActive: true },
        { name: 'Terbaru', isActive: false }
    ])
    useEffect(() => {
        AxiosInstance.get('/video')
            .then((response) => {
                setDataVideo(response.data.list_videos)
            })
    }, []);

    const handleOnClickTabbing = (e) => {
        const updateTab = tab.map(item => {
            if (item.name === e) {
                return ({ ...item, isActive: true })
            } else {
                return ({ ...item, isActive: false })
            }
        })
        setTab(updateTab)
    }

    return (
        <Grid templateRows="70px 1fr" h="100vh" w="100vw" gap={2}>
            <GridItem p={4} borderBottom="3px solid rgba(255, 255, 255, 0.5)">
                <ButtonGroup gap='1'>
                    {tab.map((item, idx) => (
                        <Button
                            key={idx}
                            borderRadius="15px"
                            size='sm'
                            name={item.name}
                            colorScheme={item.isActive ? 'whiteAlpha' : 'blackAlpha'}
                            onClick={(e) => { handleOnClickTabbing(e.target.name) }}
                        >
                            {item.name}
                        </Button>
                    )
                    )}
                </ButtonGroup>
            </GridItem>

            <GridItem p={2}>
                <Flex gap={2}>
                    {dataVideo.map(item =>
                        <Link to={`/video/${item._id}`} key={item._id} >
                            <Cards item={item} />
                        </Link>
                    )}
                </Flex>

            </GridItem>
        </Grid >
    )
}

export default Home