import React, { useContext } from "react";

import RoomContext from "../../contexts/room/room.context";

import Spinner from "../spinner/spinner.component";
import Room from "../room/room.component";
import Title from "../title/title.component";

import "./featured-rooms.styles.scss";

const FeaturedRooms = () => {
    const context = useContext(RoomContext);
    let {loading, featuredRooms } = context;

    console.log(context);
    
    const rooms = featuredRooms.map(room => (
        <Room key={room.id} room={room} />
    ));

    return (
        <section className="featured-rooms">
            <Title title="Featured Rooms" />
            <div className="featured-rooms-center">
                {
                    loading ? <Spinner /> : rooms
                }
            </div>
        </section>
    )
};

export default FeaturedRooms;