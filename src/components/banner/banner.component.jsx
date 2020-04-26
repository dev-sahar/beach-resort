import React from "react";

import "./banner.styles.scss";

const Banner = ({ title, subtitle, children }) => (
    <div className="banner">
        <h1>{ title }</h1>
        <div />
        <p>{ subtitle }</p>
        { children }
    </div>
);

export default Banner;