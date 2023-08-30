import { Heading, Spinner, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import useGame from '../hooks/useGame';

const GameDetailPage = () => {
    const { slug } = useParams();
    const { data: game, error, isLoading } = useGame(slug!);

    if (error) throw error;

    //if (game === undefined) throw new Error('Game not found');

    if (isLoading) return <Spinner />;

    return (
        <>
            <Heading>{game?.name}</Heading>
            <Text>{game?.description_raw}</Text>
        </>
    )
}

export default GameDetailPage