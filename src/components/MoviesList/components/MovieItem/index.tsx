import React from 'react';
import { NavLink } from "react-router-dom";

import { routeMain as routeMovieCategoryDetailPage } from "pages/MovieCategoryDetailPage";

import { IMovies } from 'interface/IMovies';

import './style.sass'

interface IMoviesItemParams {
	item: IMovies
}

const MovieItem: React.FC<IMoviesItemParams> = ({item}) => {
	return (
		<NavLink className='movies-Item'  to={routeMovieCategoryDetailPage(item.show.id)}>
			{item.show.name}
		</NavLink>
	)
}

export default MovieItem