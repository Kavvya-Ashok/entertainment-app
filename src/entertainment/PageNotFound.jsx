// when the user directly changes the url and the url mismatches with the existing routes

import { Button, Container, Text, Title } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <Title order={1}>404 - Page Not Found</Title>
            <br />
            <Text size="lg">The page you are looking for does not exist.</Text>
            <br />
            <Button
                variant="outline"
                onClick={() => navigate(`/`)}
            >
                Go to Home
            </Button>
        </Container>
    );
}

export default PageNotFound;