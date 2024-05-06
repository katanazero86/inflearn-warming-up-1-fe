import {useEffect, useState} from "react";
import {useNavigate, useParams, useLocation} from "react-router-dom";
import styles from './searchMovie.module.css';
import {repositories} from "../../apis";
import {MovieDetail, TvDetail} from "../../@types/tmdb.types.ts";


export default function SearchMovie() {
    const navigate = useNavigate();
    const location = useLocation();
    const {id} = useParams();
    const [detail, setDetail] = useState<MovieDetail | TvDetail>();

    useEffect(() => {
        if (id === undefined) {
            navigate(-1);
        } else {
            if (location.state === 'movie') {
                findMovieDetailById();
            } else {
                findTvDetailById();
            }
        }

    }, []);

    const findMovieDetailById = async () => {
        try {
            const data = await repositories.tmdbApi.findMovieDetailById(+id!);
            setDetail(data);
        } catch (e) {
            console.error(e);
        }
    };

    const findTvDetailById = async () => {
        try {
            const data = await repositories.tmdbApi.findTvDetailById(+id!);
            setDetail(data);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <>
            <main className={styles.searchMovieContainer}>
                {detail && <img src={`https://image.tmdb.org/t/p/original/${detail.backdrop_path}`}/>}
            </main>
        </>
    )
}