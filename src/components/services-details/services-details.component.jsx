import React, { useState } from "react";

import servicesData from "./services.data";

import "./services-details.styles.scss";

const ServicesDetails = () => {
    const [services] = useState(servicesData);

    return (
        <div className="services-center">
            {
                services.map((service, index) => (
                    <article key={index} className="service">
                        <span>{service.icon}</span>
                        <h6>{service.title}</h6>
                        <p>{service.info}</p>
                    </article>
                ))
            }
        </div>
    )
}

export default ServicesDetails;