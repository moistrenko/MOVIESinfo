import React from "react";
import { NavLink } from "react-router-dom";

import { routeMain as routerMainPage } from "pages/MainPage";
import Logo from "components/Logo";

import "./style.sass";

function Footer() {
	return (
		<footer className='footer wrapper'>
			<div className='footer__wrapper'>
				<NavLink to={routerMainPage()}>
					<Logo />
				</NavLink>
				<h2 className='footer__title'>Дипломный проект</h2>
				<div className='author'>
					<div className='author__title'>Made by</div>
					<div className='author__name'>Анатолий Мойстренко</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
