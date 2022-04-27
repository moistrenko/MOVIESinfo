import React from "react";

import logo from "assets/img/logo.png";

import "./style.sass";

function Logo() {
	return (
		<div className='logo'>
			<img className='logo__img' src={logo} alt='logo' />
		</div>
	);
}

export default Logo;
