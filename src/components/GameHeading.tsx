import { Heading } from '@chakra-ui/react';
import useGenreLookup from '../hooks/useGenreLookup';
import usePlatformLookup from '../hooks/usePlatformLookup';
import useGameQueryStore from '../store';

const GameHeading = () => {
    const genreId = useGameQueryStore(s => s.gameQuery.genreId);
    const selectedGenre = useGenreLookup(genreId);

    const platformId = useGameQueryStore(s => s.gameQuery.platformId);
    const selectedPlatform = usePlatformLookup(platformId);

    const heading = `${selectedPlatform?.name || ''} ${selectedGenre?.name || ''} Games`;

    return (
        <Heading as='h1' marginY={5} fontSize='5xl'>{heading}</Heading>
    )
}

export default GameHeading