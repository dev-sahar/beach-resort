import styled from "styled-components";

import defaultImg from "../../images/room-1.jpeg";

const getImg = props => {
    return (
        props.img ? props.img : defaultImg
    )
}

const HeroContainer = styled.header`
    min-height: calc(100vh - 66px);
    background: url(${getImg}) center/cover no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default HeroContainer;