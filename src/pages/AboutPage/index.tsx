import React from "react";
import routeMain from "./routes";

import img from "assets/img/about-img.jpg";

import "./style.sass";

const AboutPage = () => {
	return (
		<div className='about-page content-wrapper'>
			<div className='about-page__image-wrapper'>
				<img className='about-page__image' src={img} alt='О нас' />
			</div>
			<div className='about-page__content'>
				<h3 className='about-page__title'>MOVIESinfo</h3>
				<p className='about-page__description'>
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
					massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec
					quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
					Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
					imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
					Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
					porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis,
					feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.{" "}
				</p>
			</div>
		</div>
	);
};

export { routeMain };
export default AboutPage;
