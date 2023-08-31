import { Box, GridItem, Heading } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
    title: string;
    children: ReactNode | ReactNode[];
}

const GameAttribute = ({ title, children }: Props) => {
    return (
        <GridItem>
            <Heading
                as='h6'
                size='sm'
                color='gray.500'
            >
                {title}
            </Heading>
            <Box>
                {children}
            </Box>
        </GridItem>
    )
}

export default GameAttribute