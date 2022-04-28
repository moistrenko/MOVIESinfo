import React from "react";
import { NavLink } from "react-router-dom";

import { routeMain as routerMainPage } from "pages/MainPage";
import { routeMain as routerCategoryPage } from "pages/MovieCategoryPage";
import { routeMain as routerAboutPage } from "pages/AboutPage";
import { routeMain as routerSearchPage } from "pages/SearchPage";

import Logo from "components/Logo";

import "./style.sass";

function Header() {
	return (
		<header className='header wrapper'>
			<div className='header__wrapper'>
				<NavLink to={routerMainPage()}>
					<Logo />
				</NavLink>

				<nav>
					<NavLink className='header__link' to={routerMainPage()}>
						Главная
					</NavLink>
					<NavLink className='header__link' to={routerCategoryPage()}>
						Фильмы по категории
					</NavLink>
					<NavLink className='header__link' to={routerAboutPage()}>
						О нас
					</NavLink>
					<NavLink className='header__link' to={routerSearchPage()}>
						Поиск
					</NavLink>
				</nav>
			</div>
		</header>
	);
}

export default Header;
