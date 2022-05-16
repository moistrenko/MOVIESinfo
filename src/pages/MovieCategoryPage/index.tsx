import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import routeMain from './routes'

import { getMoviesList, getCategoryList } from "api/movies";
import { selectList } from "store/movies/selector";
import { setMoviesAction } from "store/movies/actions";

import MoviesList from "components/MoviesList";

import './style.sass'

const MoveCategoryPage = () => {
	const [category, setCategory] = useState('horror')

	const dispatch = useDispatch();
	const moviesList = useSelector(selectList);

	const selectHandle = (e: any) => {
		setCategory(e.target.value)

	}

	useEffect(() => {
		getMoviesList().then((response) => dispatch(setMoviesAction(response) as any));
		getCategoryList(category).then((response) => console.log(response));
	}, [dispatch, category]);


	return (
		<div className='category-page content-wrapper'>
			<div className="select">
				<div className="select__title">Выбранная категория: </div>
				<select name="select-genre" id="select-genre" onChange={(e)=> {selectHandle(e)}}>
					<option value="Horror">Horror</option>
					<option value="girls">girls</option>
					<option value="sport">sport</option>
					<option value="dance">dance</option>
					<option value="football">football</option>
				</select>
			</div>
			<MoviesList list={moviesList}/>
		</div>
	)
}

export {routeMain}
export default MoveCategoryPage;