// src/components/BookingList.js
import React from 'react';
import './Style/bookinglist.css';

const BookingList = ({ bookings }) => {
    return (
        <div className="booking-list">
            <h2>Your Bookings</h2>
            <ul>
                {bookings.map((booking, index) => (
                    <li key={index}>
                        Booking ID: {booking.id}, Seats: {booking.seats.join(', ')}, Name: {booking.name}, Phone: {booking.phone}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookingList;
