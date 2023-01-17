import React from 'react';
import Header from '../../components/Header';
import Parallax from '../../components/Parallax';
import { Button, Container, Flexbox, GradientSpan, MainTitle, Section, Title } from '../../components/styledElements';
import { black, darkGray, white } from '../../styles/colors';

const Home: React.FC = () => {
    return (<>
        <Section>
            <Container>
                <MainTitle color={white} padding='70px 0'>Traducción de videollamadas <GradientSpan>en tiempo real.</GradientSpan></MainTitle>
            </Container>
            <Header />
            <Section bgcolor={darkGray}>
                <Container>
                    <Flexbox hAlign='center' direction='column' vAlign='center' padding='70px 0'>
                        <Title color={white} >Viva Translate para profesionales.</Title>
                        <Button>Prueba Viva</Button>
                    </Flexbox>
                </Container>
            </Section>
        </Section>
        <Section bgcolor={black}>
            <Container>
                <Parallax />
            </Container>
        </Section>
    </>
    )
};

export default Home;