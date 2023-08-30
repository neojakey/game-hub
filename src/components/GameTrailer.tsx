import useTrailers from '../hooks/useTrailers'

interface Props {
    gameId: number
}

const GameTrailer = ({ gameId }: Props) => {
    const { data: trailer, error, isLoading } = useTrailers(gameId)

    if (isLoading) return null;

    if (error) throw error;

    const firstVideo = trailer?.results[0];
    return firstVideo ? (
        <video
            src={firstVideo.data[480]}
            poster={firstVideo.preview}
            controls
        />
    ) : null;
}

export default GameTrailer