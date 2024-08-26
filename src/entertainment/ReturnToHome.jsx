// return to the home page from any page

import { Container, Flex, Title } from "@mantine/core";
import { IconHomeFilled } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

const ReturnToHome = () => {
    const navigate = useNavigate();

    const handleHome = () => {
        navigate(`/`);
    };

    return (
        <Container fluid>
            <header
                style={{
                    backgroundColor: '#E6DAF0'
                }}
            >
                <Flex
                    style={{
                        justifyContent: 'space-between',
                        alignItems: 'center ',
                    }}
                >
                    <IconHomeFilled
                        style={{ width: 50, height: 50 }}
                        stroke={1.5}
                        color='black' 
                        onClick={handleHome}
                        className="image"
                    />
                    <Title 
                        order={1}
                        style={{
                            fontFamily: 'fantasy',
                            fontStyle: 'italic',
                            textAlign: 'center'
                        }}
                    >
                        AK Entertainments
                    </Title>
                </Flex>
                {/* <Button 
                    onClick={handleHome}
                    style={{
                        color: 'black'
                    }}
                    variant='filed'
                >
                    Home
                </Button> */}
            </header>
        </Container>
    );
};

export default ReturnToHome;