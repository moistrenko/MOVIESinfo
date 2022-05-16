import React from "react";
import { NavLink } from "react-router-dom";

import { routeMain as routeMovieCategoryDetailPage } from "pages/MovieCategoryDetailPage";

import { IItemMovies } from "interface/IItemMovies";

import noImage from "assets/img/no-image.jpeg";
import "./style.sass";

interface IMoviesItemParams {
	item: IItemMovies;
}

const MovieItem: React.FC<IMoviesItemParams> = ({ item }) => {
	const imgUrl = item.image ? item.image.medium : noImage;
	const year = new Date(item.premiered).getFullYear();
	const genres = item.genres.join(', ');

	return (
		<NavLink className='movies-item item' to={routeMovieCategoryDetailPage(item.id)}>
			<div className='item__img-wrapper'>
				<img className='item__img' src={imgUrl} alt='Обложка фильма' />
			</div>
			<div className='item__description-group'>
				<div className='item__title-group'>
					<h3 className='item__title'>{item.name}</h3>
				</div>
				<div className='item__country'>
					<span>{year} </span>
					{item.network && <span>({item.network.country.name})</span>}
				</div>
				<div className='item__genre'>
					<p>{genres}</p>
				</div>
			</div>
		</NavLink>
	);
};

export default MovieItem;
