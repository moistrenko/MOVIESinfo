import React from "react";

import {IMainTitle} from "./type";

import './style.sass'

const MainTitle = (title: IMainTitle) => {
	return (
		<div className="title-group">
			<h1 className="title">{title.title}</h1>
			<h2 className="subtitle">{title.subtitle}</h2>
		</div>
	)
}

export default MainTitle