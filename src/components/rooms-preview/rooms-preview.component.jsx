import React from "react";

import RoomsFilter from "../rooms-filter/rooms-filter.component";
import RoomsList from "../rooms-list/rooms-list.component";
import Spinner from "../spinner/spinner.component";

import RoomConsumer from "../../consumers/room/room.consumer";

const RoomsPreview = () => (

    <RoomConsumer>
        {
            value => {
                const { loading, sortedRooms, rooms } = value;

                if(loading) return <Spinner />

                return (
                    <div>
                        <RoomsFilter rooms={rooms} />
                        <RoomsList rooms={sortedRooms} />
                    </div>
                )
            }
        }
    </RoomConsumer>
);

export default RoomsPreview;