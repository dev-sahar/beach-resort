import React from 'react';
import { Link } from "react-router-dom";

import Hero from "../../components/hero/hero.component";
import Banner from "../../components/banner/banner.component";

const ErrorPage = () => (
    <div>
        <Hero>
            <Banner
                title="404"
                subtitle="Page Not Found"
            >
                <Link to="/" className="btn-primary">
                    Return Home
                </Link>
            </Banner>
        </Hero>
    </div>
);

export default ErrorPage;
