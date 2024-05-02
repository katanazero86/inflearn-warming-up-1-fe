import styles from './FaQ.module.css';
import Accordion from "../Accordion/Accordion.tsx";


export default function FaQ() {
    return (
        <section className={styles.faqContainer}>
            <h2>
                자주 묻는 질문
            </h2>
            <Accordion title='디즈니+는 무엇인가요?'/>
            <Accordion title='디즈니+에서 어떤 콘텐츠를 시청할 수 있나요?'/>
            <Accordion title='디즈니+를 어디에서 시청할 수 있나요?'/>
            <Accordion title='디즈니+를 얼마에 이용할 수 있나요??'/>
        </section>
    )
}