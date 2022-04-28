import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import MainPage, {routeMain as routeMainPage} from "pages/MainPage";
import AboutPage, {routeMain as routeAboutPage} from "pages/AboutPage";
import MoveCategoryPage, { routeMain as routeCategoryPage } from "pages/MovieCategoryPage";
import SearchPage, {routeMain as routeSearchPage} from 'pages/SearchPage'
import MovieCategoryDetailPage, {routeMain as routeMovieCategoryDetailPage} from "pages/MovieCategoryDetailPage"
import Header from "components/Header";
import Footer from "components/Footer";

import "./style.sass";

function AppContent() {
	return (
		<div className="content">
			<Header />
			<main className='main'> 
				<Routes>
					<Route path={routeMainPage()} element={<MainPage/>}/>
					<Route path={routeCategoryPage()} element={<MoveCategoryPage/>}/>
					<Route path={routeAboutPage()} element={<AboutPage/>}/>
					<Route path={routeSearchPage()} element={<SearchPage/>}/> 
					<Route path={routeMovieCategoryDetailPage()} element={<MovieCategoryDetailPage/>}/> 
					<Route path="*" element={<Navigate to={routeMainPage()} />}/>
				</Routes>
			</main>
			<Footer />
		</div>
	);
}

export default AppContent;
