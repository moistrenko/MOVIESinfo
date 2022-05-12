import React from "react";
import { NavLink } from "react-router-dom";

import { routeMain as routeMovieCategoryDetailPage } from "pages/MovieCategoryDetailPage";

import { IMovies } from "interface/IMovies";

import noImage from "assets/img/no-image.jpeg";
import "./style.sass";

interface IMoviesItemParams {
	item: IMovies;
}

const MovieItem: React.FC<IMoviesItemParams> = ({ item }) => {
	const imgUrl = item.show.image ? item.show.image.medium : noImage;
	const year = new Date(item.show.premiered).getFullYear();
	const genres = item.show.genres.join(', ');

	return (
		<NavLink className='movies-item item' to={routeMovieCategoryDetailPage(item.show.id)}>
			<div className='item__img-wrapper'>
				<img className='item__img' src={imgUrl} alt='Обложка фильма' />
			</div>
			<div className='item__description-group'>
				<div className='item__title-group'>
					<h3 className='item__title'>{item.show.name}</h3>
				</div>
				<div className='item__country'>
					<span>{year} </span>
					{item.show.network && <span>({item.show.network.country.name})</span>}
				</div>
				<div className='item__genre'>
					<p>{genres}</p>
				</div>
			</div>
		</NavLink>
	);
};

export default MovieItem;
