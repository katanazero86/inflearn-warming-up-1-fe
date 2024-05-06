import {MouseEvent} from "react";
import {createPortal} from 'react-dom';
import styles from './Modal.module.css';

const portalElement = document.getElementById('portal');

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    average: number;
    overview: string;
    posterUrl: string;
    releaseDate: string;
}

export default function Modal({isOpen, onClose, title, average, overview, posterUrl, releaseDate}: ModalProps) {

    const handleClick = (e: MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <>
            {createPortal(
                <>
                    <div className={`${styles.modalContainer} ${isOpen && styles.active}`} onClick={handleClick}>
                        <div className={styles.modalBody}>
                            <img src={`https://image.tmdb.org/t/p/w500${posterUrl}`} loading='lazy'/>
                            <div className={styles.infoContainer}>
                                <p>
                                    {releaseDate}
                                </p>
                                <h2>
                                    {title}
                                </h2>
                                <p>
                                    평점: {average}
                                </p>
                                <br/>
                                <p>
                                    {overview}
                                </p>
                            </div>
                        </div>
                    </div>
                </>,
                portalElement!
            )}
        </>
    )
}