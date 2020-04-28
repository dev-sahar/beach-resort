import React from "react";

import RoomContext from "../../contexts/room/room.context";

const RoomConsumer = RoomContext.Consumer;

/***
export function withRoomConsumer(Component) {
    return function ConsumerWrapper(props) {
        return (
            <RoomConsumer>
                {
                    value => <Component {...props} context={value} />
                }
            </RoomConsumer>
        )
    }
}
***/

export const withRoomConsumer = Component => props => (
    <RoomConsumer>
        {
            value => <Component {...props} context={value} />
        }
    </RoomConsumer>
);

export default RoomConsumer;