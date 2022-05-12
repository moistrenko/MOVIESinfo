export interface IMovies {
	show: {
		id: number;
		genres: string[];
		image: {
			medium?: string;
			original?: string;
		} | null;
		name: string;
		network: {
			country: {
				name: string;
			};
		};
		premiered: string;
		rating: {
			average: number;
		}
		summary?: JSX.Element
	};
}
