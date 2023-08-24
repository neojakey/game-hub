import useGenres from "./useGenres";

const useGenreLookup = (genreId?: number) => {
    const { data: genres } = useGenres();
    return genres?.results.find(g => g.id === genreId);
}

export default useGenreLookup;