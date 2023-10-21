import { useState } from "react";
import "./index.css";

const Header = () => {
  const [tickets, setTickets] = useState(1);
  const [ticketType, setTicketType] = useState("Standard");
  return (
    <div className="page-background">
      <div className="header-container">
        <div>
          <div className="movie-details">
            <h4>Mad (2023)&nbsp;</h4>
            <h4 className="circle">UA</h4>
          </div>
          <p className="location">Imax: Hyderabad| Today, 21 Oct, 02:00 PM</p>
        </div>
        <div className="right-container">
          <select>
            <option value="Standard" selected>
              Standard
            </option>
            <option value="Premium">Premium</option>
          </select>
          <select>
            <option value={1} selected>
              1 Ticket
            </option>
            <option value={2}>2 Tickets</option>
            <option value={3}>3 Tickets</option>
            <option value={4}>4 Tickets</option>
            <option value={5}>5 Tickets</option>
            <option value={6}>6 Tickets</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Header;
