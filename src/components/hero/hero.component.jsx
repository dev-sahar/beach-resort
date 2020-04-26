import React from "react";

import "./hero.styles.scss";

const Hero = ({ children , hero }) => (
    <header className={hero}>
        {children}
    </header>
);

Hero.defaultProps = {
    hero: "defaultHero"
}

export default Hero;