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

const Home = () => {

  const navigate = useNavigate();

  const { data: movies, isLoading } = useQuery({
    queryKey: ['movies'],
    queryFn: () => fetchMovies(`/trending/movie/week`)
  });

  const { data: shows } = useQuery({
    queryKey: ['shows'],
    queryFn: () => fetchMovies(`/trending/tv/week`)
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
      <Carousel 
        slideSize="25%" 
        slideGap="md"
        slidesToScroll={1}
        align="start"
      >
        {movies != undefined && movies.map((movie, index) => (
          <CarouselSlide key={index}>
            <Card>
              <Card.Section>
                <Image 
                  src={`${POSTER_BASE_URL}${movie.poster_path}`} 
                  alt={movie.title}  
                  onClick={() => handleMovie(movie.id)}
                  className='image'
                />
              </Card.Section>
              <Text weight={500}>{movie.title}</Text>
            </Card>
          </CarouselSlide>
        ))}
      </Carousel>
      <Title order={2} style={{ textAlign: 'left' }}>Trending TV Shows</Title>
      <Carousel 
        slideSize="25%" 
        slideGap="md"
        slidesToScroll={1}
        align="start"
      >
        {shows != undefined && shows.map((show, index) => (
          <CarouselSlide key={index}>
            <Card>
              <Card.Section>
                <Image 
                  src={`${POSTER_BASE_URL}${show.poster_path}`} 
                  alt={show.name}
                  onClick={() => handleTvShow(show.id)}
                  className='image'
                />
              </Card.Section>
              <Text weight={500}>{show.name}</Text>
            </Card>
          </CarouselSlide>
        ))}
      </Carousel>
      <Title order={2} style={{ textAlign: 'left' }}>Thriller Tales</Title>
      <Carousel 
        slideSize="25%" 
        slideGap="md"
        slidesToScroll={1}
        align="start"
      >
        {thrillerMovies != undefined && thrillerMovies.map((movie, index) => (
          <CarouselSlide key={index}>
            <Card>
              <Card.Section>
                <Image 
                  src={`${POSTER_BASE_URL}${movie.poster_path}`} 
                  alt={movie.title}  
                  onClick={() => handleMovie(movie.id)}
                  className='image'
                />
              </Card.Section>
              <Text weight={500}>{movie.title}</Text>
            </Card>
          </CarouselSlide>
        ))}
      </Carousel>
      <Title order={2} style={{ textAlign: 'left' }}>Comedy Carnival</Title>
      <Carousel 
        slideSize="25%" 
        slideGap="md"
        slidesToScroll={1}
        align="start"
      >
        {comedyMovies != undefined && comedyMovies.map((movie, index) => (
          <CarouselSlide key={index}>
            <Card>
              <Card.Section>
                <Image 
                  src={`${POSTER_BASE_URL}${movie.poster_path}`} 
                  alt={movie.title}  
                  onClick={() => handleMovie(movie.id)}
                  className='image'
                />
              </Card.Section>
              <Text weight={500}>{movie.title}</Text>
            </Card>
          </CarouselSlide>
        ))}
      </Carousel>
    </Container>
  );
}

export default Home;
