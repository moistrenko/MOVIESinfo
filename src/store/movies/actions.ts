import {IMoviesList} from './interface'

export const setMoviesAction = (list: IMoviesList['list']) => {
	return {
		type: "movies/setMovies",
		payload: list,
	}
}