import {useEffect, useState} from "react";
import styles from './index.module.css';
import Img from '/imgs/index/img.png';
import ResoibsuveImg from '/imgs/index/responisve/img.png';
import Img1 from '/imgs/index/img_1.png';
import ResoibsuveImg1 from '/imgs/index/responisve/img_1.png';
import Img2 from '/imgs/index/img_2.png';
import ResoibsuveImg2 from '/imgs/index/responisve/img_2.png';
import Img3 from '/imgs/index/img_3.png';
import ResoibsuveImg3 from '/imgs/index/responisve/img_3.png';
import Img4 from '/imgs/index/img_4.png';
import ResoibsuveImg4 from '/imgs/index/responisve/img_4.png';
import Img5 from '/imgs/index/img_5.png';
import ResoibsuveImg5 from '/imgs/index/responisve/img_5.png';
import DisneyplusLogo from '/imgs/index/disneyplus_logo.png';
import PopularImg from '/imgs/index/popular-content/img.png';
import PopularImg1 from '/imgs/index/popular-content/img_1.png';
import PopularImg2 from '/imgs/index/popular-content/img_2.png';
import PopularImg3 from '/imgs/index/popular-content/img_3.png';
import PopularImg4 from '/imgs/index/popular-content/img_4.png';
import PopularImg5 from '/imgs/index/popular-content/img_5.png';
import PopularImg6 from '/imgs/index/popular-content/img_6.png';
import PopularImg7 from '/imgs/index/popular-content/img_7.png';
import PopularImg8 from '/imgs/index/popular-content/img_8.png';
import BlockbusterImg from '/imgs/index/blockbuster/img.png';
import BlockbusterImg1 from '/imgs/index/blockbuster/img_1.png';
import BlockbusterImg2 from '/imgs/index/blockbuster/img_2.png';
import BlockbusterImg3 from '/imgs/index/blockbuster/img_3.png';
import BlockbusterImg4 from '/imgs/index/blockbuster/img_4.png';
import BlockbusterImg5 from '/imgs/index/blockbuster/img_5.png';
import BlockbusterImg6 from '/imgs/index/blockbuster/img_6.png';
import BlockbusterImg7 from '/imgs/index/blockbuster/img_7.png';
import BlockbusterImg8 from '/imgs/index/blockbuster/img_8.png';
import Taste from '/imgs/index/taste.png';
import Footer from "../components/Footer/Footer.tsx";
import Header from "../components/Header/Header.tsx";
import Play from "../components/icons/Play/Play.tsx";
import Pause from "../components/icons/Pause/Pause.tsx";
import FaQ from "../components/FaQ/FaQ.tsx";
import Check from "../components/icons/Check/Check.tsx";

let timer: number;
export default function Index() {

    const [activeImage, setActiveImage] = useState([
        true, false, false, false, false, false
    ]);

    const [isPlay, setIsPlay] = useState(true);

    const handleClick = (targetIndex: number) => () => {
        setActiveImage(activeImage.map((_, index) => {
            return index === targetIndex;
        }));
        setIsPlay(false);
    };

    const handlePlayAndPauseClick = () => {
        setIsPlay(!isPlay);
    };

    useEffect(() => {
        if (isPlay) {
            timer = setInterval(() => {
                const trueIndex = activeImage.findIndex(val => val);
                const targetIndex = trueIndex + 1 < activeImage.length ? trueIndex + 1 : 0;
                setActiveImage(
                    activeImage.map((val, index) => {
                        if (index === trueIndex) return !val;
                        if (index === targetIndex) return !val;
                        return val
                    })
                );

            }, 5000);
        } else {
            timer && clearInterval(timer);
        }
        return () => clearInterval(timer);
    }, [isPlay, activeImage]);

    return (
        <>
            <Header/>
            <main>
                <section className={styles.hero}>
                    <div className={styles.contentContainer}>
                        <img src={DisneyplusLogo} loading='lazy' alt='logo'/>
                        <h1>
                            이 모든 이야기가 여기에
                            <br/>
                            지금 스트리밍 중
                        </h1>
                        <ul className={styles.contentTwoColumns}>
                            <li className={styles.flexItem}>
                                <div>
                                    <p>
                                        <span className={styles.h3}>
                                            <b>디즈니+ 프리미엄</b>
                                        </span>
                                        <br/>
                                        <span className={styles.fine}>
                                            최대 4K UHD &amp; HDR 비디오
                                        </span>
                                        <br/>
                                        <span className={styles.fine}>
                                            최대 Dolby Atmos 오디오
                                        </span>
                                        <br/>
                                        <span className={styles.fine}>
                                            최대 4대 기기 동시 스트리밍
                                        </span>
                                    </p>
                                </div>
                                <div className={styles.flexItemFooter}>
                                    <a href='#' className={styles.linkPremium}>
                                        <span>월 ₩13,900</span>
                                    </a>
                                    <p>
                                        (부가세 포함)
                                    </p>
                                </div>
                            </li>
                            <li className={styles.flexItem}>
                                <div>
                                    <p>
                                        <span className={styles.h3}>
                                            <b>디즈니+ 스탠다드</b>
                                        </span>
                                        <br/>
                                        <span className={styles.fine}>
                                            최대 1080p Full HD 비디오
                                        </span>
                                        <br/>
                                        <span className={styles.fine}>
                                            최대 5.1 오디오
                                        </span>
                                        <br/>
                                        <span className={styles.fine}>
                                            최대 2대 기기 동시 스트리밍
                                        </span>
                                    </p>
                                </div>
                                <div className={styles.flexItemFooter}>
                                    <a href='#' className={styles.linkStandard}>
                                        <span>월 ₩9,900</span>
                                    </a>
                                    <p>
                                        (부가세 포함)
                                    </p>
                                </div>
                            </li>
                        </ul>
                        <p className={styles.info1}>
                            <span>
                                <a href="#" className={styles.link}>
                                    <span>디즈니+ 프리미엄 연간 멤버십</span>
                                </a>
                            </span>
                            <span>을 구독하고 최대 16% 할인*을 받으세요.</span>
                            <br/>
                            <span>연간 멤버십을 포함한 멤버십 </span>
                            <span>
                                <a href="#" className={styles.link}>
                                    <span>유형별 세부 정보</span>
                                </a>
                            </span>
                            <span>를 확인해 보세요.</span>
                        </p>
                        <p className={styles.info2}>
                            *월간 멤버십 12개월 구독료 대비 할인된 가격입니다. 추가 약관 적용.
                        </p>
                    </div>
                    <div className={styles.imageGallery}>
                        <div className={styles.controlContainer}>
                            <button
                                className={activeImage[0] ? `${styles.pagination} ${styles.paginationActive}` : styles.pagination}
                                onClick={handleClick(0)}></button>
                            <button
                                className={activeImage[1] ? `${styles.pagination} ${styles.paginationActive}` : styles.pagination}
                                onClick={handleClick(1)}></button>
                            <button
                                className={activeImage[2] ? `${styles.pagination} ${styles.paginationActive}` : styles.pagination}
                                onClick={handleClick(2)}></button>
                            <button
                                className={activeImage[3] ? `${styles.pagination} ${styles.paginationActive}` : styles.pagination}
                                onClick={handleClick(3)}></button>
                            <button
                                className={activeImage[4] ? `${styles.pagination} ${styles.paginationActive}` : styles.pagination}
                                onClick={handleClick(4)}></button>
                            <button
                                className={activeImage[5] ? `${styles.pagination} ${styles.paginationActive}` : styles.pagination}
                                onClick={handleClick(5)}></button>
                            <button className={styles.paginationBtn} onClick={handlePlayAndPauseClick}>
                                {isPlay ? <Pause/> : <Play/>}
                            </button>
                        </div>
                        <ul className={styles.galleryImagesContainer}>
                            <li className={activeImage[0] ? `${styles.galleryImageContainer} ${styles.galleryImageActive}` : styles.galleryImageContainer}>
                                <picture>
                                    <source media="(max-width: 768px)" srcSet={ResoibsuveImg}/>
                                    <source media="(min-width: 1024px)" srcSet={Img}/>
                                    <img src={Img} loading='lazy'/>
                                </picture>
                            </li>
                            <li className={activeImage[1] ? `${styles.galleryImageContainer} ${styles.galleryImageActive}` : styles.galleryImageContainer}>
                                <picture>
                                    <source media="(max-width: 768px)" srcSet={ResoibsuveImg1}/>
                                    <source media="(min-width: 1024px)" srcSet={Img1}/>
                                    <img src={Img1} loading='lazy'/>
                                </picture>
                            </li>
                            <li className={activeImage[2] ? `${styles.galleryImageContainer} ${styles.galleryImageActive}` : styles.galleryImageContainer}>
                                <picture>
                                    <source media="(max-width: 768px)" srcSet={ResoibsuveImg2}/>
                                    <source media="(min-width: 1024px)" srcSet={Img2}/>
                                    <img src={Img2} loading='lazy'/>
                                </picture>
                            </li>
                            <li className={activeImage[3] ? `${styles.galleryImageContainer} ${styles.galleryImageActive}` : styles.galleryImageContainer}>
                                <picture>
                                    <source media="(max-width: 768px)" srcSet={ResoibsuveImg3}/>
                                    <source media="(min-width: 1024px)" srcSet={Img3}/>
                                    <img src={Img3} loading='lazy'/>
                                </picture>
                            </li>
                            <li className={activeImage[4] ? `${styles.galleryImageContainer} ${styles.galleryImageActive}` : styles.galleryImageContainer}>
                                <picture>
                                    <source media="(max-width: 768px)" srcSet={ResoibsuveImg4}/>
                                    <source media="(min-width: 1024px)" srcSet={Img4}/>
                                    <img src={Img4} loading='lazy'/>
                                </picture>
                            </li>
                            <li className={activeImage[5] ? `${styles.galleryImageContainer} ${styles.galleryImageActive}` : styles.galleryImageContainer}>
                                <picture>
                                    <source media="(max-width: 768px)" srcSet={ResoibsuveImg5}/>
                                    <source media="(min-width: 1024px)" srcSet={Img5}/>
                                    <img src={Img5} loading='lazy'/>
                                </picture>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className={styles.popularContent}>
                    <h2>
                        인기 콘텐츠
                    </h2>
                    <ul className={`${styles.popularContentList} ${styles.gridList}`}>
                        <li className={`${styles.popularContentItem} ${styles.gridListItem}`}>
                            <img src={PopularImg}/>
                        </li>
                        <li className={`${styles.popularContentItem} ${styles.gridListItem}`}>
                            <img src={PopularImg1}/>
                        </li>
                        <li className={`${styles.popularContentItem} ${styles.gridListItem}`}>
                            <img src={PopularImg2}/>
                        </li>
                        <li className={`${styles.popularContentItem} ${styles.gridListItem}`}>
                            <img src={PopularImg3}/>
                        </li>
                        <li className={`${styles.popularContentItem} ${styles.gridListItem}`}>
                            <img src={PopularImg4}/>
                        </li>
                        <li className={`${styles.popularContentItem} ${styles.gridListItem}`}>
                            <img src={PopularImg5}/>
                        </li>
                        <li className={`${styles.popularContentItem} ${styles.gridListItem}`}>
                            <img src={PopularImg6}/>
                        </li>
                        <li className={`${styles.popularContentItem} ${styles.gridListItem}`}>
                            <img src={PopularImg7}/>
                        </li>
                        <li className={`${styles.popularContentItem} ${styles.gridListItem}`}>
                            <img src={PopularImg8}/>
                        </li>
                    </ul>
                </section>
                <section className={styles.content}>
                    <ul className={styles.contentList}>
                        <li className={styles.contentListItem}>
                            <p>1,200편 이상의 영화</p>
                            <p>어워드 수상에 빛나는 블록 버스터 및 단독 공개작 포함</p>
                        </li>
                        <li className={`${styles.contentListItem} ${styles.lineDivided}`}>
                            <p>20,000편 이상의 에피소드</p>
                            <p>코미디, 드라마, 범죄 실화 등 다양한 장르</p>
                        </li>
                        <li className={`${styles.contentListItem} ${styles.lineDivided}`}>
                            <p>신규 및 단독 공개 콘텐츠</p>
                            <p>어워드 수상에 빛나는 블록 버스터 및 단독 공개작 포함</p>
                        </li>
                        <li className={`${styles.contentListItem} ${styles.lineDivided}`}>
                            <p>1,200편 이상의 영화</p>
                            <p>최대 10대의 기기에서 원하는 콘텐츠를 자유롭게 저장</p>
                        </li>
                    </ul>
                </section>
                <section className={styles.memberShip}>
                    <h2>
                        원하는 멤버십을 선택하세요.
                    </h2>
                    <p>
                        멤버십은 언제든지 변경 또는 취소* 할 수 있습니다.
                    </p>
                    <div className={styles.memberShipTable}>
                        <div className={styles.tableHeader}>
                            <div>

                            </div>
                            <div>
                                디즈니+ 스탠다드
                                <a className={styles.monthMember}>
                                    월 ₩9,900
                                </a>
                            </div>
                            <div>
                                <div className={styles.badge}>
                                    추천
                                </div>
                                디즈니+ 프리미엄
                                <a className={styles.monthMember}>
                                    월 ₩13,900
                                </a>
                            </div>
                        </div>
                        <div className={styles.tableRow}>
                        <div>
                                연간 멤버십 구독료(부가세 포함)
                            </div>
                            <div>
                                <a className={styles.yearMember}>
                                    연 ₩99,000
                                </a>
                                최대 16% 할인된 가격**
                            </div>
                            <div>
                                <a className={styles.yearMember}>
                                    연 ₩99,000
                                </a>
                                최대 16% 할인된 가격**
                            </div>
                        </div>
                        <div className={styles.tableRow}>
                            <div>
                                영상화질**
                            </div>
                            <div>
                                최대 1080p Full HD
                            </div>
                            <div>
                                최대 4K UHD & HDR
                            </div>
                        </div>
                        <div className={styles.tableRow}>
                            <div>
                                오디오***
                            </div>
                            <div>
                                최대 5.1 사운드
                            </div>
                            <div>
                                최대 Dolby Atmos 오디오
                            </div>
                        </div>
                        <div className={styles.tableRow}>
                            <div>
                                동시 스트리밍
                            </div>
                            <div>
                                2
                            </div>
                            <div>
                                4
                            </div>
                        </div>
                        <div className={styles.tableRow}>
                            <div>
                                광고
                            </div>
                            <div>
                                광고 없는 스트리밍
                            </div>
                            <div>
                                광고 없는 스트리밍
                            </div>
                        </div>
                        <div className={styles.tableRow}>
                            <div>
                                콘텐츠 저장
                            </div>
                            <div>
                                <Check/>
                            </div>
                            <div>
                                <Check/>
                            </div>
                        </div>
                    </div>
                    <p className={styles.memberShipDescription}>
                        <span>
                            맴버십 구독이 필요합니다.
                        </span>
                        <br/>
                        <span>
                            *결제 주기 종료 시 취소 처리됩니다.
                        </span>
                        <br/>
                        <span>
                            **월간 멤버십 12개월 구독료 대비 할인된 가격입니다. 추가 약관 적용.
                        </span>
                        <br/>
                        <span>
                            ***영상 화질/오디오 및 저장 기능은 인터넷 서비스, 기기 성능, 멤버십 유형 및 각 콘텐츠에 따라 달라질 수 있습니다. 각 콘텐츠별 다양한 기능 표시가 있을 수 있으나, 해당 멤버십 유형에서 사용 가능한 최대 사양까지만 이용할 수 있습니다. 더 알아보기.
                        </span>
                    </p>
                </section>
                <section className={styles.taste}>
                <div className={styles.tasteItem}>
                        <h2>취향에 따라 골라보는 다양한 콘텐츠가 모두 한자리에</h2>
                        <p>디즈니+는 디즈니, 픽사, 마블, 스타워즈, 내셔널지오그래픽, Star의 최고 콘텐츠들을 모두 한곳에 모아 제공합니다.</p>
                    </div>
                    <img className={styles.tasteImg} src={Taste}/>
                </section>
                <section className={styles.blockbuster}>
                    <h2>디즈니+ 오리지널과 블록버스터 영화</h2>
                    <p>다른 어디에서도 볼 수 없는 디즈니+ 오리지널을 만나보세요. 디즈니, 픽사, 마블, 스타워즈의 최고 인기 영화도 마음껏 즐길 수 있습니다.</p>
                    <ul className={`${styles.blockbusterList} ${styles.gridList}`}>
                        <li className={`${styles.blockbusterListItem} ${styles.gridListItem}`}>
                            <img src={BlockbusterImg} loading='lazy'/>
                        </li>
                        <li className={`${styles.blockbusterListItem} ${styles.gridListItem}`}>
                            <img src={BlockbusterImg1} loading='lazy'/>
                        </li>
                        <li className={`${styles.blockbusterListItem} ${styles.gridListItem}`}>
                            <img src={BlockbusterImg2} loading='lazy'/>
                        </li>
                        <li className={`${styles.blockbusterListItem} ${styles.gridListItem}`}>
                            <img src={BlockbusterImg3} loading='lazy'/>
                        </li>
                        <li className={`${styles.blockbusterListItem} ${styles.gridListItem}`}>
                            <img src={BlockbusterImg4} loading='lazy'/>
                        </li>
                        <li className={`${styles.blockbusterListItem} ${styles.gridListItem}`}>
                            <img src={BlockbusterImg5} loading='lazy'/>
                        </li>
                        <li className={`${styles.blockbusterListItem} ${styles.gridListItem}`}>
                            <img src={BlockbusterImg6} loading='lazy'/>
                        </li>
                        <li className={`${styles.blockbusterListItem} ${styles.gridListItem}`}>
                            <img src={BlockbusterImg7} loading='lazy'/>
                        </li>
                        <li className={`${styles.blockbusterListItem} ${styles.gridListItem}`}>
                            <img src={BlockbusterImg8} loading='lazy'/>
                        </li>
                    </ul>
                </section>
                <FaQ />
            </main>
            <Footer/>
        </>
    )
}

