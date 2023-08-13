import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from "react-router-dom";
import { IconButton, Grid, GridItem, Text, Flex, useToast } from '@chakra-ui/react';
import { IoArrowBackSharp } from 'react-icons/io5'
import { AxiosInstance } from '../config/AxiosInstance';
import InputComment from '../components/InputComment';
import Product from '../components/Product'; 4
import ReactPlayer from 'react-player/youtube'


const VideoDetails = () => {
    const [product, setProduct] = useState([])
    const [comments, setComments] = useState([])
    const [videoUrl, setVideoUrl] = useState('')
    const [formData, setFormData] = useState({
        username: "",
        comment: "",
    });
    let history = useHistory();
    let { id } = useParams();
    const toast = useToast()


    const handleButtonBack = () => {
        history.push('/')

    }

    useEffect(() => {
        AxiosInstance.get(`/product/${id}`)
            .then((response) => {
                setProduct(response.data.products)
            })
    }, [])

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = async () => {
        const dataSubmit = {
            ...formData,
            videoId: id,
        };

        await AxiosInstance.post('/comment', dataSubmit)
            .then((response) => {
                toast({
                    title: `${response.data.status} add comment`,
                    status: 'success',
                    position: 'top-right',
                    isClosable: true,
                })
            })
            .catch((error) => {
                toast({
                    title: 'Please Input Form',
                    status: 'error',
                    position: 'top-right',
                    isClosable: true,
                })
            })
        setFormData({
            username: '',
            comment: ''
        })
    };
    useEffect(() => {
        AxiosInstance.get(`/comment/${id}`)
            .then((response) => {
                setComments(response.data.comment)
            })
    }, [handleSubmit])

    useEffect(() => {
        AxiosInstance.get('/video')
            .then((response) => {
                const filteredVideo = response.data.list_videos.filter(item => item._id === id);
                setVideoUrl(filteredVideo[0].video_url)
            })
    }, [])

    return (
        <Grid
            templateAreas={`"header header"
                  "main nav"
                  "footer nav"`}
            gridTemplateRows={'8vh 1fr 20vh'}
            gridTemplateColumns={'1fr 20vw'}
            h='100vh'
            gap='1'
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

            <GridItem px={2} area={'nav'} >
                <Flex direction='column' justifyContent='flex-end' h='100%' py={3}>
                    {comments.map(comment => (
                        <Text key={comment._id} color='skyblue' >
                            {comment.username}
                            <span style={{ fontWeight: '400', fontSize: '14px', color: 'white' }}> : {comment.comment}
                            </span>
                        </Text>
                    ))}
                    <InputComment
                        handleSubmit={handleSubmit}
                        handleInputChange={handleInputChange}
                        formData={formData}
                    />
                </Flex>
            </GridItem>

            <GridItem
                bg='rgba(255, 255, 255, 0.4)'
                area={'main'}
                borderRadius='5px'
                display='flex'
                justifyContent='center'
                alignItems='center'
            >
                <ReactPlayer url={videoUrl} width='100%' height='100%' controls playing muted />
            </GridItem>

            <GridItem mx='1' mb='1' area={'footer'} display='flex' gap={1}>
                {product.map(item =>
                    (<Product item={item} key={item._id} />)
                )}
            </GridItem>
        </Grid >
    )
}

export default VideoDetails