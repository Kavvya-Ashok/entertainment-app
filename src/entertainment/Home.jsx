// home page to see the popular movies and trending tv shows

import React, { useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Container, Card, Image, Text, Skeleton, Title } from '@mantine/core';
import '@mantine/core/styles.layer.css';
import { fetchMovies, fetchMoviesByGenre } from './APIData';
import { Carousel, CarouselSlide } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import { Outlet, useNavigate } from 'react-router-dom';
import { POSTER_BASE_URL } from './Environment';
import '../App.css';
import MoviesList from './MoviesList';

const Home = () => {

  const navigate = useNavigate();

  const { data: movies, isLoading } = useQuery({
    queryKey: ['movies'],
    queryFn: () => fetchMovies(`/trending/movie/week`)
  });

  const { data: shows } = useQuery({
    queryKey: ['shows'],
    queryFn: () => fetchMovies(`/trending/tv/week`),
    select: (data) => {
        console.log(data)
        return data.map((value) => {
          return {
            poster_path: value.poster_path,
            title: value.name
          }
        })
    }
  });

  const { data: thrillerMovies } = useQuery({
    queryKey: ['thrillerMovies', 53],
    queryFn: () => fetchMoviesByGenre(`/discover/movie`, 53)
  });
  
  const { data: comedyMovies } = useQuery({
    queryKey: ['comedyMovies', 35],
    queryFn: () => fetchMoviesByGenre(`/discover/movie`, 35)
  });

  const handleMovie = (id) => {
    navigate(`/movie/${id}`)
  };

  const handleTvShow = (id) => {
    navigate(`/tvshow/${id}`)
  };

  if (isLoading) return <Skeleton height={200} radius="md" />;
  
  return (
    <Container fluid>
      <Title order={2} style={{ textAlign: 'left' }}>Popular Movies</Title>
      <MoviesList movies={movies} onClick={handleMovie}/>
      <Title order={2} style={{ textAlign: 'left' }}>Trending TV Shows</Title>
      <MoviesList movies={shows} onClick={handleTvShow}/>
      <Title order={2} style={{ textAlign: 'left' }}>Thriller Tales</Title>
      <MoviesList movies={thrillerMovies} onClick={handleMovie}/>
      <Title order={2} style={{ textAlign: 'left' }}>Comedy Carnival</Title>
      <MoviesList movies = {comedyMovies} onClick={handleMovie} />
    </Container>
  );
}

export default Home;
