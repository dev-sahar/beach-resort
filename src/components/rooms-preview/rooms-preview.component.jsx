import React from "react";

import RoomsFilter from "../rooms-filter/rooms-filter.component";
import RoomsList from "../rooms-list/rooms-list.component";
import Spinner from "../spinner/spinner.component";

import { withRoomConsumer } from "../../consumers/room/room.consumer";

const RoomsPreview = ({ context }) => {
    
    const { loading, sortedRooms, rooms } = context;

    if(loading) return <Spinner />

    return (
        <div>
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
        </div>
    )
            
};

export default withRoomConsumer(RoomsPreview);