import {
    Button,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Spinner,
} from '@chakra-ui/react';
import usePlatforms from '../hooks/usePlatforms';
import { BsChevronDown } from 'react-icons/bs';

const PlatformSelector = () => {
    const { data, error, isLoading } = usePlatforms();

    if (error) return null;

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                {isLoading ? <Spinner /> : 'Select Platform'}
            </MenuButton>
            <MenuList placeholder="Select option">
                {data.map((platform) => (
                    <MenuItem key={platform.id}>{platform.name}</MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default PlatformSelector;
