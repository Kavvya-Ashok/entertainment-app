// functions to fetch data from TMDB

import axios from "axios";
import { TMDB_API_KEY, TMDB_API_URL } from "./Environment";

export const fetchMovies = async ( endpoint ) => {
    const { data } = await axios.get(`${TMDB_API_URL}${endpoint}?api_key=${TMDB_API_KEY}`);
    console.log(data);
    return data.results;
};

export const fetchMovieDetails = async ( endpoint ) => {
    const { data } = await axios.get(`${TMDB_API_URL}${endpoint}?api_key=${TMDB_API_KEY}`);
    console.log(data);
    return data;
}

export const fetchCast = async ( endpoint ) => {
    const { data } = await axios.get(`${TMDB_API_URL}${endpoint}?api_key=${TMDB_API_KEY}`);
    console.log(data);
    return data.cast;
}

export const fetchProfile = async ( endpoint ) => {
    const { data } = await axios.get(`${TMDB_API_URL}${endpoint}?api_key=${TMDB_API_KEY}`);
    console.log(data);
    return data;
}

export const fetchMoviesByGenre = async ( endpoint, genre ) => {
    const { data } = await axios.get(`${TMDB_API_URL}${endpoint}?api_key=${TMDB_API_KEY}&with_genres=${genre}`);
    console.log(data);
    return data.results;
}
