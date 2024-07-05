import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import SeatsList from "./Components/SeatList";
import SeatDetails from "./Components/SeatDetails";
import BookingForm from "./Components/BookingForm";
import BookingList from "./Components/BookingList";
import { seats, pricing } from "./Data/mockData";
import { saveToLocalStorage, getFromLocalStorage } from "./Utils/localStorage";
import { useEffect, useState } from "react";
function App() {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    const storedBookings = getFromLocalStorage("bookings") || [];
    setBookings(storedBookings);
  }, []);
  const handleBooking = (selectedSeats, name, phone) => {
    const newBooking = {
      id: bookings.length + 1,
      seats: selectedSeats,
      name,
      phone,
    };
    const updatedBookings = [...bookings, newBooking];
    setBookings(updatedBookings);
    saveToLocalStorage("bookings", updatedBookings);
  };

  return (
    <>
      <main>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Seats</Link>
              </li>
              <li>
                <Link to="/booking">Book</Link>
              </li>
              <li>
                <Link to="/bookings">My Bookings</Link>
              </li>
            </ul>
          </nav>
        </div>
       <div className="routes-container">
       <Routes>
          <Route path="/" element={<SeatsList seats={seats} />} />
          <Route
            path="/seat/:id"
            element={<SeatDetails seats={seats} pricing={pricing} />}
          />
          <Route
            path="/booking"
            element={<BookingForm seats={seats} onBook={handleBooking} />}
          />
          <Route
            path="/bookings"
            element={<BookingList bookings={bookings} />}
          />
        </Routes>
       </div>
      </main>
    </>
  );
}

export default App;
