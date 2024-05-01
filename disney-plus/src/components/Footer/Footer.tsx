import styles from './Footer.module.css';
import DisneyplusLogo from '/imgs/index/disneyplus_logo.png';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <img src={DisneyplusLogo} loading='lazy' alt="Disneyplus"/>
            <ul>
                <li>
                    <a href='#'>
                        디즈니+ 이용약관
                    </a>
                </li>
                <li>
                    <a href='#'>
                        개인정보 처리방침
                    </a>
                </li>
                <li>
                    <a href='#'>
                        개인정보 처리방침 부속서
                    </a>
                </li>
                <li>
                    <a href='#'>
                        관심 기반 광고
                    </a>
                </li>
                <li>
                    <a href='#'>
                        고객센터
                    </a>
                </li>
                <li>
                    <a href='#'>
                        다양한 시청 방법
                    </a>
                </li>
                <li>
                    <a href='#'>
                        디즈니+ 소개
                    </a>
                </li>
                <li>
                    <a href='#'>
                        통신판매업 사업자정보확인
                    </a>
                </li>
            </ul>
            <p className={styles.footerInfo}>
                월트디즈니컴퍼니코리아 유한책임회사 | 대표자: 김소연 | 서울특별시 강남구 테헤란로 152, 7층 (우편번호: 06236) | Email:
                help@disneyplus.kr | 연락처: 080 822 1416 | 사업자등록번호: 220-81-03347 | 통신판매업 신고번호: 제2021-서울강남-05456호 |
                <br/>
                비디오물배급업 신고번호: 제2016-16호 | 호스팅서비스 사업자: NSOne
                <br/>
                <br/>
                디즈니+의 콘텐츠는 서비스 여부에 따라 달라질 수 있습니다.
                <br/>
                © 2024 Disney and its related entities. All Rights Reserved.
            </p>
        </footer>
    )
}