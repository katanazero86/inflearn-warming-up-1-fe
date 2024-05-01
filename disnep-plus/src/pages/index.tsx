import styles from './index.module.css';
import Img from '/imgs/index/img.png';
import DenerpLogo from '/imgs/index/logo.png';

export default function Index() {
    return (
        <>
            <header className={styles.header}>
                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        <li className={styles.navListItem}>
                            <a href="#">
                                <span>로그인</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                <section className={styles.hero}>
                    <div className={styles.contentContainer}>
                        <img src={DenerpLogo} loading='lazy' alt='logo'/>
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
                            <button className={styles.pagination}></button>
                            <button className={styles.pagination}></button>
                            <button className={styles.pagination}></button>
                            <button className={styles.pagination}></button>
                            <button className={styles.pagination}></button>
                        </div>
                        <ul className={styles.galleryImagesContainer}>
                            <li className={styles.galleryImageContainer}>
                                <img src={Img} loading='lazy'/>
                            </li>
                        </ul>
                    </div>
                </section>
            </main>
        </>
    )
}