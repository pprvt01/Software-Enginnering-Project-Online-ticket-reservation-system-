import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SearchRoutes from "./pages/SearchRoutes";
import Booking from "./pages/Booking";
import Ticket from "./pages/Ticket";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BookingProvider } from "./context/BookingContext";

export default function App() {
  return (
    <BookingProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchRoutes />} />
          <Route path="/book/:id" element={<Booking />} />
          <Route path="/ticket" element={<Ticket />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </BookingProvider>
  );
}