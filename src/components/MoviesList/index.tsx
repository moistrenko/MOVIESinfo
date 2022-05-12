import React from "react";

import { IMovies } from "interface/IMovies";

import MovieItem from "./components/MovieItem";

import "./style.sass";

interface IMoviesListParams {
	list: IMovies[];
}

const MoviesList: React.FC<IMoviesListParams> = ({ list }) => {
	return (
		<div className='list-wrapper'>
			<ul className='movies-list'>
				{list.slice(0, 8).map((movies: IMovies) => (
					<MovieItem key={movies.show.id} item={movies} />
				))}
			</ul>
		</div>
	);
};

export default MoviesList;
