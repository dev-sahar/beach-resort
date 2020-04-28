import React, { useContext } from "react";

import RoomContext from "../../contexts/room/room.context";

import Title from "../title/title.component";

import "./rooms-filter.styles.scss";

const RoomsFilter = ({rooms}) => {

    const context = useContext(RoomContext);
    const { handleChange, searchFilters: {type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets}} = context;
    console.log("context",context)
    const getUnique = (items, value) => {
        return [...new Set(items.map(item => item[value]))]
    } 

    let types = getUnique(rooms, 'type');
    let typesWithAll = ['all', ...types];

    let people = getUnique(rooms, 'capacity');

    return (
        <section className="filter-container">
            <Title title="Search Rooms" />
            <form className="filter-form">
               
                {/* - select - filter room based on type */}
                <div className="form-group">
                    <label htmlFor="type">Room Type</label>
                    <select 
                        name="type" 
                        id="type"
                        className="form-control"
                        value={type}
                        onChange={handleChange}
                    >
                        {
                            typesWithAll.map((type, index) => (
                                <option key={index} value={type}>{type}</option>
                            ))
                        }
                    </select>
                </div>

                {/* - select - filter room based on guests number */}
                <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select 
                        name="capacity" 
                        id="capacity"
                        className="form-control"
                        value={capacity}
                        onChange={handleChange}
                    >
                        {
                            people.map((capacity, index) => (
                                <option key={index} value={capacity}>{capacity}</option>
                            ))
                        }
                    </select>
                </div>

                {/* - range - filter room based on price */}
                <div className="form-group">
                    <label htmlFor="price">Room Price ${price}</label>
                    <input 
                        type="range"
                        name="price"
                        id="price"
                        className="form-control"
                        min={minPrice}
                        max={maxPrice}
                        value={price}
                        onChange={handleChange}
                    />
                </div>

                {/* - number - filter room based on size */}
                <div className="form-group">
                    <label htmlFor="size">Room Size</label>
                    <div className="size-inputs">
                        <input 
                            type="number"
                            name="minSize"
                            id="size"
                            className="size-input"
                            value={minSize}
                            onChange={handleChange}
                        />
                        <input 
                            type="number"
                            name="maxSize"
                            id="size"
                            className="size-input"
                            value={maxSize}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                {/* - checkbox - filter room based on extras */}
                <div className="form-group">
                    <div className="single-extra">
                        <input 
                            type="checkbox"
                            name="breakfast"
                            id="breakfast"
                            checked={breakfast}
                            onChange={handleChange}
                        />
                        <label htmlFor="breakfast">Breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input 
                            type="checkbox"
                            name="pets"
                            id="pets"
                            checked={pets}
                            onChange={handleChange}
                        />
                        <label htmlFor="pets">Pets</label>
                    </div>
                </div>

            </form>
        </section>
    )
};

export default RoomsFilter;

