import { IMoviesList } from "./interface";

export const selectList = (state: {moviesReducer: IMoviesList}): IMoviesList['list'] => state.moviesReducer.list