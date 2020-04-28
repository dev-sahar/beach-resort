import React from "react";

import Room from "../room/room.component";

import "./rooms-list.styles.scss";

const RoomsList = ({rooms}) => {

    if(rooms.length === 0) return <div className="empty-search"><h3>No Rooms Match Your Search</h3></div>

    return (
        <section className="roomslist">
            <div className="roomslist-center">
                {
                    rooms.map(room => (
                        <Room key={room.id} room={room} />
                    ))
                }
            </div>
        </section>
    )
};

export default RoomsList;