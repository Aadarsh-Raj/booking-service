// src/components/BookingForm.js
import React, { useState } from 'react';
import "./Style/bookingform.css"

const BookingForm = ({ seats, onBook }) => {
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleSeatChange = (e) => {
        const { value, checked } = e.target;
        setSelectedSeats((prev) =>
            checked ? [...prev, value] : prev.filter((seat) => seat !== value)
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onBook(selectedSeats, name, phone);
    };

    return (
        <form onSubmit={handleSubmit} className='booking-form'>
            <h2>Book Seats</h2>
            <div>
                <label>Name: </label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label>Phone: </label>
                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div>
                <h3>Select Seats</h3>
                {seats.map((seat) => (
                    <div key={seat.id}>
                        <input
                            type="checkbox"
                            id={`seat-${seat.id}`}
                            value={seat.id}
                            onChange={handleSeatChange}
                        />
                        <label htmlFor={`seat-${seat.id}`}>{seat.name}</label>
                    </div>
                ))}
            </div>
            <button type="submit">Book</button>
        </form>
    );
};

export default BookingForm;
