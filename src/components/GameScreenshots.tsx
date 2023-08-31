import { Flex, Image, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import useScreenshots from '../hooks/useScreenshots'

interface Props {
    gameId: number
}

const GameScreenshots = ({gameId}: Props) => {
    const { data: screenshots, error, isLoading } = useScreenshots(gameId)
    console.log(screenshots);
    

    if (isLoading) return null;

    if (error) throw error;

    return (
        <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={2}
        >
            { screenshots?.results.map(s => 
                <Image key={s.id} src={s.image}/>
            )}
        </SimpleGrid>
    )
}

export default GameScreenshots;