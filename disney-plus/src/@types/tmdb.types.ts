export interface MovieResults {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

// /movie/now_playing
// /movie/popular
// /movie/top_rated
// /discover/movie
export interface MovieList {
    dates?: {
        maximum: string,
        minimum: string
    };
    page: number;
    total_pages: number;
    total_results: number;
    results: MovieResults[];
}

export interface MovieMultiResults {
    adult: boolean;
    backdrop_path: string;
    id: number;
    title: string;
    original_language: string;
    original_title: string;
    overview: string;
    poster_path: string;
    media_type: string;
    genre_ids: number[];
    popularity: number;
    release_date: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

// /search/multi
export interface MovieMultiList {
    page: number;
    total_pages: number;
    total_results: number;
    results: MovieMultiResults[];
}

// /movie/{movie_id}
export interface MovieDetail {
    adult: boolean
    backdrop_path: string;
    belongs_to_collection: null,
    budget: number;
    genres: { id: number, name: string }[];
    homepage: string;
    id: number;
    imdb_id: string;
    origin_country: string[];
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: {
        id: number;
        logo_path: string;
        name: string;
        origin_country: string;
    }[];
    production_countries: {
        iso_3166_1: string;
        name: string;
    }[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: {
        english_name: string;
        iso_639_1: string;
        name: string;
    }[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    videos: {
        results: any[];
    };
    images: {
        backdrops: any[];
        logos: any[];
        posters: any[];
    };
}

// /tv/{series_id}
export interface TvDetail {
    adult: boolean;
    backdrop_path: string;
    created_by: {
        id: number;
        credit_id: string
        name: string
        gender: number;
        profile_path: string
    }[];
    episode_run_time: number[]
    first_air_date: string;
    genres: { id: number; name: string }[];
    homepage: string;
    id: number;
    in_production: boolean;
    languages: string[];
    last_air_date: string;
    last_episode_to_air: {
        id: number;
        name: string;
        overview: string;
        vote_average: number;
        vote_count: number;
        air_date: string;
        episode_number: number;
        production_code: string;
        runtime: number;
        season_number: number;
        show_id: number;
        still_path: string;
    }[];
    name: string;
    next_episode_to_air: string;
    networks: {
        id: number;
        logo_path: string;
        name: string;
        origin_country: string;
    }[];
    number_of_episodes: number;
    number_of_seasons: number;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: {
        id: number;
        logo_path: string;
        name: string;
        origin_country: string;
    }[];
    production_countries: {
        iso_3166_1: string;
        name: string;
    }[];
    seasons: {
        air_date: string;
        episode_count: number;
        id: number;
        name: string;
        overview: string;
        poster_path: string;
        season_number: number;
        vote_average: number;
    }[];
    spoken_languages: {
        english_name: string;
        iso_639_1: string;
        name: string;
    }[];
    status: string;
    tagline: string;
    type: string;
    vote_average: number;
    vote_count: number;
}