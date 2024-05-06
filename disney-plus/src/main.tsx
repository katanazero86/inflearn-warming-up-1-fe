import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {GoogleOAuthProvider} from '@react-oauth/google';
import {AuthContextProvider} from "./context/AuthContext.tsx";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {GOOGLE_OAUTH_CLIENT_ID} from "./constants/config.ts";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <GoogleOAuthProvider clientId={GOOGLE_OAUTH_CLIENT_ID}>
            <AuthContextProvider>
                <App/>
            </AuthContextProvider>
        </GoogleOAuthProvider>
    </React.StrictMode>,
)
