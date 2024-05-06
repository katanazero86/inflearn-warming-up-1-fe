import {useEffect, useState} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";
import styles from './search.module.css';
import {repositories} from "../../apis";
import {MovieMultiResults} from "../../@types/tmdb.types.ts";


export default function Search() {

    const navigate = useNavigate();
    const [searchParams, _] = useSearchParams();
    const q = searchParams.get('q');

    const [contents, setContents] = useState<MovieMultiResults[]>([]);

    useEffect(() => {
        findMoviesMulti();
    }, [q]);

    const findMoviesMulti = async () => {
        try {
            const data = await repositories.tmdbApi.findMoviesMulti(q ?? '');
            setContents(data.results);
        } catch (e) {
            console.error(e);
        }
    };

    const handleClick = (targetItem: MovieMultiResults) => () => {
        navigate(`/search/${targetItem.id}`, {
            state: targetItem.media_type
        });
    };

    console.log(contents);

    return (
        <>
            <main className={styles.searchContainer}>
                {contents.length > 0 &&
                    contents.map((item, _) => (
                        <div key={item.id} className={styles.searchItem} onClick={handleClick(item)}>
                            <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}/>
                        </div>
                    ))
                }
                {contents.length === 0 && (
                    <p style={{textAlign: "center", width: "100%", fontSize: 24}}>
                        검색된 결과가 존재하지 않습니다 :)
                    </p>
                )}
            </main>
        </>
    )
}