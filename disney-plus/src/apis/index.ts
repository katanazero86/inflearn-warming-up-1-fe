import {tmdbApi} from "./tmdb";
import {axiosInstance, axios} from "../utils/axios.utils.ts";

const repositories = {
    tmdbApi: tmdbApi(axiosInstance, axios)
};
Object.freeze(repositories);

export {
    repositories
}