import {MouseEvent, useContext, ChangeEvent, useState, useEffect} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {useGoogleLogin} from "@react-oauth/google";
import {axios} from "../../utils/axios.utils.ts";
import {AuthContext} from "../../context/AuthContext.tsx";
import LoginAvatar from '/imgs/login_avatar.png';
import DisneyplusLogo from '/imgs/index/disneyplus_logo.png';
import styles from "./Header.module.css";
import useDebounce from "../../hooks/useDebounce.ts";

export default function Header() {

    const {token, setToken} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const [search, setSearch] = useState('');
    const debounceValue = useDebounce(search, 800);

    const googleLogin = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            console.log(tokenResponse);
            const {access_token} = tokenResponse;
            const userInfo = await axios.get(
                'https://www.googleapis.com/oauth2/v3/userinfo',
                {headers: {Authorization: `Bearer ${access_token}`}},
            );
            console.log(userInfo);
            if (setToken) {
                setToken(access_token);
                navigate('/contents', {
                    replace: true
                });
            }
        },
        onError: errorResponse => console.log(errorResponse),
    });

    const handleLogoClick = () => {
        if(token) {
            setSearch('');
            navigate('/contents');
        }
    };

    const handleLoginClick = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        googleLogin();
    };

    const handleLogoutClick = () => {
        if (setToken) {
            setToken('');
            navigate('/');
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value.trim());
    };

    useEffect(() => {
        if (token && debounceValue !== '') navigate(`/search?q=${debounceValue}`);
        if (token && debounceValue === '') {
            if (location.pathname === '/search') navigate('/contents', {
                replace: true
            });
        }

    }, [token, debounceValue]);

    return (
        <header className={styles.header}>
            {token === '' &&
                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        <li className={styles.navListItem}>
                            <a href="#" onClick={handleLoginClick}>
                                <span>로그인</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            }
            {token !== '' &&
                <div className={styles.headerLogin}>
                    <img className={styles.disenyplus} src={DisneyplusLogo} loading='lazy' alt="Disneyplus" onClick={handleLogoClick}/>
                    <div className={styles.search}>
                        <input type='text' onChange={handleChange} value={search}/>
                    </div>
                    <div className={styles.avatarContainer}>
                        <img className={styles.avatar} src={LoginAvatar} loading='lazy' alt='login-avatar'/>
                        <ul>
                            <li onClick={handleLogoutClick}>
                                Logout
                            </li>
                        </ul>
                    </div>
                </div>
            }
        </header>
    )
}