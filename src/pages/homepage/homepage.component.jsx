import React from "react";
import { Link } from "react-router-dom";

import Hero from "../../components/hero/hero.component";
import Banner from "../../components/banner/banner.component";
import Services from "../../components/services/services.component";
import FeaturedRooms from "../../components/featured-rooms/featured-rooms.component";

const HomePage = () => (
    <div>
        <Hero hero="defaultHero">
            <Banner 
                title="Luxurious Rooms" 
                subtitle="Deluxe Rooms Starting at $299"
            >
                <Link to="/rooms" className="btn-primary">
                    Our Rooms
                </Link>
            </Banner>
        </Hero>
        <Services />
        <FeaturedRooms />
    </div>
);

export default HomePage;