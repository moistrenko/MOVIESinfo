import React from 'react';
import routeMain from "./routes";

import {getMoviesList} from 'api/movies'

import MainTitle from 'components/MainTitle'

import './style.sass'

const MainPage = () => {
	getMoviesList().then(response => console.log( response))
	
	

	return (
		<div className="main-page">
			<MainTitle title='MOVIESinfo' subtitle='Самый популярный портал о фильмах '/>
		</div>
	)
}

export {routeMain}
export default MainPage