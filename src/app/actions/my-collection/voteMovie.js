import VOTE_MOVIE from '../../action-types/my-collection/voteMovie'

const voteMovieAction = (id) => (
    {
        type: VOTE_MOVIE,
        payload: { id }
    }
)

export default voteMovieAction