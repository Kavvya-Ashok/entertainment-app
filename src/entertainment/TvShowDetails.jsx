// selected tv show's details and the castings

import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Container, Image, Text, Skeleton, Title, Card, Flex } from '@mantine/core';
import { fetchCast, fetchMovieDetails } from './APIData';
import { Carousel, CarouselSlide } from '@mantine/carousel';
import { POSTER_BASE_URL } from './Environment';

const TvShowDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  const { data: tvShow, isLoading } = useQuery({
    queryKey: ['tvShow', id], 
    queryFn: () => fetchMovieDetails(`/tv/${id}`)
  });

  const { data: cast } = useQuery({
    queryKey: ["cast", id],
    queryFn: () => fetchCast(`/tv/${id}/credits`)
  })
  console.log(cast);

  const handleCast = (id) => {
    navigate(`/cast/${id}`)
  };

  if (isLoading) return <Skeleton height={200} radius="md" />;

  return (
    <Container fluid>
        <Flex>
            <Image
                src={`${POSTER_BASE_URL}${tvShow.poster_path}`} 
                alt={tvShow.name}
                height={500}
                width={400}
                style={{
                objectFit: 'contain',
                }}
            />
            <div
                style={{
                    padding: '30px'
                }}
            >
                <Title
                    order={1}
                    style={{ textAlign: 'left' }}
                >
                    {tvShow.name}
                </Title>
                <br />
                <Text 
                    style={{ 
                    textAlign: 'left',
                    color: 'yellowgreen'
                    }}
                    size='lg'
                    fw={500}
                >
                   Rating : {tvShow.vote_average}
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
                    {tvShow.overview}
                </Text>
            </div>
        </Flex>
        <Title order={3} style={{ textAlign: 'left' }}>Cast</Title>
        <Carousel
            slideSize="25%" 
            slideGap="md"
            slidesToScroll={3}
            align="start"
        >
            {cast && cast.map((actor, index) => (
                <CarouselSlide key={index}>
                    <Card>
                        <Card.Section>
                            <Image 
                            src={`${POSTER_BASE_URL}${actor.profile_path}`} 
                            alt={actor.name}
                            onClick={() => handleCast(actor.id)}
                            className='image'
                            />
                        </Card.Section>
                        <Text weight={500}>{actor.character} - {actor.name}</Text>
                    </Card>
                </CarouselSlide>
            ))}
        </Carousel>
    </Container>
  );
}

export default TvShowDetails;
