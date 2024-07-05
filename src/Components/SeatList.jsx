// src/components/SeatsList.js
import React from 'react';
import { Link } from 'react-router-dom';
import "./Style/seatlist.css"
const SeatsList = ({ seats }) => {
    return (
        <div>
            <h2>Seats List</h2>
            <ul>
                {seats.map((seat) => (
                    <li key={seat.id}>
                        <Link to={`/seat/${seat.id}`}>{seat.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SeatsList;
