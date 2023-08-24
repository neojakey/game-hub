import usePlatforms from "./usePlatforms";

const usePlatformLookup = (platformId?: number) => {
    const { data: platforms } = usePlatforms();
    return platforms?.results.find(p => p.id === platformId);
}

export default usePlatformLookup;