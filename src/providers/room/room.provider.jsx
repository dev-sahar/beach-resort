import React, { useState, useEffect, useMemo, useCallback, useRef, useReducer } from "react";

import RoomContext from "../../contexts/room/room.context";

import Client from "../../contentful";

const RoomProvider = props => {
    
    const [rooms, setRooms] = useState([]);
    const [sortedRooms, setSortedRooms] = useState([]);
    const [featuredRooms, setFeaturedRooms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchFilters, setSearchFilters] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            type: "all",
            capacity: 1,
            price: 0,
            minPrice: 0,
            maxPrice: 0,
            minSize: 0,
            maxSize: 0,
            breakfast: false,
            pets: false
        }
    );

    const mounted = useRef();

    let { type, capacity, price, minSize, maxSize, breakfast, pets } = searchFilters;
    
    capacity = parseInt(capacity);
    price = parseInt(price);

    const formatData = items => {
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);

            let room = {...item.fields, id, images};
            return room;
        });
        return tempItems;
    }

    const getRoom = useCallback(
        slug => {
            let tempRooms = [...rooms];
            const room = tempRooms.find(room => room.slug === slug);
            return room;
        },
        [rooms]
      );


    //componentDidMount  
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await Client.getEntries({
                    content_type: "beachResortRoom",
                    order: "sys.createdAt"
                });
                
                let rooms = formatData(response.items);
                let featuredRooms = rooms.filter(room => room.featured === true);

                let maxPrice = Math.max(...rooms.map(room => room.price));
                let maxSize = Math.max(...rooms.map(room => room.size));

                setRooms(rooms);
                setSortedRooms(rooms);
                setFeaturedRooms(featuredRooms);
                setLoading(false);

                setSearchFilters({
                    ...searchFilters,
                    price: maxPrice,
                    maxPrice,
                    maxSize
                });

            } catch (error) {
                console.log(error);
            }
        }

        getData();
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const handleChange = useCallback(
        event => {
            const { type, name } = event.target;    
            const value = type === 'checkbox' ? event.target.checked : event.target.value

            setSearchFilters({
                [name] : value
            })
        
        }, []
    );
      
    
    const filter = useCallback(() => {
        
        let tempRooms = [...rooms];

        if(type !== "all") {tempRooms = tempRooms.filter(room => room.type === type)}
        if(capacity !== 1) {tempRooms = tempRooms.filter(room => room.capacity >= capacity)}
        if(price) {tempRooms = tempRooms.filter(room => room.price <= price)}
        tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize)
        if(breakfast) {tempRooms = tempRooms.filter(room => room.breakfast === true)}
        if(pets) {tempRooms = tempRooms.filter(room => room.pets === true)}        
            
        setSortedRooms(tempRooms);

    }, [rooms, type, capacity, price, breakfast, pets, minSize, maxSize]);

    
    useEffect(() => {          
        if (!mounted.current) {
            mounted.current = true;
        } else {
            filter();
        }
    }, [filter]);
    

    const providerValue = useMemo(() => ({
        rooms, setRooms,
        sortedRooms, setSortedRooms,
        featuredRooms, setFeaturedRooms,
        loading, setLoading,
        getRoom,
        searchFilters, setSearchFilters,
        handleChange
    }), [rooms, sortedRooms, featuredRooms, loading, getRoom, searchFilters, handleChange]);

    return (
        <RoomContext.Provider value={providerValue}>
            {props.children}
        </RoomContext.Provider>
    )
};

export default RoomProvider;