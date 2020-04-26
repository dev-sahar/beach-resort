import React from "react";
import { Link } from "react-router-dom";

import Hero from "../../components/hero/hero.component";
import Banner from "../../components/banner/banner.component";
import RoomsPreview from "../../components/rooms-preview/rooms-preview.component";

const Rooms = () => (
    <div>
        <Hero hero="roomsHero">
            <Banner title="Our Rooms">
                <Link to="/" className="btn-primary">
                    Back to Home
                </Link>
            </Banner>
        </Hero>
        <RoomsPreview />
    </div>
);

export default Rooms;