import { getMovies } from "utils/getMovies";
import { URLS } from "constans/urls";

export const getMoviesList = () => {
	return getMovies("get", `${URLS.MOVIES}?q=girls`);
};

export const getCategoryList = (category: string) => {
	return getMovies("get", `${URLS.CATEGORY}?q=${category}`);
};