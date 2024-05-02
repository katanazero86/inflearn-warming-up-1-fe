import {useState} from "react";
import styles from './Accordion.module.css';


interface AccordionProps {
    title: string;
}

export default function Accordion({title} : AccordionProps) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleIsOpen = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className={styles.accordionContainer}>
            <div className={styles.header} onClick={toggleIsOpen}>
                <h3>{title}</h3>
                {isOpen ? <span className={styles.minus}></span>  : <span className={styles.plus}></span>}
            </div>
            <div className={`${styles.body} ${isOpen && styles.active}`}>
                <p>
                    디즈니+는 디즈니, 픽사, 마블, 스타워즈, 내셔널지오그래픽, Star의 콘텐츠를 모두 즐길 수 있는 곳입니다. 최신 공개작부터 시대를 초월한 명작과 독점 오리지널에 이르기까지 다양하고 풍성한 콘텐츠를 광고 없이 스트리밍할 수 있습니다.
                </p>
            </div>
        </div>
    )
}