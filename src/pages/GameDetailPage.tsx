import { Heading, Spinner, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import ExpandableText from '../components/ExpandableText';
import useGame from '../hooks/useGame';

const GameDetailPage = () => {
    const { slug } = useParams();
    const { data: game, error, isLoading } = useGame(slug!);

    if (error) throw error;

    //console.log(game);
    

    //if (game == undefined) throw new Error('Game not found');

    if (isLoading) return <Spinner />;

    return (
        <>
            <Heading>{game?.name}</Heading>
            <ExpandableText>{game?.description_raw}</ExpandableText>
        </>
    )
}

export default GameDetailPage