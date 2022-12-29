export interface IAction {
  payload: any;
  type?: string;
}
export interface IData {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: 315162;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
export interface IStateMovies {
  moviesList: IData[];
  movies_Now_Playing: IData[];
  movies_Top_Rated: IData[];
  movies_Search: {}[];
  movies_Details: {}[];
  movies_Credits: {}[];
  video_Trailer: {}[];
  movies_Similar: IData[];
  movies_Popular: IData[];
  loading: true;
  querySearch: string;
  total_page: number;
}

interface IUser {
  email: string;
  id: number;
  name: string;
  password: String;
  refreshToken: string;
}
export interface IStateAuth {
  user: IUser;
  accessToken: null;
}
export interface IState {
  auth: IStateAuth;
  movies: IStateMovies;
}
