import {useEffect, useState} from "react";
import styles from './Contents.module.css';
import Slider from "react-slick";
import Modal from "../../components/Modal/Modal.tsx";
import {repositories} from "../../apis";
import {MovieDetail, MovieList, MovieResults} from "../../@types/tmdb.types.ts";


interface ItemRowProps {
    title: string;
    fetchUri: string;
    genreId?: number;
}

const ItemRow = ({title, fetchUri, genreId}: ItemRowProps) => {
    const SETTINGS = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
    };

    const [movies, setMovies] = useState<MovieResults[]>([]);

    useEffect(() => {
        findTargetMovies();
    }, []);

    const findTargetMovies = async () => {
        let data: MovieList;
        try {
            switch (fetchUri) {
                case '/movie/popular' :
                    data = await repositories.tmdbApi.findMoviesPopular();
                    break;
                case '/movie/top_rated':
                    data = await repositories.tmdbApi.findMoviesTopRated();
                    break;
                case '/discover/movie':
                    if (genreId) data = await repositories.tmdbApi.findMoviesByDiscoverGenre(genreId);
                    break;
            }
            setMovies(data!.results);
        } catch (e) {
            console.error(e);
        }
    };

    const [isOpen, setIsOpen] = useState(false);
    const [targetMovie, setTargetMovie] = useState({
        title: '',
        average: 0,
        overview: '',
        posterUrl: '',
        releaseDate: ''
    });
    const handleMovieItemClick = (targetItem: MovieResults) => () => {
        setTargetMovie({
            title: targetItem.title,
            average: targetItem.vote_average,
            overview: targetItem.overview,
            posterUrl: targetItem.poster_path,
            releaseDate: targetItem.release_date,
        });
        setIsOpen(true);
    };
    const handleClose = () => {
        setIsOpen(false);
        setTargetMovie({
            title: '',
            average: 0,
            overview: '',
            posterUrl: '',
            releaseDate: '',
        });
    };

    return (
        <div className={styles.movieRowContainer}>
            <h2 className={styles.movieTitle}>{title}</h2>
            {movies.length > 0 && (
                <div className="slider-container">
                    <Slider {...SETTINGS}>
                        {movies.map((item, _) => (
                            <div key={item.id}>
                                <div className={styles.movieItemImageContainer} onClick={handleMovieItemClick(item)}>
                                    <img src={`https://image.tmdb.org/t/p/w400/${item.backdrop_path}`} height={600}
                                         className={styles.movieItemImage}/>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            )}
            <Modal isOpen={isOpen} onClose={handleClose} {...targetMovie} />
        </div>

    );
}


export default function Contents() {

    const [nowMovie, setNowMovie] = useState<MovieDetail | null>(null);

    useEffect(() => {
        initNowPlaying();
    }, []);

    const initNowPlaying = async () => {
        try {
            const data = await repositories.tmdbApi.findNowPlaying();
            const nowPlayingMovieId = data.results[Math.floor(Math.random() * data.results.length)].id;

            const targetMovie = await repositories.tmdbApi.findMovieDetailById(nowPlayingMovieId);
            console.log(targetMovie);
            setNowMovie(targetMovie);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <>
            <main className={styles.contentsContainer}>
                {nowMovie !== null &&
                    <section className={styles.nowPlaying}
                             style={{
                                 backgroundImage: `url('https://image.tmdb.org/t/p/original/${nowMovie.backdrop_path}')`
                             }}
                    >
                        <div className={styles.nowPlayingInfo}>
                            <h2 className={styles.nowPlayingTitle}>
                                {nowMovie.title}
                            </h2>
                            <button className={styles.nowPlayingBtn}>
                                Play
                            </button>
                            <p className={styles.nowPlayingDescription}>
                                {nowMovie.overview || 'Not Found overview'}
                            </p>
                        </div>
                    </section>
                }
                <section>
                    <ItemRow title='Trending Now' fetchUri='/movie/popular'/>
                    <ItemRow title='Top Rated' fetchUri='/movie/top_rated'/>
                    <ItemRow title='Animation' fetchUri='/discover/movie' genreId={16}/>
                    <ItemRow title='Comedy Movies' fetchUri='/discover/movie' genreId={35}/>
                </section>
            </main>
        </>
    )
}