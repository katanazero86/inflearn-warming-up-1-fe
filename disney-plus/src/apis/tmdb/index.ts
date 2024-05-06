import {Axios, AxiosInstance} from "axios";
import {MovieDetail, MovieList, MovieMultiList, TvDetail} from "../../@types/tmdb.types.ts";
import {TMDB_API_KEY} from "../../constants/config.ts";

export const tmdbApi = (axiosInstance: AxiosInstance, _: Axios) => ({
    async findNowPlaying() {
        try {
            const queryParams = new URLSearchParams({
                api_key: TMDB_API_KEY
            });
            const res = await axiosInstance.get<MovieList>(`/movie/now_playing?language=ko-KR&${queryParams.toString()}`);
            return res.data;
        } catch (e) {
            console.error(e);
            throw e;
        }
    },
    async findMovieDetailById(targetId: number) {
        try {
            const queryParams = new URLSearchParams({
                api_key: TMDB_API_KEY,
                language: 'ko-KR',
                append_to_response: 'videos,images'
            });
            const res = await axiosInstance.get<MovieDetail>(`/movie/${targetId}?${queryParams.toString()}`);
            return res.data;
        } catch (e) {
            console.error(e);
            throw e;
        }
    },
    async findTvDetailById(targetId: number) {
        try {
            const queryParams = new URLSearchParams({
                api_key: TMDB_API_KEY,
                language: 'ko-KR',
                append_to_response: 'videos,images'
            });
            const res = await axiosInstance.get<TvDetail>(`/tv/${targetId}?${queryParams.toString()}`);
            return res.data;
        } catch (e) {
            console.error(e);
            throw e;
        }
    },
    async findMoviesPopular() {
        try {
            const queryParams = new URLSearchParams({
                api_key: TMDB_API_KEY,
                language: 'ko-KR',
                page: '1'
            });
            const res = await axiosInstance.get<MovieList>(`/movie/popular?${queryParams.toString()}`);
            return res.data;
        } catch (e) {
            console.error(e);
            throw e;
        }
    },
    async findMoviesTopRated() {
        try {
            const queryParams = new URLSearchParams({
                api_key: TMDB_API_KEY,
                language: 'ko-KR',
                page: '1'
            });
            const res = await axiosInstance.get<MovieList>(`/movie/top_rated?${queryParams.toString()}`);
            return res.data;
        } catch (e) {
            console.error(e);
            throw e;
        }
    },
    async findMoviesByDiscoverGenre(targetGenreId: number) {
        try {
            const queryParams = new URLSearchParams({
                api_key: TMDB_API_KEY,
                language: 'ko-KR',
                page: '1',
                with_genres: `${targetGenreId}`,
            });
            const res = await axiosInstance.get<MovieList>(`/discover/movie?${queryParams.toString()}`);
            return res.data;
        } catch (e) {
            console.error(e);
            throw e;
        }
    },
    async findMoviesMulti(targetQuery: string) {
        try {
            const queryParams = new URLSearchParams({
                api_key: TMDB_API_KEY,
                language: 'ko-KR',
                include_adult: 'true',
                page: '1',
                query: targetQuery,
            });
            const res = await axiosInstance.get<MovieMultiList>(`/search/multi?${queryParams.toString()}`);
            return res.data;
        } catch (e) {
            console.error(e);
            throw e;
        }
    }
});