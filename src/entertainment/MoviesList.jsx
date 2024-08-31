
import { Card, Image, Text } from '@mantine/core';
import { Carousel, CarouselSlide } from '@mantine/carousel';
import { POSTER_BASE_URL } from './Environment';
const MoviesList = ({movies, onClick}) => {
    console.log(movies);
    return (
        <Carousel 
            slideSize="25%" 
            slideGap="md"
            slidesToScroll={1}
            align="start"
        >
            {movies!= undefined && movies.map((movie, index) => (
            <CarouselSlide key={index}>
                <Card>
                <Card.Section>
                    <Image 
                    src={`${POSTER_BASE_URL}${movie.poster_path}`} 
                    alt={movie.title}  
                    onClick={() => onClick(movie.id)}
                    className='image'
                    />
                </Card.Section>
                <Text weight={500}>{movie.title}</Text>
                </Card>
            </CarouselSlide>
            ))}
        </Carousel>
    )
}

export default MoviesList;