import axios, {AxiosResponse, AxiosRequestConfig} from 'axios';

export const getMovies = (id: string = 'girls'): Promise<AxiosResponse> => {
	const options: AxiosRequestConfig = {
		method: 'GET',
		url: 'https://api.tvmaze.com/search/shows',
		params: {q: id}
	  };

	return axios.request(options)
}