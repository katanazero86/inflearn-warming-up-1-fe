import {Routes, Route, BrowserRouter} from "react-router-dom";
import Index from "../pages";
import AuthRoute from "./AuthRoute.tsx";
import Contents from "../pages/contents/Contents.tsx";
import Search from "../pages/search/search.tsx";
import SearchMovie from "../pages/searchMovie/searchMovie.tsx";
import Layout from "../components/Layout/Layout.tsx";

const Test = () => {
    return (
        <h2>
            Test
        </h2>
    )
}

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AuthRoute/>}>
                    <Route path='test' element={<Test/>}/>
                    <Route element={<Layout />}>
                        <Route path='contents' element={<Contents/>}/>
                        <Route path='search' element={<Search/>}/>
                        <Route path='search/:id' element={<SearchMovie/>}/>
                    </Route>
                </Route>
                <Route index element={<Index/>}/>
            </Routes>
        </BrowserRouter>
    )
}