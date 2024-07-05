import React from 'react';
import { useParams } from 'react-router-dom';
import "./Style/seatdetails.css"
const SeatDetails = ({ seats, pricing }) => {
    const { id } = useParams();
    const seat = seats.find((s) => s.id.toString() === id);
console.log(seat);
    if (!seat) {
        return <div>Seat not found</div>;
    }

    const seatPricing = pricing[seat.class];

    return (
        <>
        <div>
            <h2>Seat Details</h2>
            <p>ID: {seat.id}</p>
            <p>Name: {seat.name}</p>
            <p>Class: {seat.class}</p>
            <p>Price: {seatPricing.normal_price}</p>
        </div>
        
        </>
    );
};

export default SeatDetails;
