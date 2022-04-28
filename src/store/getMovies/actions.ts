import { Dispatch } from "react";
import {getMovies} from 'services/getMovies'

export const setMoviesAction = () => {
	return {
		type: "movies/setMovies",
		payload: '123',
	}
}