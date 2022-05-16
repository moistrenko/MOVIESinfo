import { AnyAction } from "redux";
import { IMoviesList } from "./interface";

const inititalState = {
	list: []
};

const moviesReducer = (state: IMoviesList = inititalState, action: AnyAction) => {
	switch (action.type) {
		case "movies/setMovies":
			return { ...state, list: [ ...action.payload] };
		default:
			return state;
	}
};

export default moviesReducer;
