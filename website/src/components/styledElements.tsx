import styled from "styled-components";
import { black, blue, purple } from "../styles/colors";


export const Image = styled.img<{ 
        width?: string,
        position?: string,
        left?: string,
        right?: string,
        top?: string,
        bottom?: string,
        transform?: string,
        visibility?: string,
        opacity?: number,
        onHover?: string
    }>`
    width: ${props => props.width || "unset"};
    position: ${props => props.position || "relative"};
    left: ${props => props.left || "unset"};
    right: ${props => props.right || "unset"};
    top: ${props => props.top || "unset"};
    bottom: ${props => props.bottom || "unset"};
    transform: ${props => props.transform || "unset"};
    opacity: ${props => props.opacity || "1"};
    &:hover {
        ${props => props.onHover};
    }
`;

export const Paragraph = styled.p``;

export const Title = styled.h2<{ padding?: string, size?: string }>`
    font-size: ${props => props.size || "24px"};
    color: ${props => props.color || black};
    padding: ${props => props.padding || "0"};
`;

export const GradientSpan = styled.span<{ padding?: string }>`
    background-image: linear-gradient(135deg, ${purple} 0%, ${blue} 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    background-repeat: no-repeat;
`;

export const MainTitle = styled.h1<{ color?: string, size?: string, padding?: string }>`
    color: ${props => props.color || black};
    font-size: ${props => props.size || "36px"};
    padding: ${props => props.padding || "0"};
    font-weight: 800;
`;

export const Container = styled.div`
    margin: 0 16px;
`;

export const Section = styled.section<{ bgcolor?: string }>`
    background-color: ${props => props.bgcolor || black};
    overflow: hidden;
`;

export const Flexbox = styled.section<{ direction?: string, vAlign?: string, hAlign?: string, padding?: string }>`
    display: flex;
    flex-direction: ${props => props.direction || "row"};
    align-items: ${props => props.vAlign || "inherit"};
    justify-content: ${props => props.hAlign || "inherit"};
    padding: ${props => props.padding || "0"};
`;

export const GradientCircle = styled.div<{ height: string, maxHeight?: string, width?: string, position?: string, left?: string, right?: string, top?: string, bottom?: string, transform?: string }>`
    height: ${props => props.height};
    max-height: ${props => props.maxHeight};
    width: ${props => props.width || props.height};
    max-width: ${props => props.maxHeight};
    background-image: linear-gradient(135deg, ${purple} 0%, ${blue} 100%);
    border-radius: 50%;
    position: ${props => props.position || "relative"};
    left: ${props => props.left || "unset"};
    right: ${props => props.right || "unset"};
    top: ${props => props.top || "unset"};
    bottom: ${props => props.bottom || "unset"};
    transform: ${props => props.transform || "unset"};
`;

export const GradientRectangle = styled.div<{ height: string, maxHeight?: string, width?: string, position?: string, left?: string, right?: string, top?: string, bottom?: string, transform?: string, opacity?: number }>`
    height: ${props => props.height};
    max-height: ${props => props.maxHeight};
    width: ${props => props.width || props.height};
    background-image: linear-gradient(135deg, ${purple} 0%, ${blue} 100%);
    border-radius: 8px;
    position: ${props => props.position || "relative"};
    left: ${props => props.left || "unset"};
    right: ${props => props.right || "unset"};
    top: ${props => props.top || "unset"};
    bottom: ${props => props.bottom || "unset"};
    transform: ${props => props.transform || "unset"};
    opacity: ${props => props.opacity || "1"};
`;

export const Button = styled.button`
    background-image: linear-gradient(135deg, ${purple} 0%, ${blue} 100%);
    border-radius: 50px;
    height: 40px;
    border: none;
    padding: 0 20px;
    font-weight: 600;
    font-size: 14px;
    margin-top: 16px;
    cursor: pointer;
    box-shadow: 2px 4px 6px 2px rgb(0 0 0 / 20%);
    &:hover {
        transform: translateY(2px);
        box-shadow: none;
    }
`;
