import React from "react";
import { logo } from "../../images/image-imports";
import { white } from "../../styles/colors";
import { Container, Flexbox, Image, Section, Title } from "../styledElements";

const Navbar: React.FC = () => (
    <Section>
        <Container>
            <Flexbox vAlign="center" padding="16px 0">
                <Image src={logo} alt="Image" height={36}/>
                <Title color={white} padding="0 16px">Viva</Title>
            </Flexbox>
        </Container>
    </Section>
);

export default Navbar;