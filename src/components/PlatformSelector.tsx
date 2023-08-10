import {
    Button,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Spinner,
} from '@chakra-ui/react';
import usePlatforms, { Platform } from '../hooks/usePlatforms';
import { BsChevronDown } from 'react-icons/bs';

interface Props {
    onSelectPlatform: (platform: Platform | null) => void;
    selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
    const { data, error, isLoading } = usePlatforms();

    if (error) return null;

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                {isLoading ? (
                    <Spinner />
                ) : selectedPlatform?.name ? (
                    selectedPlatform.name
                ) : (
                    'All Platforms'
                )}
            </MenuButton>
            <MenuList>
                <MenuItem
                    onClick={() => {
                        return onSelectPlatform(null);
                    }}
                >
                    All Platforms
                </MenuItem>
                {data.map((platform) => (
                    <MenuItem
                        key={platform.id}
                        onClick={() => {
                            return onSelectPlatform(platform);
                        }}
                    >
                        {platform.name}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default PlatformSelector;
