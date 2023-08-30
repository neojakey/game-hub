import { Box, Flex, Grid, GridItem, Heading, Spinner, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import CriticScore from '../components/CriticScore';
import ExpandableText from '../components/ExpandableText';
import GameAttribute from '../components/GameAttribute';
import GameAttributes from '../components/GameAttributes';
import useGame from '../hooks/useGame';

const GameDetailPage = () => {
    const { slug } = useParams();
    const { data: game, error, isLoading } = useGame(slug!);

    if (error) throw error;

    if (isLoading) return <Spinner />;

    return (
        <>
            <Heading>{game?.name}</Heading>
            <ExpandableText>{game?.description_raw}</ExpandableText>
            <GameAttributes game={game} />
        </>
    )
}

export default GameDetailPage