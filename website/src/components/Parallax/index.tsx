import React, { useEffect, useState } from 'react';
import { GradientCircle, GradientRectangle, Image, Title } from "../../components/styledElements";
import { meetImage2, messageBox, vivaSample } from '../../images/image-imports';
import { white } from '../../styles/colors';
import { Box } from "./styles";

const Parallax: React.FC = () => {
    const [pageY, setPageY] = useState(0);
    const [opacity, setOpacity] = useState(0);

    const transform = (factor: number) => {
        return `translateY(${pageY * factor / 90}px)`
    }

    const handleScroll = () => {
        setPageY(window.pageYOffset * 4);
        setOpacity(window.pageYOffset / 500);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <Title color={white} padding='32px 0' size='20px'>Mantén a todo el mundo alineado y al día con subtítulos en tiempo real.</Title>
            <Box>
                <GradientRectangle
                    height='60vw'
                    width='80vw'
                    position='absolute'
                    left='calc(50% - 40vw)'
                    top='-8vw'
                    transform={transform(2)}
                    opacity={opacity}
                />
                <Image
                    src={meetImage2}
                    width='60vw'
                    position='absolute'
                    left='calc(50% - 30vw)'
                    top='8vw'
                    opacity={opacity}
                />
                <Image
                    src={messageBox}
                    width='30vw'
                    position='absolute'
                    left='0'
                    top='0'
                    transform={transform(1)}
                    opacity={opacity}
                />
                <Image
                    src={messageBox}
                    width='30vw'
                    position='absolute'
                    right='0'
                    top='24vw'
                    transform={transform(4)}
                    opacity={opacity}
                />
            </Box>
            <Title color={white} padding='32px 0' size='20px'>Termina tus reuniones más rápidamente y automatiza los flujos de trabajo.</Title>
            <Box>
                <GradientCircle
                    height='50vw'
                    position='absolute'
                    left='0'
                    top='-12vw'
                    transform={transform(2)}
                />
                <Image
                    src={vivaSample}
                    width='60vw'
                    position='absolute'
                    left='calc(50% - 30vw)'
                    top='8vw'
                    opacity={opacity}
                />
            </Box>
        </>
    )
};

export default Parallax;