import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import defaultBcg from "../../images/room-1.jpeg";

import Banner from "../../components/banner/banner.component";

import HeroContainer from "../../components/hero/hero.styles";

import "./single-room.styles.scss";

import RoomContext from "../../contexts/room/room.context";

const SingleRoom = props => {

    const [slug] = useState(props.match.params.slug);
    const [defaultBcgImg] = useState(defaultBcg);

    const context = useContext(RoomContext);
    const { getRoom } = context;
    
    const room = getRoom(slug);

    if(!room) {
        return (
            <div className="error">
                <h3>Room could not be found</h3>
                <Link to="/rooms" className="btn-primary">
                    Back to Rooms
                </Link>
            </div>
        )
    }

    const { name, description, capacity, size, price, extras, breakfast, pets, images} = room;
    const [mainImage, ...imgs] = images;

    return (
        <> 
            <HeroContainer img={mainImage || defaultBcgImg}>
                <Banner title={`${name} room`}>
                    <Link to="/rooms" className="btn-primary">Back to Rooms</Link>
                </Banner>
            </HeroContainer>
            <section className="single-room">
                <div className="single-room-images">
                    {
                        imgs.map((img, index) => (
                            <img key={index} src={img} alt={name} />
                        ))
                    }
                </div>
                <div className="single-room-info">
                    <article className="desc">
                        <h3>Details</h3>
                        <p>{description}</p>
                    </article>
                    <article className="info">
                        <h3>Info</h3>
                        <h6>price: ${price}</h6>
                        <h6>size: {size} SQFT</h6>
                        <h6>
                            Max Capacity: 
                            {
                                capacity > 1 ? ` ${capacity} people` : ` ${capacity} person`
                            }
                        </h6>
                        <h6>
                            {
                                pets ? `Pets Allowed` : `No Pets Allowed`
                            }
                        </h6>
                        <h6>
                            {
                                breakfast && `Free Breakfast Included`
                            }
                        </h6>
                    </article>
                </div>
            </section>
            <section className="room-extras">
                <h6>Extras</h6>
                <ul className="extras">
                    {
                        extras.map((item, index) => (
                            <li key={index}>- {item}</li>
                        ))
                    }
                </ul>
            </section>
        </>
    )

};

export default SingleRoom;