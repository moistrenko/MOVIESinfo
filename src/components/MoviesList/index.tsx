import React from "react";

import { IMovies } from "interface/IMovies";
import { IItemMovies } from "interface/IItemMovies";

import MovieItem from "./components/MovieItem";

import "./style.sass";

interface IMoviesListParams {
	// list : [{show: IItemMovies[]}];
	list: IMovies[];
}

const MoviesList: React.FC<IMoviesListParams> = ({ list }) => {
	return (
		<div className='list-wrapper'>
			<ul className='movies-list'>
				{list.map((movies) => {
					const id = movies.show.id
					return <MovieItem key={id} item={movies.show} />
})}
			</ul>
		</div>
	);
};

export default MoviesList;
