import React, { MouseEvent, useEffect, useState } from 'react';
import { GradientCircle, Image } from '../../components/styledElements';
import { meetImage1, messageBox, whiteMessageBox } from '../../images/image-imports';
import { HeaderBox } from './styles';

const Header: React.FC = () => {
    const [pageX, setPageX] = useState(0);
    const [pageY, setPageY] = useState(0);

    const transform = (factor: number) => {
        return `translateX(${pageX * factor / 90}px) translateY(${pageY * factor / 90}px)`
    }

    const handleMouseEvent = (e: MouseEvent<Element>) => {
        e.preventDefault();
        setPageX(e.pageX);
        setPageY(e.pageY);
    };

    const handleScroll = () => {
        setPageX(window.pageYOffset * 4);
        setPageY(window.pageYOffset * 4);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <HeaderBox>
            <GradientCircle
                height='32vw'
                position='absolute'
                right='0'
                bottom='4vw'
                transform={transform(10)}
                onMouseMove={(e) => handleMouseEvent(e)}
            />
            <Image
                src={meetImage1}
                width='70vw'
                position='absolute'
                left='calc(50% - 35vw)'
                top='8vw'
                transform={transform(1)}
                onMouseMove={(e) => handleMouseEvent(e)}
            />
            <GradientCircle
                height='16vw'
                position='absolute'
                left='4vw'
                top='0'
                transform={transform(-1)}
                onMouseMove={(e) => handleMouseEvent(e)}
            />
            <Image
                src={messageBox}
                width='30vw'
                position='absolute'
                left='12vw'
                top='-4vw'
                transform={transform(2)}
                onMouseMove={(e) => handleMouseEvent(e)}
            />
            <Image
                src={messageBox}
                width='30vw'
                position='absolute'
                left='4vw'
                top='24vw'
                transform={transform(-2)}
                onMouseMove={(e) => handleMouseEvent(e)}
            />
            <Image
                src={whiteMessageBox}
                width='30vw'
                position='absolute'
                right='8vw'
                top='16vw'
                transform={transform(-1)}
                onMouseMove={(e) => handleMouseEvent(e)}
            />
            <Image
                src={whiteMessageBox}
                width='30vw'
                position='absolute'
                right='4vw'
                top='28vw'
                transform={transform(2)}
                onMouseMove={(e) => handleMouseEvent(e)}
            />
        </HeaderBox>
    )
};

export default Header;