import { Grid, Text } from '@chakra-ui/react';
import { Game } from '../entities/Game';
import CriticScore from './CriticScore';
import GameAttribute from './GameAttribute';

interface Props {
    game: Game | undefined;
}

const GameAttributes = ({ game }: Props) => {
  return (
        <Grid
            templateRows='repeat(2, 1fr)'
            templateColumns='repeat(2, 1fr)'
            gap={4}
            paddingTop={5}
        >
            <GameAttribute title={'Platforms'}>
                { game?.parent_platforms.map(({ platform }) =>
                    <Text key={platform.id}>{platform.name}</Text>
                )}
            </GameAttribute>
            <GameAttribute title={'Metascore'}>
                <CriticScore score={game!.metacritic} />
            </GameAttribute>
            <GameAttribute title={'Genres'}>
                { game?.genres.map(genre =>
                    <Text key={genre.id}>{genre.name}</Text>
                )}
            </GameAttribute>
            <GameAttribute title={'Publishers'}>
                { game?.publishers.map(publisher =>
                    <Text key={publisher.id}>{publisher.name}</Text>
                )}
            </GameAttribute>
        </Grid>
    )
}

export default GameAttributes