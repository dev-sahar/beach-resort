import React, { useState, useEffect, useMemo, useCallback } from "react";

import RoomContext from "../../contexts/room/room.context";

import items from "../../data";

const RoomProvider = props => {
    
    const [rooms, setRooms] = useState([]);
    const [sortedRooms, setSortedRooms] = useState([]);
    const [featuredRooms, setFeaturedRooms] = useState([]);
    const [loading, setLoading] = useState(true);

    const getRoom = useCallback(
        slug => {
            let tempRooms = [...rooms];
            const room = tempRooms.find(room => room.slug === slug);
            return room;
        },
        [rooms],
      );

    const formatData = items => {
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);

            let room = {...item.fields, id, images};
            return room;
        });
        return tempItems;
    }

    useEffect(() => {
        let rooms = formatData(items);
        let featuredRooms = rooms.filter(room => room.featured === true);

        setRooms(rooms);
        setSortedRooms(rooms);
        setFeaturedRooms(featuredRooms);
        setLoading(false);
    }, []);

    const providerValue = useMemo(() => ({
        rooms, setRooms,
        sortedRooms, setSortedRooms,
        featuredRooms, setFeaturedRooms,
        loading, setLoading,
        getRoom
    }), [rooms, sortedRooms, featuredRooms, loading, getRoom]);

    return (
        <RoomContext.Provider value={providerValue}>
            {props.children}
        </RoomContext.Provider>
    )
};

export default RoomProvider;