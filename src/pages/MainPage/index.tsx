import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import routeMain from "./routes";

import { getMoviesList } from "api/movies";
import { selectList } from "store/movies/selector";
import { setMoviesAction } from "store/movies/actions";

import MainTitle from "components/MainTitle";
import MoviesList from "components/MoviesList";

import "./style.sass";

const MainPage = () => {
	const dispatch = useDispatch();
	const moviesList = useSelector(selectList);

	useEffect(() => {
		getMoviesList().then((response) => dispatch(setMoviesAction(response) as any));
	}, [dispatch]);

	return (
		<div className='main-page'>
			<MainTitle title='MOVIESinfo' subtitle='Самый популярный портал о фильмах ' />
			<div className='content-wrapper'>
				<MoviesList list={moviesList.slice(0, 8)} />
			</div>
		</div>
	);
};

export { routeMain };
export default MainPage;
