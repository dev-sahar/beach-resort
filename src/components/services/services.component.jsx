import React from "react";

import Title from "../title/title.component";
import ServicesDetails from "../services-details/services-details.component";

import "./services.styles.scss";

const Services = () => (
    <section className="services">
        <Title title="Services" />
        <ServicesDetails />
    </section>
);

export default Services;