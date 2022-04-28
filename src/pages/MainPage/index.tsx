import React from 'react';
import routeMain from "./routes";

import MainTitle from 'components/MainTitle'

import './style.sass'

const MainPage = () => {
	return (
		<div className="main-page">
			<MainTitle title='MOVIESinfo' subtitle='Самый популярный портал о фильмах '/>
		</div>
	)
}

export {routeMain}
export default MainPage