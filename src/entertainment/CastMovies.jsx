// selected cast's details and their movies

import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Container, Image, Text, Skeleton, Title, Card, Flex } from '@mantine/core';
import { fetchCast, fetchProfile } from './APIData';
import { Carousel, CarouselSlide } from '@mantine/carousel';
import { POSTER_BASE_URL } from './Environment';

const CastMovies = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  const { data: movies, isLoading } = useQuery({
    queryKey: ['movies', id], 
    queryFn: () => fetchCast(`/person/${id}/movie_credits`)
  });

  const { data: cast } = useQuery({
    queryKey: ["cast", id],
    queryFn: () => fetchProfile(`/person/${id}`)
  })

  const handleMovie = (id) => {
    navigate(`/movie/${id}`)
  };

  if (isLoading) return <Skeleton height={200} radius="md" />;

  return (
    <Container fluid>
      <Flex>
        {cast.profile_path != undefined && <Image
          src={`${POSTER_BASE_URL}${cast.profile_path}`} 
          alt={cast.name}
          height={500}
          width={400}
          style={{
            objectFit: 'contain',
          }}
        />}
        <div
          style={{
            padding: '30px'
          }}
        >
          <Title
            order={1}
            style={{ textAlign: 'left' }}
          >
            {cast.name}
          </Title>
          <br />
          <Text
            style={{ 
              textAlign: 'left',
              color: '#032e65'
            }}
            size='lg'
            fw={500}
          >
            Birthday : {cast.birthday}
          </Text>
          <br />
          <Text
            style={{ 
              textAlign: 'left',
              color: 'gray'
            }}
            size='xl' 
            fw={500}
          >
            {cast.biography}
          </Text>
        </div>
      </Flex>
      <Title order={3} style={{ textAlign: 'left' }}>More Like This</Title>
      <Carousel
        slideSize="25%" 
        slideGap="md"
        slidesToScroll={3}
        align="start"
      >
        {movies.map((movie, index) => (
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

export default CastMovies;
